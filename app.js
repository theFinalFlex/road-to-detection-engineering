(() => {
  'use strict';
  const roadmap = window.ROADMAP;
  if (!roadmap?.phases) return;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);

  function resourcesHTML(topic) {
    return [['free', 'Free'], ['paid', 'Paid'], ['book', 'Books']].map(([type, label]) => {
      const resources = topic.resources.filter(resource => resource.type === type);
      if (!resources.length) return '';
      return `<section class="resource-group" aria-label="${label}"><h4>${label}</h4><ul>${resources.map(resource => `<li><a href="${escape(resource.url)}" target="_blank" rel="noopener noreferrer">${escape(resource.label)}<span class="sr-only"> (opens in a new tab)</span></a><p>${escape(resource.note)}</p></li>`).join('')}</ul></section>`;
    }).join('');
  }

  function topicHTML(topic) {
    const context = [];
    if (topic.platform === 'windows') context.push('Windows');
    if (topic.platform === 'linux') context.push('Linux');
    if (topic.htbModule) context.push('HTB Academy');
    if (topic.kind === 'optional') context.push('Optional depth');
    return `<details class="topic" id="topic-${escape(topic.id)}"><summary><span>${escape(topic.title)}</span><span class="topic-chevron" aria-hidden="true">+</span></summary><div class="topic-content">${context.length ? `<p class="topic-context">${context.join(' / ')}</p>` : ''}<p class="topic-summary">${escape(topic.summary)}</p>${topic.goal ? `<p class="topic-goal">${escape(topic.goal)}</p>` : ''}<ul class="topic-notes">${topic.details.map(detail => `<li>${escape(detail)}</li>`).join('')}</ul><div class="resources-by-type">${resourcesHTML(topic)}</div></div></details>`;
  }

  const reaction = '<figure class="manga-panel"><img src="https://i.pinimg.com/736x/a6/80/1c/a6801c177dd75370cd92a33e823fe53d.jpg" alt="A puzzled, sweating Killy glances sideways in a black-and-white BLAME! panel." width="736" height="451" loading="lazy" referrerpolicy="no-referrer"><figcaption>BLAME! / Tsutomu Nihei · <a href="https://www.pinterest.com/pin/1107111520935494274/" target="_blank" rel="noopener noreferrer">source</a></figcaption></figure>';
  document.getElementById('roadmap-content').innerHTML = roadmap.phases.map(phase => `<section class="phase" id="${escape(phase.id)}" aria-labelledby="heading-${escape(phase.id)}"><h2 id="heading-${escape(phase.id)}">${escape(phase.title)}</h2><div class="phase-body">${phase.steps.map(topicHTML).join('')}</div></section>${phase.id === 'detection-core' ? reaction : ''}`).join('');
})();
