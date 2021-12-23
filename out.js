(() => {
  // source/js/languages.js
  var translations = {
    "en": "HELLO",
    "en-US": "HELLO",
    "en-GB": "HELLO",
    "fr-FR": "BONJOUR",
    "es-ES": "HOLA",
    "ru": "Zdravstvuyte",
    "zh-CN": "N\u01D0n h\u01CEo"
  };
  var languages_default = translations;

  // source/js/index.js
  console.log(navigator.language || navigator.userLanguage);
  var language = navigator.language || navigator.userLanguage;
  console.log(languages_default);
  if (languages_default[language]) {
    app.innerText = languages_default[language];
  } else {
    app.innerText = languages_default["en"];
  }
})();
