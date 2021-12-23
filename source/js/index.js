import translations from "./languages.js";
console.log(navigator.language || navigator.userLanguage)
const language = navigator.language || navigator.userLanguage;
console.log(translations)
if(translations[language]) {
  app.innerText = translations[language]
}
else {
  app.innerText = translations['en']
}
