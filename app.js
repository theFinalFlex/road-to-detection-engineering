(() => {
  'use strict';
  const roadmap = window.ROADMAP;
  if (!roadmap?.phases) return;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
  const pad = number => String(number).padStart(2, '0');
  const glyphs = {
    code: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/>',
    chip: '<path d="M6 6h12v12H6zM9 9h6v6H9zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
    windows: '<path d="M3 3h8v8H3zM14 3h7v8h-7zM3 14h8v7H3zM14 14h7v7h-7z"/>',
    binary: '<path d="M5 2h10l4 4v16H5zM14 2v5h5M8 11h2v3H8zM14 11h2m-1 0v3M8 18h2m-1-2v2m5-2h2v3h-2z"/>',
    debugger: '<path d="M9 7h6v12H9zM10 3l2 4 2-4M4 9h5m6 0h5M3 14h6m6 0h6M5 21l4-4m6 0 4 4M9 12h6"/>',
    detection: '<path d="M3 8V3h5m8 0h5v5m0 8v5h-5M8 21H3v-5M2 12h6l2-4 4 8 2-4h6"/>',
    lab: '<path d="M8 3h8M10 3v6L4 19v2h16v-2L14 9V3M7 16h10M10 12h4"/>',
    identity: '<path d="M14 3h7v7h-7zM14 10 3 21m2-2-2-2m5-1-2-2M17 6h1"/>',
    memory: '<path d="M3 5h18v14H3zM7 8h3v7H7zm7 0h3v7h-3zM6 19v3m4-3v3m4-3v3m4-3v3"/>',
    trace: '<path d="M2 12h5l2-7 4 14 2-7h7M4 3h4m8 18h4"/>',
    network: '<path d="M9 2h6v6H9zM2 16h6v6H2zm14 0h6v6h-6zM12 8v5M5 16v-3h14v3"/>',
    persistence: '<path d="M4 8V3m0 5h5M4 8a9 9 0 0 1 16-2m0 10v5m0-5h-5m5 0a9 9 0 0 1-16 2"/>',
    privilege: '<path d="m4 14 8-9 8 9M8 18l4-5 4 5M3 22h18"/>',
    certificate: '<path d="M5 2h14v15H5zM8 6h8M8 10h5M8 17v5l4-2 4 2v-5"/>'
  };
  function icon(name, className = '') {
    if (['htb', 'python', 'linux'].includes(name)) return `<img class="symbol brand-symbol ${className}" src="icons/${name}.svg" alt="" width="24" height="24" aria-hidden="true">`;
    return `<svg class="symbol ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${glyphs[name] || glyphs.detection}</svg>`;
  }
  function resourceIcons(resource) {
    const host = new URL(resource.url).hostname;
    const marks = [];
    if (host === 'academy.hackthebox.com' || host === 'www.hackthebox.com') marks.push(icon('htb'));
    if (/python/i.test(resource.label)) marks.push(icon('python'));
    return marks.length ? `<span class="resource-symbols" aria-hidden="true">${marks.join('')}</span>` : '';
  }
  const panels = [
    {
      after: 'foundations',
      image: 'https://stat.ameba.jp/user_images/20140302/13/funkygremlin71/22/13/j/o0800062912862534027.jpg',
      source: 'https://ameblo.jp/funkygremlin71/entry-11785458499.html',
      alt: 'Killy and Cibo face a biomechanical entity that says it cannot make direct contact with them, from BLAME!',
      quote: 'We are unable to make direct contact with you.',
      width: 800, height: 629
    },
    {
      after: 'windows-kernel',
      image: 'https://i.pinimg.com/736x/e7/fe/af/e7feafa736f679e2cf74fd5a7545dbd0.jpg',
      source: 'https://in.pinterest.com/pin/character-design-manga-art-art--339740365632095880/',
      alt: 'BLAME! page showing a character using a mechanical interface, followed by a message that Pcell has opened the entrance.',
      quote: 'Pcell has opened the entrance.',
      width: 728, height: 1061
    }
  ];

  function resourcesHTML(topic) {
    return [['free', 'Free courses & references'], ['paid', 'Paid courses & labs'], ['book', 'Books']].map(([type, label]) => {
      const resources = topic.resources.filter(resource => resource.type === type);
      if (!resources.length) return '';
      return `<section class="resource-group" aria-label="${label}"><h4>${label}</h4><ul>${resources.map(resource => `<li><a href="${escape(resource.url)}" target="_blank" rel="noopener noreferrer">${resourceIcons(resource)}${escape(resource.label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a><p>${escape(resource.note)}</p></li>`).join('')}</ul></section>`;
    }).join('');
  }

  function topicHTML(topic) {
    const platform = topic.platform === 'windows' ? 'Windows' : topic.platform === 'linux' ? 'Linux' : '';
    const marker = platform ? `<span class="platform-marker">${icon(topic.platform)}<span>${platform}</span></span>` : '';
    const htb = topic.htbModule ? `<span class="htb-mark" title="HTB Academy module">${icon('htb')}<span class="sr-only"> (HTB Academy module)</span></span>` : '';
    const language = topic.id === 'programming' ? `<span class="language-mark" aria-hidden="true">${icon('python')}</span>` : '';
    return `<details class="topic" id="topic-${escape(topic.id)}" data-platform="${escape(topic.platform)}"><summary><span class="topic-symbol">${icon(topic.symbol)}</span><span class="topic-heading"><span class="topic-name">${escape(topic.title)}${language}${htb}</span>${topic.kind === 'optional' ? '<small>Optional depth</small>' : ''}</span>${marker}<span class="topic-chevron" aria-hidden="true">+</span></summary><div class="topic-content"><p class="topic-summary">${escape(topic.summary)}</p>${topic.goal ? `<p class="topic-goal"><strong>In practice:</strong> ${escape(topic.goal)}</p>` : ''}<ul class="topic-notes">${topic.details.map(detail => `<li>${escape(detail)}</li>`).join('')}</ul><div class="resources-by-type">${resourcesHTML(topic)}</div></div></details>`;
  }

  function panelHTML(panel) {
    return `<figure class="manga-panel${panel.after === 'windows-kernel' ? ' manga-panel-right' : ''}"><img src="${panel.image}" alt="${escape(panel.alt)}" width="${panel.width}" height="${panel.height}" loading="lazy" referrerpolicy="no-referrer"><figcaption><q>${escape(panel.quote)}</q><span>BLAME! — Tsutomu Nihei · <a href="${panel.source}" target="_blank" rel="noopener noreferrer">source ↗</a></span></figcaption></figure>`;
  }

  document.getElementById('phase-nav').innerHTML = roadmap.phases.map((phase, index) => `<a href="#${escape(phase.id)}"><span>${pad(index + 1)}</span>${escape(phase.title)}</a>`).join('');
  document.getElementById('roadmap-content').innerHTML = roadmap.phases.map((phase, index) => {
    const panel = panels.find(panel => panel.after === phase.id);
    return `<section class="phase" id="${escape(phase.id)}" aria-labelledby="heading-${escape(phase.id)}"><div class="phase-heading"><span>${pad(index + 1)}</span><h2 id="heading-${escape(phase.id)}">${escape(phase.title)}</h2></div><p class="phase-description">${escape(phase.description)}</p>${phase.steps.map(topicHTML).join('')}</section>${panel ? panelHTML(panel) : ''}`;
  }).join('');
})();
