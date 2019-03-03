const fi_en = {
    "Siirry koko näyttöön": "Enter full screen", 
    "Poistu koko näytöstä": "Exit full screen", 
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
    "Työpöytälinkki Google Classroomiin": "Desktop link to Google Classroom", 
    "Saa tekstiä ilmestymään taianomaisesti tekstikenttään": "Make text magically appear to text area", 
    "Funktiolaskin": "Scientific calculator"
};

const en_fi = {
    "Enter full screen": "Siirry koko näyttöön", 
    "Exit full screen": "Poistu koko näytöstä", 
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
    "Desktop link to Google Classroom": "Työpöytälinkki Google Classroomiin", 
    "Make text magically appear to text area": "Saa tekstiä ilmestymään taianomaisesti tekstikenttään", 
    "Scientific calculator": "Funktiolaskin"
};

const text = {
    "header": document.getElementById("header"), 
    "wph": document.getElementById("wph"), 
    "bmagia": document.querySelector("li#bmagi > a"), 
    "bmagip": document.querySelector("li#bmagi > span"), 
    "wah": document.getElementById("wah"), 
    "dodgera": document.querySelector("li#dodger > a"), 
    "kb_worma": document.querySelector("li#kb_worm > a"), 
    "calc": document.querySelector("li#calc > a"), 
    "dah": document.getElementById("dah"), 
    "clinka": document.querySelector("li#clink > a"), 
    "slinka": document.querySelector("li#slink > a"), 
    "language": document.getElementById("language"), 
    "fullscreen": document.getElementById("fullscreen"), 
    "title": document.getElementsByTagName("title")[0]
};

const texts = ["header", "wph", "bmagia", "bmagip", "wah", "dodgera", "kb_worma", "calc", "dah", "clinka", 
               "slinka", "language", "fullscreen", "title"];

const switchLang = document.getElementById("switchLang");
const language = document.getElementById("language");

switchLang.addEventListener("click", function() {
    if (language.textContent == "Suomi") {
        for (let i = 0; i < texts.length; i++) {
            text[texts[i]].textContent = en_fi[text[texts[i]].textContent];
        }
        language.textContent = "English";
    } else if (language.textContent == "English") {
        for (let i = 0; i < texts.length; i++) {
            text[texts[i]].textContent = fi_en[text[texts[i]].textContent];
        }
        language.textContent = "Suomi";
    }
});
