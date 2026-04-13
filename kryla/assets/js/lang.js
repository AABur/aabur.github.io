(function () {
  var STORAGE_KEY = 'kryla_lang';
  var DEFAULT_LANG = 'ua';

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      if (el.getAttribute('data-lang') === lang) {
        el.classList.remove('lang-hidden');
      } else {
        el.classList.add('lang-hidden');
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active-lang', btn.getAttribute('data-set-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang === 'ua' ? 'uk' : 'en');
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLang(saved);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
