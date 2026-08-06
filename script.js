/*function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim() === (lang === 'en' ? 'EN' : lang === 'si' ? 'සිං' : 'தமி'));
    });
  }
  // Set initial lang
  setLang('en');*/

function setLang(lang) {

    // Save selected language
    localStorage.setItem("selectedLanguage", lang);

    // Set language attribute
    document.documentElement.setAttribute("data-lang", lang);


    // Highlight active language button
    document.querySelectorAll(".lang-btn").forEach(btn => {

        btn.classList.remove("active");

        const btnText = btn.textContent.trim();

        if (
            (lang === "en" && btnText === "EN") ||
            (lang === "si" && btnText === "සිං") ||
            (lang === "ta" && btnText === "தமி")
        ) {
            btn.classList.add("active");
        }

    });


    // Update legal page links
    const privacyLink = document.getElementById("privacyLink");
    const termsLink = document.getElementById("termsLink");
    const cookiesLink = document.getElementById("cookiesLink");


    if (privacyLink) {
        privacyLink.href = `${lang}/privacy-policy.html`;
    }

    if (termsLink) {
        termsLink.href = `${lang}/terms-of-use.html`;
    }

    if (cookiesLink) {
        cookiesLink.href = `${lang}/cookies-and-tracking-notice.html`;
    }


    // Show selected language content
    document.querySelectorAll("[data-en], [data-si], [data-ta]").forEach(element => {

        element.style.display = "none";

    });


    document.querySelectorAll(`[data-${lang}]`).forEach(element => {

        element.style.display = "inline";

    });

}


// Load saved language when page opens
document.addEventListener("DOMContentLoaded", function () {

    // Get previous selected language
    const savedLang = localStorage.getItem("selectedLanguage");


    // If no language selected before, use English
    if (savedLang) {

        setLang(savedLang);

    } else {

        setLang("en");

    }

});