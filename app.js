(() => {
  'use strict';
  const roadmap = window.ROADMAP;
  if (!roadmap?.phases) return;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
  const pad = number => String(number).padStart(2, '0');
  const panels = [
    {
      after: 0,
      image: 'https://i.pinimg.com/736x/03/90/12/0390125306f043831bf76f9396169cbf.jpg',
      source: 'https://www.pinterest.com/pin/cibo-w-killy-in-da-back-blame--17803361025020565/',
      alt: 'Cibo faces forward with Killy standing in shadow behind her, from BLAME!',
      width: 736, height: 649
    },
    {
      after: 3,
      image: 'https://i.pinimg.com/736x/0b/c1/9b/0bc19b9311f500b7c4a3a8b7f807005d.jpg',
      source: 'https://br.pinterest.com/pin/blame--17803361025092296/',
      alt: 'Two travelers beside a skeletal machine in BLAME!, with the dialogue “We can’t stay here.”',
      width: 640, height: 702
    }
  ];

  function resourcesHTML(topic) {
    return [['free', 'Free courses & references'], ['paid', 'Paid courses & labs'], ['book', 'Books']].map(([type, label]) => {
      const resources = topic.resources.filter(resource => resource.type === type);
      if (!resources.length) return '';
      return `<section class="resource-group" aria-label="${label}"><h4>${label}</h4><ul>${resources.map(resource => `<li><a href="${escape(resource.url)}" target="_blank" rel="noopener noreferrer">${escape(resource.label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a><p>${escape(resource.note)}</p></li>`).join('')}</ul></section>`;
    }).join('');
  }

  function topicHTML(topic) {
    return `<details class="topic" id="topic-${escape(topic.id)}"><summary><span>${escape(topic.title)}${topic.kind === 'optional' ? '<small>Optional depth</small>' : ''}</span><span class="topic-chevron" aria-hidden="true">+</span></summary><div class="topic-content"><p class="topic-summary">${escape(topic.summary)}</p>${topic.goal ? `<p class="topic-goal"><strong>In practice:</strong> ${escape(topic.goal)}</p>` : ''}<ul class="topic-notes">${topic.details.map(detail => `<li>${escape(detail)}</li>`).join('')}</ul><div class="resources-by-type">${resourcesHTML(topic)}</div></div></details>`;
  }

  function panelHTML(panel) {
    return `<figure class="manga-panel${panel.after === 3 ? ' manga-panel-right' : ''}"><img src="${panel.image}" alt="${escape(panel.alt)}" width="${panel.width}" height="${panel.height}" loading="lazy" referrerpolicy="no-referrer"><figcaption>BLAME! — Tsutomu Nihei · <a href="${panel.source}" target="_blank" rel="noopener noreferrer">source ↗</a></figcaption></figure>`;
  }

  document.getElementById('phase-nav').innerHTML = roadmap.phases.map((phase, index) => `<a href="#${escape(phase.id)}"><span>${pad(index + 1)}</span>${escape(phase.title)}</a>`).join('');
  document.getElementById('roadmap-content').innerHTML = roadmap.phases.map((phase, index) => {
    const panel = panels.find(panel => panel.after === index);
    return `<section class="phase" id="${escape(phase.id)}" aria-labelledby="heading-${escape(phase.id)}"><div class="phase-heading"><span>${pad(index + 1)}</span><h2 id="heading-${escape(phase.id)}">${escape(phase.title)}</h2></div><p class="phase-description">${escape(phase.description)}</p>${phase.steps.map(topicHTML).join('')}</section>${panel ? panelHTML(panel) : ''}`;
  }).join('');
})();
