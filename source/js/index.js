import translations from "./languages.js";

const language = navigator.language || navigator.userLanguage;

if(translations[language]) {
  app.innerText = translations[language]
}
else {
  app.innerText = translations['en']
}
