(() => {
  'use strict';
  const roadmap = window.ROADMAP;
  if (!roadmap?.phases) return;
  const steps = roadmap.phases.flatMap(phase => phase.steps);
  const ids = new Set(steps.map(step => step.id));
  const legacyMap = new Map();
  for (const step of steps) for (const oldId of step.legacyIds || []) {
    if (!legacyMap.has(oldId)) legacyMap.set(oldId, []);
    legacyMap.get(oldId).push(step.id);
  }
  const migrate = values => new Set(values.flatMap(id => ids.has(id) ? [id] : (legacyMap.get(id) || [])));
  const storageKey = 'road-to-detection-engineering:v2';
  const oldStorageKey = 'road-to-detection-engineering:v1';
  const content = document.getElementById('roadmap-content');
  const search = document.getElementById('search');
  const expandButton = document.getElementById('expand-resources');
  const openSteps = new Set();
  let completed = new Set();
  let storageWorks = true;
  let toastTimer;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
  const checkIcon = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 8 3 3 7-7"/></svg>';
  const pad = n => String(n).padStart(2,'0');
  const interludes = [
    {
      after:0,
      image:'https://i.pinimg.com/736x/03/90/12/0390125306f043831bf76f9396169cbf.jpg',
      source:'https://www.pinterest.com/pin/cibo-w-killy-in-da-back-blame--17803361025020565/',
      alt:'Cibo faces forward with Killy standing in shadow behind her, from BLAME!',
      width:736,height:649,
      note:'Pick what works for you. A free course, a paid class, a book. The point is to understand the thing.',
      label:'A NOTE FROM THE MARGIN'
    },
    {
      after:3,
      image:'https://i.pinimg.com/736x/0b/c1/9b/0bc19b9311f500b7c4a3a8b7f807005d.jpg',
      source:'https://br.pinterest.com/pin/blame--17803361025092296/',
      alt:'BLAME! manga panel showing two travelers beside a skeletal machine, with the dialogue “We can’t stay here.”',
      width:640,height:702,
      note:'You’ve come a long way. Finish the labs. Explain the evidence. Then check the official exam requirements.',
      label:'ALMOST THERE'
    }
  ];
  try {
    const raw = localStorage.getItem(storageKey);
    const saved = JSON.parse(raw || localStorage.getItem(oldStorageKey) || 'null');
    if (Array.isArray(saved?.completed)) completed = migrate(saved.completed.filter(id => typeof id === 'string'));
    if (!raw && saved) localStorage.setItem(storageKey,JSON.stringify({version:2,completed:[...completed]}));
  } catch { storageWorks = false; }

  function notify(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'),3800);
  }
  function save() {
    try { localStorage.setItem(storageKey,JSON.stringify({version:2,completed:[...completed]})); storageWorks=true; }
    catch { storageWorks=false; notify('Browser storage is unavailable. Export your progress to keep a backup.'); }
    document.querySelector('.local-note').textContent = storageWorks ? 'Progress saves in this browser. Export it to move devices.' : 'Storage unavailable. Export to save your progress.';
  }
  function updateProgress() {
    const percent = Math.round(completed.size / steps.length * 100);
    document.getElementById('all-complete').textContent = `${completed.size} / ${steps.length} topics completed`;
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-track').setAttribute('aria-valuenow',completed.size);
    document.getElementById('progress-track').setAttribute('aria-valuemax',steps.length);
  }
  function matches(step) {
    const query = search.value.trim().toLowerCase();
    const haystack = [step.title,step.summary,step.goal || '',...step.details,...step.resources.flatMap(r => [r.label,r.note || '',r.type || ''])].join(' ').toLowerCase();
    return !query || haystack.includes(query);
  }
  function resourceHTML(step) {
    const types = [['free','Free courses & references'],['paid','Paid courses & labs'],['book','Books']];
    return types.map(([type,label]) => {
      const resources=step.resources.filter(r => (r.type || 'paid')===type);
      if (!resources.length) return '';
      return `<section class="resource-group" aria-label="${label}"><h4>${label}</h4><ul>${resources.map(r => `<li><a href="${escape(r.url)}" target="_blank" rel="noopener noreferrer">${escape(r.label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>${r.note ? `<p>${escape(r.note)}</p>` : ''}</li>`).join('')}</ul></section>`;
    }).join('');
  }
  function stepHTML(step) {
    const checked=completed.has(step.id), open=openSteps.has(step.id);
    const types=['free','paid','book'].filter(type=>step.resources.some(r=>(r.type || 'paid')===type));
    const hints=types.map(type=>({free:'Free',paid:'Paid',book:'Books'})[type]).filter(Boolean).join(' / ');
    return `<article class="step${checked?' is-complete':''}" id="step-${step.id}"><div class="step-row">
      <label class="complete-control"><input type="checkbox" data-complete="${step.id}" aria-label="Mark ${escape(step.title)} complete" ${checked?'checked':''}><span class="checkbox-face">${checkIcon}</span></label>
      <button class="step-toggle" id="toggle-${step.id}" aria-controls="panel-${step.id}" aria-expanded="${open}" data-toggle="${step.id}"><span class="step-name"><span class="step-title">${escape(step.title)}</span><span class="step-meta">${hints}${step.kind==='optional'?' · optional depth':''}</span></span><span class="step-source-count">${step.resources.length} ${step.resources.length===1?'resource':'resources'}</span><span class="step-chevron" aria-hidden="true">+</span></button>
      </div><div class="step-panel" id="panel-${step.id}" aria-labelledby="toggle-${step.id}" ${open?'':'hidden'}><div class="step-panel-inner"><p class="step-summary">${escape(step.summary)}</p>${step.goal?`<p class="topic-goal"><strong>Ready to move on:</strong> ${escape(step.goal)}</p>`:''}<ul class="step-details">${step.details.map(detail=>`<li>${escape(detail)}</li>`).join('')}</ul><div class="resources-by-type">${resourceHTML(step)}</div></div></div></article>`;
  }
  function panelHTML(panel) {
    return `<aside class="manga-note" aria-label="Roadmap margin note"><figure><img src="${panel.image}" alt="${escape(panel.alt)}" width="${panel.width}" height="${panel.height}" loading="lazy" referrerpolicy="no-referrer"><figcaption>BLAME! — Tsutomu Nihei · <a href="${panel.source}" target="_blank" rel="noopener noreferrer">source ↗</a></figcaption></figure><div class="speech-note"><span>${panel.label}</span><p>${escape(panel.note)}</p><small>Roadmap note · original caption</small></div></aside>`;
  }
  function updateExpandButton() {
    const visible=steps.filter(matches);
    const expanded=visible.length>0 && visible.every(step=>openSteps.has(step.id));
    expandButton.setAttribute('aria-pressed',String(expanded));
    expandButton.textContent=expanded?'Collapse resources −':'Expand resources +';
  }
  function render() {
    let shown=0;
    content.innerHTML=roadmap.phases.map((phase,index)=>{
      const visible=phase.steps.filter(matches);
      if (!visible.length) return '';
      shown+=visible.length;
      const panel=interludes.find(item=>item.after===index);
      return `<section class="phase" id="${phase.id}" aria-labelledby="heading-${phase.id}"><div class="phase-heading"><span class="phase-index">${pad(index+1)}</span><h3 id="heading-${phase.id}">${escape(phase.title)}</h3><span class="phase-label">${pad(visible.length)} TOPICS</span></div><p class="phase-description">${escape(phase.description)}</p><div class="steps">${visible.map(stepHTML).join('')}</div></section>${panel&&!search.value.trim()?panelHTML(panel):''}`;
    }).join('');
    document.getElementById('empty-state').hidden=shown>0;
    updateProgress();updateExpandButton();
  }
  function goToStep(step) {
    search.value='';openSteps.add(step.id);render();
    const article=document.getElementById(`step-${step.id}`);
    article.scrollIntoView({block:'center'});article.classList.add('is-highlighted');
    article.querySelector('.step-toggle').focus({preventScroll:true});
    setTimeout(()=>article.classList.remove('is-highlighted'),1800);
  }
  content.addEventListener('click',event=>{
    const button=event.target.closest('[data-toggle]');if(!button)return;
    const id=button.dataset.toggle,expanded=button.getAttribute('aria-expanded')!=='true';
    button.setAttribute('aria-expanded',String(expanded));document.getElementById(`panel-${id}`).hidden=!expanded;
    expanded?openSteps.add(id):openSteps.delete(id);updateExpandButton();
  });
  content.addEventListener('change',event=>{
    const input=event.target.closest('[data-complete]');if(!input)return;
    input.checked?completed.add(input.dataset.complete):completed.delete(input.dataset.complete);
    input.closest('.step').classList.toggle('is-complete',input.checked);save();updateProgress();
  });
  document.getElementById('phase-nav').innerHTML=roadmap.phases.map((phase,index)=>`<a href="#${phase.id}" data-phase="${phase.id}"><span class="phase-number">${pad(index+1)}</span>${escape(phase.title)}</a>`).join('');
  document.getElementById('phase-nav').addEventListener('click',event=>{
    const link=event.target.closest('[data-phase]');if(!link)return;
    event.preventDefault();search.value='';render();document.getElementById(link.dataset.phase).scrollIntoView({block:'start'});
  });
  expandButton.addEventListener('click',()=>{
    const visible=steps.filter(matches), close=visible.every(step=>openSteps.has(step.id));
    visible.forEach(step=>close?openSteps.delete(step.id):openSteps.add(step.id));render();
  });
  search.addEventListener('input',render);
  document.getElementById('resume-button').addEventListener('click',()=>{
    const next=steps.find(step=>!completed.has(step.id)&&step.kind!=='optional')||steps.find(step=>!completed.has(step.id));
    next?goToStep(next):notify('Every topic is checked off. Check the official exam requirements for updates.');
  });
  document.getElementById('share-button').addEventListener('click',async()=>{
    const url=new URL(location.href);url.hash='';url.search='';
    try{await navigator.clipboard.writeText(url.href);notify('Link copied. Share it with your study group.');}
    catch{notify('Copy the website address from your browser to share this path.');}
  });
  document.getElementById('export-progress').addEventListener('click',()=>{
    const data={app:'road-to-detection-engineering',version:2,exportedAt:new Date().toISOString(),completed:[...completed]};
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download='detection-engineering-progress.json';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Progress exported. Import it on another device to continue.');
  });
  document.getElementById('import-button').addEventListener('click',()=>document.getElementById('import-progress').click());
  document.getElementById('import-progress').addEventListener('change',async event=>{
    const file=event.target.files?.[0];if(!file)return;
    try{
      if(file.size>65536)throw Error('size');
      const data=JSON.parse(await file.text());
      if(data.app!=='road-to-detection-engineering'||![1,2].includes(data.version)||!Array.isArray(data.completed)||data.completed.some(id=>typeof id!=='string'))throw Error('format');
      const imported=migrate(data.completed);imported.forEach(id=>completed.add(id));save();render();
      notify(`Imported ${imported.size} completed topics. Your existing progress was kept.`);
    }catch{notify('That file is not a valid progress backup. Choose a JSON file exported from this roadmap.');}
    event.target.value='';
  });
  const resetDialog=document.getElementById('reset-dialog');
  document.getElementById('reset-progress').addEventListener('click',()=>{resetDialog.returnValue='';resetDialog.showModal();});
  resetDialog.addEventListener('close',()=>{if(resetDialog.returnValue!=='reset')return;completed.clear();save();render();notify('Progress reset. Ready for a fresh start.');});
  window.addEventListener('storage',event=>{
    if(event.key!==storageKey)return;
    try{const value=JSON.parse(event.newValue||'null');completed=migrate(Array.isArray(value?.completed)?value.completed:[]);render();}catch{}
  });
  if(!storageWorks)document.querySelector('.local-note').textContent='Storage unavailable. Export to save your progress.';
  render();
})();
