const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

$("#year").textContent = new Date().getFullYear();

// Mobile navigation
$("#menuBtn").addEventListener("click", () => {
    const open = $("#nav").classList.toggle("open");
    $("#menuBtn").setAttribute("aria-expanded", String(open));
});

$$('#nav a').forEach(link => link.addEventListener("click", () => {
    $("#nav").classList.remove("open");
    $("#menuBtn").setAttribute("aria-expanded", "false");
}));

// Three-language translations for the interface
const translations = {
    en: {
        navHome: "Home", navServices: "Services", navGuides: "Guides",
        navSafety: "Cyber Safety", navQuiz: "Quiz",
        eyebrow: "YOUR DIGITAL GUIDE", heroTitle: "Government services, made simple.",
        heroText: "Learn how to use digital government portals with easy guides, document checklists and online safety tips.",
        explore: "Explore Services →", quickHelp: "QUICK HELP",
        findTitle: "What do you need help with?",
        searchPlaceholder: "Search services...", servicesEyebrow: "EXPLORE",
        servicesTitle: "Popular Government Services",
        servicesText: "Choose a service to learn more.",
        digilockerDesc: "Learn about accessing digital documents and certificates.",
        umangDesc: "Discover government services available through UMANG.",
        schemeDesc: "Explore government schemes and eligibility information.",
        aadhaarDesc: "Find official Aadhaar services and information.",
        voterDesc: "Learn about voter registration and electoral services.",
        safetyCard: "Cyber Safety", safetyDesc: "Learn how to identify online scams and protect your accounts.",
        learnSafety: "Learn Safety ↓", guideBtn: "View Guide",
        noResults: "No matching services found. Try another search.",
        guidesEyebrow: "LEARN STEP BY STEP", guidesTitle: "Before using a portal",
        step1Title: "Choose the correct service", step1Text: "Use the official website for your specific requirement.",
        step2Title: "Check the requirements", step2Text: "Read the official instructions and prepare required documents.",
        step3Title: "Follow official instructions", step3Text: "Review information carefully before submitting any application.",
        checkTitle: "My preparation checklist", checkText: "Tick each item as you prepare.",
        check1: "I identified the correct service", check2: "I checked official requirements",
        check3: "I opened the official website", check4: "I will keep OTPs and passwords private",
        checkNote: "This checklist is for learning and preparation only.",
        safetyEyebrow: "STAY PROTECTED", safetyTitle: "Stay safe while using the internet",
        otpTitle: "Never share OTPs", otpText: "Do not share OTPs, PINs or passwords with callers or strangers.",
        urlTitle: "Verify website addresses", urlText: "Use trusted official links. A .gov.in address alone is not enough; check the exact domain.",
        scamTitle: "Avoid suspicious links", scamText: "Do not click unexpected messages promising prizes or urgent benefits.",
        safetyNote: "Suspect a cyber financial fraud? In India, call 1930 promptly and report it at cybercrime.gov.in.",
        reportBtn: "Official Cyber Crime Portal ↗", quizEyebrow: "TEST YOUR KNOWLEDGE",
        quizTitle: "Digital Safety Quiz", feedbackEyebrow: "YOUR VOICE MATTERS",
        feedbackTitle: "Help us improve", feedbackText: "Share your experience using this educational website.",
        ratingLabel: "Was this website helpful?", selectRating: "Choose a rating",
        suggestionLabel: "Suggestions (optional)", submitFeedback: "Save feedback on this device",
        disclaimerTitle: "Educational project notice",
        disclaimerText: "Digital Sahayak is an independent educational project, not a government website. Services, requirements and fees can change. Always verify details on the relevant official portal. Never enter sensitive personal information on this demo website.",
        footerFeedback: "Give Feedback"
    },
    hi: {
        navHome: "होम", navServices: "सरकारी सेवाएँ", navGuides: "गाइड",
        navSafety: "साइबर सुरक्षा", navQuiz: "क्विज़",
        eyebrow: "आपका डिजिटल मार्गदर्शक", heroTitle: "सरकारी सेवाएँ, अब आसान।",
        heroText: "आसान गाइड, दस्तावेज़ चेकलिस्ट और ऑनलाइन सुरक्षा सुझावों से सरकारी पोर्टल इस्तेमाल करना सीखें।",
        explore: "सेवाएँ देखें →", quickHelp: "त्वरित सहायता",
        findTitle: "आपको किस काम में मदद चाहिए?",
        searchPlaceholder: "सेवाएँ खोजें...", servicesEyebrow: "जानकारी",
        servicesTitle: "लोकप्रिय सरकारी सेवाएँ", servicesText: "जानकारी के लिए कोई सेवा चुनें।",
        digilockerDesc: "डिजिटल दस्तावेज़ और प्रमाणपत्र इस्तेमाल करना सीखें।",
        umangDesc: "UMANG पर उपलब्ध सरकारी सेवाओं की जानकारी पाएँ।",
        schemeDesc: "सरकारी योजनाओं और पात्रता की जानकारी देखें।",
        aadhaarDesc: "आधार की आधिकारिक सेवाओं की जानकारी पाएँ।",
        voterDesc: "मतदाता पंजीकरण और चुनाव संबंधी सेवाएँ जानें।",
        safetyCard: "साइबर सुरक्षा", safetyDesc: "ऑनलाइन धोखाधड़ी पहचानना और अपने खाते सुरक्षित रखना सीखें।",
        learnSafety: "सुरक्षा सीखें ↓", guideBtn: "गाइड देखें",
        noResults: "कोई सेवा नहीं मिली। दूसरा शब्द खोजें।",
        guidesEyebrow: "आसान चरणों में सीखें", guidesTitle: "पोर्टल इस्तेमाल करने से पहले",
        step1Title: "सही सेवा चुनें", step1Text: "अपनी ज़रूरत के अनुसार आधिकारिक वेबसाइट चुनें।",
        step2Title: "ज़रूरी जानकारी जाँचें", step2Text: "आधिकारिक निर्देश पढ़ें और आवश्यक दस्तावेज़ तैयार करें।",
        step3Title: "आधिकारिक निर्देशों का पालन करें", step3Text: "आवेदन भेजने से पहले जानकारी ध्यान से जाँचें।",
        checkTitle: "मेरी तैयारी चेकलिस्ट", checkText: "तैयारी के अनुसार हर विकल्प पर निशान लगाएँ।",
        check1: "मैंने सही सेवा चुनी है", check2: "मैंने आधिकारिक आवश्यकताएँ जाँची हैं",
        check3: "मैंने आधिकारिक वेबसाइट खोली है", check4: "मैं OTP और पासवर्ड गोपनीय रखूँगा/रखूँगी",
        checkNote: "यह चेकलिस्ट केवल सीखने और तैयारी के लिए है।",
        safetyEyebrow: "सुरक्षित रहें", safetyTitle: "इंटरनेट का सुरक्षित इस्तेमाल करें",
        otpTitle: "OTP कभी साझा न करें", otpText: "कॉल करने वाले अनजान लोगों को OTP, PIN या पासवर्ड न बताएँ।",
        urlTitle: "वेबसाइट का पता जाँचें", urlText: "विश्वसनीय आधिकारिक लिंक इस्तेमाल करें और सही डोमेन जाँचें।",
        scamTitle: "संदिग्ध लिंक से बचें", scamText: "इनाम या तुरंत लाभ का वादा करने वाले अनजान संदेशों पर क्लिक न करें।",
        safetyNote: "साइबर वित्तीय धोखाधड़ी होने पर भारत में तुरंत 1930 पर कॉल करें और cybercrime.gov.in पर रिपोर्ट करें।",
        reportBtn: "आधिकारिक साइबर क्राइम पोर्टल ↗", quizEyebrow: "अपनी जानकारी जाँचें",
        quizTitle: "डिजिटल सुरक्षा क्विज़", feedbackEyebrow: "आपकी राय ज़रूरी है",
        feedbackTitle: "वेबसाइट बेहतर बनाने में मदद करें",
        feedbackText: "इस शैक्षणिक वेबसाइट का अपना अनुभव बताएँ।",
        ratingLabel: "क्या यह वेबसाइट उपयोगी थी?", selectRating: "रेटिंग चुनें",
        suggestionLabel: "सुझाव (वैकल्पिक)", submitFeedback: "इस डिवाइस पर फीडबैक सेव करें",
        disclaimerTitle: "शैक्षणिक परियोजना सूचना",
        disclaimerText: "Digital Sahayak एक स्वतंत्र शैक्षणिक परियोजना है, सरकारी वेबसाइट नहीं। सेवाएँ, आवश्यकताएँ और शुल्क बदल सकते हैं। विवरण आधिकारिक पोर्टल पर जाँचें। इस डेमो वेबसाइट पर संवेदनशील व्यक्तिगत जानकारी न डालें।",
        footerFeedback: "फीडबैक दें"
    },
    mr: {
        navHome: "मुख्यपृष्ठ", navServices: "सरकारी सेवा", navGuides: "मार्गदर्शक",
        navSafety: "सायबर सुरक्षा", navQuiz: "प्रश्नमंजुषा",
        eyebrow: "तुमचा डिजिटल मार्गदर्शक", heroTitle: "सरकारी सेवा, आता सोप्या पद्धतीने.",
        heroText: "सोपे मार्गदर्शक, कागदपत्रांची यादी आणि ऑनलाइन सुरक्षिततेच्या टिप्स वापरून सरकारी पोर्टल वापरायला शिका.",
        explore: "सेवा पाहा →", quickHelp: "त्वरित मदत",
        findTitle: "तुम्हाला कोणत्या मदतीची गरज आहे?",
        searchPlaceholder: "सेवा शोधा...", servicesEyebrow: "माहिती",
        servicesTitle: "लोकप्रिय सरकारी सेवा", servicesText: "अधिक माहितीसाठी सेवा निवडा.",
        digilockerDesc: "डिजिटल कागदपत्रे आणि प्रमाणपत्रे वापरण्याबद्दल शिका.",
        umangDesc: "UMANG वरील सरकारी सेवांची माहिती मिळवा.",
        schemeDesc: "सरकारी योजना आणि पात्रतेची माहिती पाहा.",
        aadhaarDesc: "आधारच्या अधिकृत सेवांची माहिती मिळवा.",
        voterDesc: "मतदार नोंदणी आणि निवडणूक सेवांबद्दल शिका.",
        safetyCard: "सायबर सुरक्षा", safetyDesc: "ऑनलाइन फसवणूक ओळखायला आणि खाती सुरक्षित ठेवायला शिका.",
        learnSafety: "सुरक्षितता शिका ↓", guideBtn: "मार्गदर्शक पाहा",
        noResults: "जुळणारी सेवा आढळली नाही. दुसरा शब्द शोधा.",
        guidesEyebrow: "टप्प्याटप्प्याने शिका", guidesTitle: "पोर्टल वापरण्यापूर्वी",
        step1Title: "योग्य सेवा निवडा", step1Text: "तुमच्या गरजेसाठी अधिकृत वेबसाइट वापरा.",
        step2Title: "आवश्यकता तपासा", step2Text: "अधिकृत सूचना वाचा आणि आवश्यक कागदपत्रे तयार ठेवा.",
        step3Title: "अधिकृत सूचनांचे पालन करा", step3Text: "अर्ज पाठवण्यापूर्वी माहिती काळजीपूर्वक तपासा.",
        checkTitle: "माझी तयारी यादी", checkText: "तयारीनुसार प्रत्येक पर्यायावर खूण करा.",
        check1: "मी योग्य सेवा निवडली आहे", check2: "मी अधिकृत आवश्यकता तपासल्या आहेत",
        check3: "मी अधिकृत वेबसाइट उघडली आहे", check4: "मी OTP आणि पासवर्ड गोपनीय ठेवेन",
        checkNote: "ही यादी फक्त शिकण्यासाठी आणि तयारीसाठी आहे.",
        safetyEyebrow: "सुरक्षित राहा", safetyTitle: "इंटरनेट वापरताना सुरक्षित राहा",
        otpTitle: "OTP कधीही शेअर करू नका", otpText: "अनओळखी व्यक्तींना OTP, PIN किंवा पासवर्ड सांगू नका.",
        urlTitle: "वेबसाइटचा पत्ता तपासा", urlText: "विश्वसनीय अधिकृत लिंक वापरा आणि योग्य डोमेन तपासा.",
        scamTitle: "संशयास्पद लिंक टाळा", scamText: "बक्षीस किंवा तातडीच्या लाभाचे आश्वासन देणाऱ्या अनोळखी संदेशांवर क्लिक करू नका.",
        safetyNote: "सायबर आर्थिक फसवणूक झाल्यास भारतात त्वरित 1930 वर संपर्क करा आणि cybercrime.gov.in वर तक्रार नोंदवा.",
        reportBtn: "अधिकृत सायबर क्राइम पोर्टल ↗", quizEyebrow: "तुमचे ज्ञान तपासा",
        quizTitle: "डिजिटल सुरक्षा प्रश्नमंजुषा", feedbackEyebrow: "तुमचे मत महत्त्वाचे आहे",
        feedbackTitle: "वेबसाइट सुधारण्यास मदत करा",
        feedbackText: "या शैक्षणिक वेबसाइटचा तुमचा अनुभव सांगा.",
        ratingLabel: "ही वेबसाइट उपयुक्त होती का?", selectRating: "रेटिंग निवडा",
        suggestionLabel: "सूचना (पर्यायी)", submitFeedback: "या डिव्हाइसवर अभिप्राय जतन करा",
        disclaimerTitle: "शैक्षणिक प्रकल्पाची सूचना",
        disclaimerText: "Digital Sahayak हा स्वतंत्र शैक्षणिक प्रकल्प आहे; सरकारी वेबसाइट नाही. सेवा, आवश्यकता आणि शुल्क बदलू शकतात. माहिती अधिकृत पोर्टलवर तपासा. या डेमो वेबसाइटवर संवेदनशील वैयक्तिक माहिती टाकू नका.",
        footerFeedback: "अभिप्राय द्या"
    }
};

function setLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) element.textContent = dictionary[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (dictionary[key]) element.placeholder = dictionary[key];
    });
    filterServices();
}

$("#language").addEventListener("change", event => setLanguage(event.target.value));

// Search services
function filterServices() {
    const query = $("#searchInput").value.trim().toLowerCase();
    let visible = 0;
    $$(".service-card").forEach(card => {
        const text = (card.innerText + " " + card.dataset.search).toLowerCase();
        const matches = text.includes(query);
        card.classList.toggle("hidden", !matches);
        if (matches) visible++;
    });
    $("#noResults").classList.toggle("hidden", visible !== 0);
    const lang = $("#language").value;
    $("#searchStatus").textContent = query
        ? `${visible} ${lang === "hi" ? "सेवाएँ मिलीं" : lang === "mr" ? "सेवा सापडल्या" : "service(s) found"}`
        : "";
}
$("#searchInput").addEventListener("input", filterServices);

// Educational guides. Check current requirements on the official portals.
const guides = {
    digilocker: {
        title: "DigiLocker — Getting Started",
        steps: [
            "Open the official DigiLocker website.",
            "Choose the appropriate sign-in or registration option.",
            "Follow the instructions shown on the official portal.",
            "Find the relevant document or issuer service.",
            "Check the document details before using or sharing it."
        ],
        note: "Requirements and available documents may vary. Never share your OTP or password."
    },
    umang: {
        title: "UMANG — Getting Started",
        steps: [
            "Open the official UMANG portal.",
            "Search for the department or service you need.",
            "Read the service description and eligibility conditions.",
            "Follow the official department instructions.",
            "Keep any reference number privately if an application is submitted."
        ],
        note: "Available services and procedures can change."
    },
    myscheme: {
        title: "myScheme — Finding a Scheme",
        steps: [
            "Open the official myScheme website.",
            "Browse or search for a relevant government scheme.",
            "Read the eligibility criteria and benefits.",
            "Check the documents and application procedure on the official source.",
            "Use only the official application channel specified for that scheme."
        ],
        note: "Eligibility information is guidance, not a guarantee of approval."
    },
    aadhaar: {
        title: "Aadhaar / UIDAI — Official Guidance",
        steps: [
            "Open the official UIDAI website.",
            "Choose the Aadhaar service relevant to your requirement.",
            "Read the eligibility and available online or in-person options.",
            "Follow the official instructions and fee details.",
            "Never share your Aadhaar OTP or personal information with unofficial agents."
        ],
        note: "Not every Aadhaar service can be completed entirely online."
    },
    voter: {
        title: "Voter Services — Getting Started",
        steps: [
            "Open the official Election Commission voter services portal.",
            "Select the service relevant to your requirement.",
            "Read the eligibility rules and instructions.",
            "Prepare the documents listed by the official portal.",
            "If you submit an application, check its status through the official service."
        ],
        note: "Registration and other election procedures follow official rules and timelines."
    },
    safety: {
        title: "Cyber Safety Basics",
        steps: [
            "Never tell anyone your OTP, PIN or password.",
            "Check the full website domain before entering information.",
            "Do not install apps at the request of unknown callers.",
            "Avoid payment requests received through suspicious messages.",
            "Report suspected cyber financial fraud promptly through official channels."
        ],
        note: "In India, cyber financial fraud can be reported through helpline 1930 and cybercrime.gov.in."
    }
};

$$("[data-guide]").forEach(button => {
    button.addEventListener("click", () => {
        const guide = guides[button.dataset.guide];
        if (!guide) return;

        const content = $("#guideContent");
        content.replaceChildren();

        const title = document.createElement("h2");
        title.textContent = guide.title;
        content.append(title);

        const intro = document.createElement("p");
        intro.textContent = "Follow these general learning steps. Always confirm current instructions on the official portal.";
        content.append(intro);

        const list = document.createElement("ol");
        guide.steps.forEach(step => {
            const item = document.createElement("li");
            item.textContent = step;
            list.append(item);
        });
        content.append(list);

        const note = document.createElement("p");
        note.className = "muted";
        note.textContent = guide.note;
        content.append(note);

        const dialog = $("#guideDialog");
        if (typeof dialog.showModal === "function") dialog.showModal();
        else alert(guide.title + "\n\n" + guide.steps.join("\n"));
    });
});

$("#closeDialog").addEventListener("click", () => $("#guideDialog").close());
$("#guideDialog").addEventListener("click", event => {
    if (event.target === $("#guideDialog")) $("#guideDialog").close();
});

// Digital safety quiz
const questions = [
    {
        q: "Someone asks you to share an OTP over the phone. What should you do?",
        options: ["Share it if they know your name", "Never share it", "Send it by text"],
        correct: 1,
        explanation: "Keep your OTP private. Never share it with callers."
    },
    {
        q: "How should you open a government service?",
        options: ["Click any forwarded link", "Use a verified official portal", "Use a random advertisement"],
        correct: 1,
        explanation: "Verify the exact website address before entering information."
    },
    {
        q: "You suspect an online financial fraud in India. What should you do?",
        options: ["Wait several weeks", "Send more money to recover it", "Report it promptly via 1930 and cybercrime.gov.in"],
        correct: 2,
        explanation: "Prompt reporting can help authorities respond to cyber financial fraud."
    }
];

let questionIndex = 0;
let score = 0;
let answered = false;

function renderQuestion() {
    const question = questions[questionIndex];
    answered = false;
    $("#question").textContent = question.q;
    $("#questionCount").textContent = `Question ${questionIndex + 1} of ${questions.length}`;
    $("#quizFeedback").textContent = "";
    $("#quizScore").textContent = `Score: ${score}`;
    $("#nextQuestion").disabled = true;
    $("#nextQuestion").textContent = questionIndex === questions.length - 1
        ? "See Result" : "Next Question →";

    const answers = $("#answers");
    answers.replaceChildren();

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-btn";
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(index));
        answers.append(button);
    });
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;

    const question = questions[questionIndex];
    const buttons = $$(".answer-btn");
    buttons.forEach((button, i) => {
        button.disabled = true;
        if (i === question.correct) button.classList.add("correct");
        if (i === index && i !== question.correct) button.classList.add("incorrect");
    });

    if (index === question.correct) score++;
    $("#quizFeedback").textContent =
        (index === question.correct ? "Correct! " : "Not quite. ") + question.explanation;
    $("#quizScore").textContent = `Score: ${score}`;
    $("#nextQuestion").disabled = false;
}

$("#nextQuestion").addEventListener("click", () => {
    if (!answered) return;

    if (questionIndex < questions.length - 1) {
        questionIndex++;
        renderQuestion();
        return;
    }

    $("#questionCount").textContent = "Quiz completed";
    $("#question").textContent = `Your score: ${score} out of ${questions.length}`;
    $("#answers").replaceChildren();
    $("#quizFeedback").textContent = score === questions.length
        ? "Excellent! You answered all questions correctly."
        : "Review the safety tips and try again.";
    $("#nextQuestion").disabled = true;
    $("#nextQuestion").classList.add("hidden");
    $("#restartQuiz").classList.remove("hidden");
});

$("#restartQuiz").addEventListener("click", () => {
    questionIndex = 0;
    score = 0;
    $("#nextQuestion").classList.remove("hidden");
    $("#restartQuiz").classList.add("hidden");
    renderQuestion();
});

// Demo feedback: saved locally in this browser only.
// It is not sent to the project owner.
$("#feedbackForm").addEventListener("submit", event => {
    event.preventDefault();
    const rating = $("#rating").value;
    const suggestion = $("#suggestion").value.trim();

    try {
        const previous = JSON.parse(localStorage.getItem("dsFeedback") || "[]");
        previous.push({
            rating,
            suggestion,
            createdAt: new Date().toISOString()
        });
        localStorage.setItem("dsFeedback", JSON.stringify(previous));
        $("#feedbackStatus").textContent =
            "Thank you! Feedback is saved on this device only.";
        $("#feedbackForm").reset();
    } catch {
        $("#feedbackStatus").textContent =
            "Feedback could not be saved in this browser. No data was sent.";
    }
});

setLanguage("en");
renderQuestion();