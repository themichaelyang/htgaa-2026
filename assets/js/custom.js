// /assets/js/custom.js  (Relearn will auto-load js/custom.js) 
document.addEventListener('DOMContentLoaded', () => {
  //
  // Make a click on expandable menu entries which have url="#" expand/collapse the submenu.
  // (Without this you have to click the tiny expander chevron on the left.)
  //
  const scope = document.querySelector('#sidebar .sidebar__footer') || document;  // Scope to the sidebar footer; widen to '#sidebar' if you prefer
  scope.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !scope.contains(link)) return;

    // Only intercept "dummy" parents like '/.../#' or '#'
    const href = (link.getAttribute('href') || '').trim();
    const isDummy = link.hash === '#' || href === '#' || href.endsWith('/#');
    if (!isDummy) return; // real link -> let it navigate

    const li = link.closest('li');
    if (!li) return;

    // Relearn's expander is a checkbox + label[for=id]
    const checkbox = li.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    const label = li.querySelector(`label[for="${checkbox.id}"]`);

    e.preventDefault(); // stop the '#'-jump
    if (label) {
      // safest: click the label so theme logic runs
      label.click();
    } else {
      // fallback: flip the checkbox directly
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change', { bubbles: true }));
      checkbox.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
});


window.addEventListener('load', function () {
  //
  // add ctrl-alt-w hotkey for wysiwyg editing (and remap hotkey for standard editing to ctrl-alt-s, which we map to "source" view (not directly to edit)).
  // wait until 'load' to make sure we override defaults (and not the other way around).
  //

  // helper: click a topbar button by class (works whether the class is on a wrapper or anchor)
  function click(sel) {
    const host = document.querySelector(sel);
    if (!host) return;
    const anchor =
      (host.tagName === 'A' ? host : host.querySelector('a')) ||
      host.querySelector('button,[role="button"]') ||
      host.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href') || '';
    if (href && href !== '#' && !href.startsWith('javascript:')) {
      window.location.assign(href);
    } else if (typeof anchor.click === 'function') {
      anchor.click();
    }
  }

  if (typeof window.editShortcutHandler === 'function') {
    document.removeEventListener('keydown', window.editShortcutHandler); // detach original
    document.addEventListener('keydown', function (event) {
      // exactly how Relearn checks, but with our mapping
      if (!event.shiftKey && event.altKey && event.ctrlKey && !event.metaKey) {
        if (event.which === 87) {         // w -> WYSIWYG
          event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
          click('.topbar-button-edit-wysiwyg');
        } else if (event.which === 83) {  // s -> Source
          event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
          if (typeof window.showEdit === 'function') window.showEdit(); else click('.topbar-button-edit');
        }
      }
    }, false);
  }

});