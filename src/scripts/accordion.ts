// Independent open/close for every [data-acc] button; the panel is its aria-controls target.
export function initAccordions() {
  document.querySelectorAll<HTMLButtonElement>('[data-acc]').forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls')!)!;
    const sign = btn.querySelector('.sign');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      if (sign) sign.textContent = open ? '–' : '+';
    });
  });
}
