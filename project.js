/* Reads PROJECTS & PROJECT_CATEGORIES from project-data.js.
   - index.html          : fills the single-row portfolio (.carousel-track[data-featured]) with one project per category
   - project.html        : full project grid with category filter (#projectGrid, #projectFilters)
   - project-detail.html : project detail from ?id=... */
(function () {
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var catName = function (slug) {
    var c = PROJECT_CATEGORIES.filter(function (x) { return x.slug === slug; })[0];
    return c ? c.name : slug;
  };
  var detailUrl = function (id) { return 'project-detail.html?id=' + encodeURIComponent(id); };
  var coverPos = function (p) { return p.coverPosition ? ' style="object-position:' + esc(p.coverPosition) + '"' : ''; };

  /* ---------- 1. Cards ---------- */
  var card = function (p) {
    return '<a class="game-card" href="' + detailUrl(p.id) + '" draggable="false" aria-label="View details of ' + esc(p.title) + '">' +
      '<div class="proj-thumb">' +
        '<span class="game-tag">' + esc(catName(p.category)) + '</span>' +
        '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" class="game-img" draggable="false"' + coverPos(p) + '>' +
      '</div>' +
      '<div class="proj-body"><h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p></div>' +
    '</a>';
  };

  // Home: one row, first project of every category
  document.querySelectorAll('.carousel-track[data-featured]').forEach(function (track) {
    track.innerHTML = PROJECT_CATEGORIES.map(function (c) {
      return PROJECTS.filter(function (p) { return p.category === c.slug; })[0];
    }).filter(Boolean).map(card).join('');

    // Dragging the carousel must not open a project
    var downX = 0, moved = false;
    track.addEventListener('mousedown', function (e) { downX = e.clientX; moved = false; });
    track.addEventListener('mousemove', function (e) { if (e.buttons && Math.abs(e.clientX - downX) > 6) moved = true; });
    track.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); moved = false; }
    }, true);
  });

  // Project page: all projects + category filter
  var grid = document.getElementById('projectGrid');
  var filters = document.getElementById('projectFilters');
  if (grid && filters) {
    var current = (location.hash || '').replace('#', '') || 'all';
    var tabs = [{ slug: 'all', name: 'All' }].concat(PROJECT_CATEGORIES);
    var rail = document.createElement('nav');
    rail.className = 'yr-rail';
    rail.id = 'yearRail';
    rail.setAttribute('aria-label', 'Jump to year');
    document.body.appendChild(rail);
    var io = null;

    var cardY = function (p) {
      return '<a class="game-card" href="' + detailUrl(p.id) + '" draggable="false" aria-label="View details of ' + esc(p.title) + '">' +
        '<div class="proj-thumb"><img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" class="game-img" draggable="false"' + coverPos(p) + '></div>' +
        '<div class="proj-body"><h3>' + esc(p.title) + '</h3>' +
        '<span class="proj-meta">' + esc(catName(p.category)) + ' / ' + esc(p.year) + '</span></div>' +
      '</a>';
    };

    var render = function () {
      filters.innerHTML = tabs.map(function (t) {
        return '<button type="button" class="pf-tab' + (t.slug === current ? ' active' : '') + '" data-slug="' + t.slug + '">' + esc(t.name) + '</button>';
      }).join('');
      var list = PROJECTS.filter(function (p) { return current === 'all' || p.category === current; });
      var years = [];
      list.forEach(function (p) { if (years.indexOf(p.year) === -1) years.push(p.year); });
      years.sort(function (a, b) { return b - a; });

      grid.innerHTML = years.map(function (y) {
        var items = list.filter(function (p) { return p.year === y; });
        return '<section class="yr-block" id="y' + y + '" data-year="' + y + '">' +
          '<div class="yr-side"><span class="yr-num">' + y + '</span><span class="yr-bar"></span>' +
          '<span class="yr-count">' + items.length + (items.length > 1 ? ' Projects' : ' Project') + '</span></div>' +
          '<div class="yr-list">' + items.map(cardY).join('') + '</div></section>';
      }).join('') || '<p class="pf-empty">No projects in this category yet.</p>';

      rail.innerHTML = years.map(function (y) {
        return '<button type="button" data-year="' + y + '" aria-label="Go to ' + y + '">' + String(y).slice(-2) + '</button>';
      }).join('');
      rail.style.display = years.length > 1 ? '' : 'none';

      if (io) io.disconnect();
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            rail.querySelectorAll('button').forEach(function (b) {
              b.classList.toggle('active', b.getAttribute('data-year') === en.target.getAttribute('data-year'));
            });
          });
        }, { rootMargin: '-35% 0px -60% 0px' });
        grid.querySelectorAll('.yr-block').forEach(function (el) { io.observe(el); });
      }
      var first = rail.querySelector('button');
      if (first) first.classList.add('active');
    };
    rail.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      var el = document.getElementById('y' + b.getAttribute('data-year'));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.pf-tab');
      if (!b) return;
      current = b.getAttribute('data-slug');
      history.replaceState(null, '', current === 'all' ? location.pathname : '#' + current);
      render();
    });
    render();
  }

  /* ---------- 2. Detail page ---------- */
  var root = document.getElementById('projectDetail');
  if (!root) return;

  var id = new URLSearchParams(location.search).get('id');
  var idx = PROJECTS.findIndex(function (p) { return p.id === id; });

  if (idx === -1) {
    document.title = 'Project not found — Meraki Studio';
    root.innerHTML =
      '<div class="pd-missing wrap">' +
        '<h1>Project not found</h1>' +
        '<p>The link you opened does not match any project. Please choose one from the project list.</p>' +
        '<a class="pd-back" href="project.html">Back to Projects</a>' +
      '</div>';
    return;
  }

  var p = PROJECTS[idx];
  document.title = p.title + ' — Meraki Studio';
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', p.summary);

  var same = PROJECTS.filter(function (x) { return x.category === p.category; });
  var pos = same.indexOf(p);
  var prev = same[(pos - 1 + same.length) % same.length];
  var next = same[(pos + 1) % same.length];

  var facts = [['Client', p.client], ['Year', p.year], ['Role', p.role], ['Duration', p.duration]]
    .filter(function (f) { return f[1]; })
    .map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('');

  var list = function (arr) { return arr.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join(''); };

  root.innerHTML =
    '<header class="pd-head wrap">' +
      '<a class="pd-back" href="project.html">All Projects</a>' +
      '<p class="pd-cat">' + esc(catName(p.category)) + '</p>' +
      '<h1>' + esc(p.title) + '</h1>' +
      '<p class="pd-summary">' + esc(p.summary) + '</p>' +
      '<dl class="pd-facts">' + facts + '</dl>' +
    '</header>' +

    '<figure class="pd-cover wrap"><img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '"' + coverPos(p) + '></figure>' +

    '<div class="pd-body wrap">' +
      '<section class="pd-story">' +
        '<h2>Overview</h2>' + (p.overview || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
        (p.highlights && p.highlights.length ? '<h2>Highlights</h2><ul class="pd-highlights">' + list(p.highlights) + '</ul>' : '') +
      '</section>' +
      '<aside class="pd-side">' +
        (p.tools && p.tools.length ? '<h2>Tools</h2><ul class="pd-tools">' + list(p.tools) + '</ul>' : '') +
        (p.credits && p.credits.length ? '<h2>Credits</h2><dl class="pd-credits">' +
          p.credits.map(function (c) { return '<div><dt>' + esc(c.role) + '</dt><dd>' + esc(c.name) + '</dd></div>'; }).join('') + '</dl>' : '') +
        (p.link && p.link.url ? '<a class="pd-ext" href="' + esc(p.link.url) + '" target="_blank" rel="noopener">' + esc(p.link.label || 'View project') + '</a>' : '') +
      '</aside>' +
    '</div>' +

    (p.gallery && p.gallery.length ?
      '<section class="pd-gallery wrap" aria-label="Project gallery">' +
        p.gallery.map(function (g) {
          return '<figure><img src="' + esc(g.src) + '" alt="' + esc(g.caption || p.title) + '" loading="lazy">' +
                 (g.caption ? '<figcaption>' + esc(g.caption) + '</figcaption>' : '') + '</figure>';
        }).join('') +
      '</section>' : '') +

    '<nav class="pd-pager wrap" aria-label="More projects">' +
      '<a href="' + detailUrl(prev.id) + '"><span>Previous</span>' + esc(prev.title) + '</a>' +
      '<a href="project.html" class="pd-all">All projects</a>' +
      '<a href="' + detailUrl(next.id) + '"><span>Next</span>' + esc(next.title) + '</a>' +
    '</nav>';
})();