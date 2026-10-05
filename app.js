(() => {
  'use strict';
  const roadmap = window.ROADMAP;
  if (!roadmap?.phases) return;
  const steps = roadmap.phases.flatMap(phase => phase.steps);
  const ids = new Set(steps.map(step => step.id));
  const targets = steps.filter(step => step.target);
  const storageKey = 'road-to-detection-engineering:v1';
  const content = document.getElementById('roadmap-content');
  const search = document.getElementById('search');
  const openSteps = new Set();
  let filter = 'all';
  let completed = new Set();
  let storageWorks = true;
  let toastTimer;
  const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const checkIcon = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 8 3 3 7-7"/></svg>';
  const pad = number => String(number).padStart(2, '0');

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && Array.isArray(saved.completed)) completed = new Set(saved.completed.filter(id => ids.has(id)));
  } catch { storageWorks = false; }

  function notify(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3800);
  }

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, completed: [...completed] }));
      storageWorks = true;
    } catch {
      storageWorks = false;
      notify('Browser storage is unavailable. Export your progress to keep a backup.');
    }
    document.querySelector('.local-note').textContent = storageWorks ? '◈ Saved in this browser. No account needed.' : '◈ Storage unavailable. Export to save your progress.';
  }

  function updateProgress() {
    const count = targets.filter(step => completed.has(step.id)).length;
    const percentage = Math.round(count / targets.length * 100);
    document.getElementById('core-complete').textContent = count;
    document.getElementById('progress-percent').textContent = percentage + '%';
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-track').setAttribute('aria-valuenow', count);
    document.getElementById('all-complete').textContent = `${completed.size} / ${steps.length} study steps done`;
    document.getElementById('start-learning').innerHTML = completed.size ? 'Continue the roadmap <span aria-hidden="true">↘</span>' : 'Start the roadmap <span aria-hidden="true">↘</span>';
    for (const phase of roadmap.phases) {
      const phaseCount = phase.steps.filter(step => completed.has(step.id)).length;
      const navCount = document.querySelector(`[data-phase-count="${phase.id}"]`);
      if (navCount) navCount.textContent = `${phaseCount}/${phase.steps.length}`;
    }
  }

  function matches(step) {
    const query = search.value.trim().toLowerCase();
    const inFilter = filter === 'all' || (filter === 'target' && step.target) || step.provider === filter;
    const haystack = [step.title, step.provider, step.summary, ...step.details, ...step.resources.map(resource => resource.label)].join(' ').toLowerCase();
    return inFilter && (!query || haystack.includes(query));
  }

  function stepHTML(step) {
    const checked = completed.has(step.id);
    const open = openSteps.has(step.id);
    const labels = { foundation: 'Foundation · skip if mastered', target: 'Advanced HTB module', optional: 'Optional / as needed', launch: 'Check official requirements at launch' };
    const dotClass = step.target ? 'target-dot' : step.kind === 'optional' ? 'optional-dot' : 'foundation-dot';
    return `<article class="step${checked ? ' is-complete' : ''}" id="step-${step.id}">
      <div class="step-row">
        <label class="complete-control"><input type="checkbox" data-complete="${step.id}" aria-label="Mark ${escape(step.title)} complete" ${checked ? 'checked' : ''}><span class="checkbox-face">${checkIcon}</span></label>
        <button class="step-toggle" id="toggle-${step.id}" aria-controls="panel-${step.id}" aria-expanded="${open}" data-toggle="${step.id}">
          <span class="step-name"><span class="step-title">${escape(step.title)}</span><span class="step-meta"><i class="key-dot ${dotClass}" aria-hidden="true"></i>${labels[step.kind]}</span></span>
          <span class="step-provider provider-${step.provider.toLowerCase()}">${step.provider}</span><span class="step-chevron" aria-hidden="true">+</span>
        </button>
      </div>
      <div class="step-panel" id="panel-${step.id}" aria-labelledby="toggle-${step.id}" ${open ? '' : 'hidden'}><div class="step-panel-inner">
        <p class="step-summary">${escape(step.summary)}</p><ul class="step-details">${step.details.map(detail => `<li>${escape(detail)}</li>`).join('')}</ul>
        <div class="resources">${step.resources.map(resource => `<a class="resource-link" href="${escape(resource.url)}" target="_blank" rel="noopener noreferrer">${escape(resource.label)}<span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>`).join('')}</div>
      </div></div>
    </article>`;
  }

  function render() {
    let shown = 0;
    content.innerHTML = roadmap.phases.map((phase, index) => {
      const visible = phase.steps.filter(matches);
      if (!visible.length) return '';
      shown += visible.length;
      return `<section class="phase" id="${phase.id}" aria-labelledby="heading-${phase.id}"><div class="phase-heading"><span class="phase-index">${pad(index + 1)}</span><h3 id="heading-${phase.id}">${escape(phase.title)}</h3><span class="phase-label">${pad(visible.length)} ${visible.length === 1 ? 'STEP' : 'STEPS'}</span></div><p class="phase-description">${escape(phase.description)}</p><div class="steps">${visible.map(stepHTML).join('')}</div></section>`;
    }).join('');
    document.getElementById('empty-state').hidden = shown > 0;
    document.querySelectorAll('[data-filter]').forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    updateProgress();
  }

  function resetView() {
    filter = 'all';
    search.value = '';
  }

  function goToStep(step) {
    resetView();
    openSteps.add(step.id);
    render();
    const article = document.getElementById(`step-${step.id}`);
    article.scrollIntoView({ block: 'center' });
    article.classList.add('is-highlighted');
    article.querySelector('.step-toggle').focus({ preventScroll: true });
    setTimeout(() => article.classList.remove('is-highlighted'), 1800);
  }

  content.addEventListener('click', event => {
    const button = event.target.closest('[data-toggle]');
    if (!button) return;
    const id = button.dataset.toggle;
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById(`panel-${id}`).hidden = !expanded;
    expanded ? openSteps.add(id) : openSteps.delete(id);
  });

  content.addEventListener('change', event => {
    const input = event.target.closest('[data-complete]');
    if (!input) return;
    input.checked ? completed.add(input.dataset.complete) : completed.delete(input.dataset.complete);
    input.closest('.step').classList.toggle('is-complete', input.checked);
    save();
    updateProgress();
  });

  document.getElementById('phase-nav').innerHTML = roadmap.phases.map((phase, index) => `<a href="#${phase.id}" data-phase="${phase.id}"><span class="phase-number">${pad(index + 1)}</span>${escape(phase.title)}<span class="phase-nav-count" data-phase-count="${phase.id}">0/${phase.steps.length}</span></a>`).join('');
  document.getElementById('phase-nav').addEventListener('click', event => {
    const link = event.target.closest('[data-phase]');
    if (!link) return;
    event.preventDefault();
    resetView();
    render();
    document.getElementById(link.dataset.phase).scrollIntoView({ block: 'start' });
  });

  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    render();
  }));
  search.addEventListener('input', render);
  document.getElementById('resume-button').addEventListener('click', () => {
    const next = steps.find(step => !completed.has(step.id) && step.kind !== 'optional') || steps.find(step => !completed.has(step.id));
    if (next) goToStep(next);
    else notify('Every step is checked off. Revisit the official certification requirements for any updates.');
  });

  document.getElementById('share-button').addEventListener('click', async () => {
    const url = new URL(location.href);
    url.hash = '';
    url.search = '';
    try {
      await navigator.clipboard.writeText(url.href);
      notify('Link copied. Share it with your study group.');
    } catch {
      notify('Copy the website address from your browser to share this path.');
    }
  });

  document.getElementById('export-progress').addEventListener('click', () => {
    const data = { app: 'road-to-detection-engineering', version: 1, exportedAt: new Date().toISOString(), completed: [...completed] };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'detection-engineering-progress.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify('Progress exported. Import this file on another device to continue.');
  });

  document.getElementById('import-button').addEventListener('click', () => document.getElementById('import-progress').click());

  document.getElementById('import-progress').addEventListener('change', async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 65536) throw new Error('size');
      const data = JSON.parse(await file.text());
      if (data.app !== 'road-to-detection-engineering' || data.version !== 1 || !Array.isArray(data.completed) || data.completed.some(id => typeof id !== 'string')) throw new Error('format');
      const imported = data.completed.filter(id => ids.has(id));
      imported.forEach(id => completed.add(id));
      save();
      render();
      notify(`Imported ${new Set(imported).size} completed steps. Your existing progress was kept.`);
    } catch {
      notify('That file is not a valid progress backup. Choose a JSON file exported from this roadmap.');
    }
    event.target.value = '';
  });

  const resetDialog = document.getElementById('reset-dialog');
  document.getElementById('reset-progress').addEventListener('click', () => {
    resetDialog.returnValue = '';
    resetDialog.showModal();
  });
  resetDialog.addEventListener('close', () => {
    if (resetDialog.returnValue !== 'reset') return;
    completed.clear();
    save();
    render();
    notify('Progress reset. Ready for a fresh start.');
  });

  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    try {
      const value = JSON.parse(event.newValue || 'null');
      completed = new Set(Array.isArray(value?.completed) ? value.completed.filter(id => ids.has(id)) : []);
      render();
    } catch { /* Keep current progress when another tab writes invalid data. */ }
  });

  document.getElementById('ost2-count').textContent = steps.filter(step => step.provider === 'OST2').length;
  if (!storageWorks) document.querySelector('.local-note').textContent = '◈ Storage unavailable. Export to save your progress.';
  render();
})();
