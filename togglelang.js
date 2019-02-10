const fi_en = {
    "Suomi": "Finnish", 
    "Englanti": "English", 
    "Minun työni": "My products", 
    "Nettisivut": "Web pages", 
    "Kolme itämaan tietäjää.": "Biblical magi.", 
    " Vain Suomeksi": " Only in Finnish", 
    "Web-sovellukset": "Web applications", 
    "Dodger": "Dodger", 
    "Näppäinmato": "Keyboard worm", 
    "Työpöytäsovellukset": "Desktop applications", 
    "Työpöytälinkki Google Classroomiin": "Desktop link to Google Classroom"
};

const en_fi = {
    "Finnish": "Suomi", 
    "English": "Englanti", 
    "My products": "Minun työni", 
    "Web pages": "Nettisivut", 
    "Biblical magi.": "Kolme itämaan tietäjää.", 
    " Only in Finnish": " Vain Suomeksi", 
    "Web applications": "Web-sovellukset", 
    "Dodger": "Dodger", 
    "Keyboard worm": "Näppäinmato", 
    "Desktop applications": "Työpöytäsovellukset", 
    "Desktop link to Google Classroom": "Työpöytälinkki Google Classroomiin"
};

const text = {
    "header": document.getElementById("header"), 
    "wph": document.getElementById("wph"), 
    "bmagia": document.querySelector("li#bmagi > a"), 
    "bmagip": document.querySelector("li#bmagi > span"), 
    "wah": document.getElementById("wah"), 
    "dodgera": document.querySelector("li#dodger > a"), 
    "kb_worma": document.querySelector("li#kb_worm > a"), 
    "dah": document.getElementById("dah"), 
    "clinka": document.querySelector("li#clink > a"), 
    "language": document.getElementById("language"), 
    "title": document.getElementsByTagName("title")[0]
};

const texts = ["header", "wph", "bmagia", "bmagip", "wah", "dodgera", "kb_worma", "dah", "clinka", "language", "title"];

const switchLang = document.getElementById("switchLang");
const language = document.getElementById("language");

switchLang.addEventListener("click", function() {
    if (language.textContent == "Finnish") {
        for (let i = 0; i < texts.length; i++) {
            text[texts[i]].textContent = en_fi[text[texts[i]].textContent];
        }
        language.textContent = "Englanti";
    } else if (language.textContent == "Englanti") {
        for (let i = 0; i < texts.length; i++) {
            text[texts[i]].textContent = fi_en[text[texts[i]].textContent];
        }
        language.textContent = "Finnish";
    }
})
