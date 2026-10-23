const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

$("#year").textContent = new Date().getFullYear();

const translations = {
  en: {
    navHome:"Home",navServices:"Services",navGuides:"Guides",navSafety:"Cyber Safety",navQuiz:"Quiz",brandSubtitle:"Citizen Help Portal",footerTagline:"Digital awareness for everyone",footerProject:"College CEP Project",
    eyebrow:"YOUR DIGITAL GUIDE",heroTitle:"Government services, made simple.",heroText:"Learn how to use digital government portals with easy guides, document checklists and online safety tips.",
    explore:"Explore Services →",heroNote:"✓ Free learning resources · ✓ Simple instructions",artServices:"Digital Services",artSteps:"Learn • Prepare • Access",artMini:"📱 Easy to use",
    quickHelp:"QUICK HELP",findTitle:"What do you need help with?",searchPlaceholder:"Search services...",servicesEyebrow:"EXPLORE",servicesTitle:"Popular Government Services",servicesText:"Choose a service to learn more.",
    tagDocuments:"DOCUMENTS",tagServices:"SERVICES",tagSchemes:"SCHEMES",tagIdentity:"IDENTITY",tagCitizenship:"CITIZENSHIP",tagSafety:"SAFETY",officialPortal:"Official Portal ↗",
    digilockerDesc:"Learn about accessing digital documents and certificates.",umangDesc:"Discover government services available through UMANG.",schemeDesc:"Explore government schemes and eligibility information.",aadhaarDesc:"Find official Aadhaar services and information.",voterDesc:"Learn about voter registration and electoral services.",
    safetyCard:"Cyber Safety",safetyDesc:"Learn how to identify online scams and protect your accounts.",learnSafety:"Learn Safety ↓",guideBtn:"View Guide",noResults:"No matching services found. Try another search.",
    guidesEyebrow:"LEARN STEP BY STEP",guidesTitle:"Before using a portal",step1Title:"Choose the correct service",step1Text:"Use the official website for your specific requirement.",step2Title:"Check the requirements",step2Text:"Read the official instructions and prepare required documents.",step3Title:"Follow official instructions",step3Text:"Review information carefully before submitting any application.",
    checkTitle:"My preparation checklist",checkText:"Tick each item as you prepare.",check1:"I identified the correct service",check2:"I checked official requirements",check3:"I opened the official website",check4:"I will keep OTPs and passwords private",checkNote:"This checklist is for learning and preparation only.",
    safetyEyebrow:"STAY PROTECTED",safetyTitle:"Stay safe while using the internet",otpTitle:"Never share OTPs",otpText:"Do not share OTPs, PINs or passwords with callers or strangers.",urlTitle:"Verify website addresses",urlText:"Use trusted official links and check the exact domain.",scamTitle:"Avoid suspicious links",scamText:"Do not click unexpected messages promising prizes or urgent benefits.",safetyNote:"Suspect a cyber financial fraud? In India, call 1930 promptly and report it at cybercrime.gov.in.",reportBtn:"Official Cyber Crime Portal ↗",
    quizEyebrow:"TEST YOUR KNOWLEDGE",quizTitle:"Digital Safety Quiz",previous:"← Previous",next:"Next Question →",seeResult:"See Result",restart:"Restart Quiz",question:"Question {n} of {total}",score:"Score: {score}",completed:"Quiz completed",yourScore:"Your score: {score} out of {total}",excellent:"Excellent! You answered all questions correctly.",good:"Good effort! Review the explanations and try again to improve your score.",correct:"Correct! ",incorrect:"Not quite. ",answerFirst:"Choose an answer to continue.",resultExcellent:"Excellent digital safety knowledge!",resultGood:"Keep learning—small safety habits help protect you online.",
    feedbackEyebrow:"YOUR VOICE MATTERS",feedbackTitle:"Help us improve",feedbackText:"Share your experience using this educational website.",ratingLabel:"Was this website helpful?",selectRating:"Choose a rating",rating5:"5 - Very helpful",rating4:"4 - Helpful",rating3:"3 - Okay",rating2:"2 - Not very helpful",rating1:"1 - Not helpful",suggestionLabel:"Suggestions (optional)",suggestionPlaceholder:"Share your suggestions...",submitFeedback:"Save feedback on this device",feedbackLocalNote:"This demo saves feedback only in this browser. It does not send it to the project owner.",feedbackSaved:"Thank you! Feedback is saved on this device only.",feedbackFailed:"Feedback could not be saved in this browser. No data was sent.",
    disclaimerTitle:"Educational project notice",disclaimerText:"Digital Sahayak is an independent educational project, not a government website. Services, requirements and fees can change. Always verify details on the relevant official portal. Never enter sensitive personal information on this demo website.",footerFeedback:"Give Feedback",closeGuide:"Close guide",guideIntro:"Follow these beginner-friendly steps. Confirm current instructions on the official portal.",guideNote:"Important: Never share your OTP, PIN or password with anyone. Official procedures may change.",
    searchFound:"service(s) found",
    listen:"🔊 Listen",play:"▶ Play",pause:"⏸ Pause",resume:"▶ Resume",stop:"⏹ Stop",speechUnsupported:"Text-to-speech is not supported in this browser. Try an updated Chrome, Edge, or Safari browser.",voiceFallback:"The exact {lang} voice is unavailable on this device. Using the closest available voice; pronunciation may vary.",speechReady:"Choose Listen on a section, or use Play to read the main page.",nothingToRead:"There is no visible text to read in this section.",ttsToolbar:"Read aloud controls",speechStopped:"Speech stopped.",speechPaused:"Speech paused.",speechResumed:"Speech resumed.",playPage:"▶ Read page",sectionListen:"Listen to this section",cardListen:"Listen to this service",guideListen:"Listen to this guide",quizListen:"Listen to this quiz",speechError:"Speech could not start. Check your device's speech/voice settings."

  },
  hi: {
    navHome:"होम",navServices:"सेवाएँ",navGuides:"मार्गदर्शिका",navSafety:"साइबर सुरक्षा",navQuiz:"प्रश्नोत्तरी",brandSubtitle:"नागरिक सहायता पोर्टल",footerTagline:"सभी के लिए डिजिटल जागरूकता",footerProject:"कॉलेज CEP परियोजना",
    eyebrow:"आपका डिजिटल मार्गदर्शक",heroTitle:"सरकारी सेवाएँ, अब आसान।",heroText:"सरल मार्गदर्शिकाओं, दस्तावेज़ सूची और ऑनलाइन सुरक्षा सुझावों से सरकारी पोर्टल इस्तेमाल करना सीखें।",
    explore:"सेवाएँ देखें →",heroNote:"✓ मुफ़्त सीखने की सामग्री · ✓ सरल निर्देश",artServices:"डिजिटल सेवाएँ",artSteps:"सीखें • तैयारी करें • उपयोग करें",artMini:"📱 इस्तेमाल में आसान",
    quickHelp:"त्वरित सहायता",findTitle:"आपको किस चीज़ में मदद चाहिए?",searchPlaceholder:"सेवाएँ खोजें...",servicesEyebrow:"सेवाएँ देखें",servicesTitle:"लोकप्रिय सरकारी सेवाएँ",servicesText:"जानकारी के लिए सेवा चुनें।",
    tagDocuments:"दस्तावेज़",tagServices:"सेवाएँ",tagSchemes:"योजनाएँ",tagIdentity:"पहचान",tagCitizenship:"नागरिक सेवाएँ",tagSafety:"सुरक्षा",officialPortal:"आधिकारिक पोर्टल ↗",
    digilockerDesc:"डिजिटल दस्तावेज़ और प्रमाणपत्र प्राप्त करने के बारे में जानें।",umangDesc:"UMANG पर उपलब्ध सरकारी सेवाओं की जानकारी पाएँ।",schemeDesc:"सरकारी योजनाओं और पात्रता की जानकारी देखें।",aadhaarDesc:"आधार की आधिकारिक सेवाओं और जानकारी को देखें।",voterDesc:"मतदाता पंजीकरण और चुनावी सेवाओं के बारे में जानें।",
    safetyCard:"साइबर सुरक्षा",safetyDesc:"ऑनलाइन धोखाधड़ी पहचानना और अपने खाते सुरक्षित रखना सीखें।",learnSafety:"सुरक्षा सीखें ↓",guideBtn:"मार्गदर्शिका देखें",noResults:"कोई मिलती-जुलती सेवा नहीं मिली। दूसरा शब्द खोजें।",
    guidesEyebrow:"चरण-दर-चरण सीखें",guidesTitle:"पोर्टल इस्तेमाल करने से पहले",step1Title:"सही सेवा चुनें",step1Text:"अपनी ज़रूरत के लिए आधिकारिक वेबसाइट खोलें।",step2Title:"ज़रूरतें जाँचें",step2Text:"आधिकारिक निर्देश पढ़ें और ज़रूरी दस्तावेज़ तैयार रखें।",step3Title:"आधिकारिक निर्देशों का पालन करें",step3Text:"आवेदन भेजने से पहले जानकारी ध्यान से जाँचें।",
    checkTitle:"मेरी तैयारी सूची",checkText:"तैयारी के साथ हर विकल्प पर निशान लगाएँ।",check1:"मैंने सही सेवा चुनी है",check2:"मैंने आधिकारिक ज़रूरतें जाँची हैं",check3:"मैंने आधिकारिक वेबसाइट खोली है",check4:"मैं OTP और पासवर्ड गोपनीय रखूँगा/रखूँगी",checkNote:"यह सूची केवल सीखने और तैयारी के लिए है।",
    safetyEyebrow:"सुरक्षित रहें",safetyTitle:"इंटरनेट इस्तेमाल करते समय सुरक्षित रहें",otpTitle:"OTP कभी साझा न करें",otpText:"कॉल करने वालों या अनजान लोगों को OTP, PIN या पासवर्ड न बताएँ।",urlTitle:"वेबसाइट का पता जाँचें",urlText:"विश्वसनीय आधिकारिक लिंक इस्तेमाल करें और सही डोमेन जाँचें।",scamTitle:"संदिग्ध लिंक से बचें",scamText:"इनाम या तुरंत लाभ का वादा करने वाले अनजान संदेशों पर क्लिक न करें।",safetyNote:"साइबर वित्तीय धोखाधड़ी का संदेह हो? भारत में तुरंत 1930 पर कॉल करें और cybercrime.gov.in पर रिपोर्ट करें।",reportBtn:"आधिकारिक साइबर अपराध पोर्टल ↗",
    quizEyebrow:"अपनी जानकारी जाँचें",quizTitle:"डिजिटल सुरक्षा प्रश्नोत्तरी",previous:"← पिछला",next:"अगला प्रश्न →",seeResult:"परिणाम देखें",restart:"प्रश्नोत्तरी फिर शुरू करें",question:"प्रश्न {n} / {total}",score:"अंक: {score}",completed:"प्रश्नोत्तरी पूरी हुई",yourScore:"आपके अंक: {score} / {total}",excellent:"बहुत बढ़िया! आपने सभी प्रश्नों के सही उत्तर दिए।",good:"अच्छा प्रयास! समझाइयाँ पढ़ें और अंक सुधारने के लिए फिर कोशिश करें।",correct:"सही! ",incorrect:"यह सही नहीं है। ",answerFirst:"आगे बढ़ने के लिए एक उत्तर चुनें।",resultExcellent:"डिजिटल सुरक्षा की आपकी जानकारी बहुत अच्छी है!",resultGood:"सीखते रहें—सुरक्षा की छोटी आदतें ऑनलाइन आपकी रक्षा करती हैं।",
    feedbackEyebrow:"आपकी राय ज़रूरी है",feedbackTitle:"वेबसाइट बेहतर बनाने में मदद करें",feedbackText:"इस शैक्षणिक वेबसाइट का अपना अनुभव बताएँ।",ratingLabel:"क्या यह वेबसाइट उपयोगी थी?",selectRating:"रेटिंग चुनें",rating5:"5 - बहुत उपयोगी",rating4:"4 - उपयोगी",rating3:"3 - ठीक है",rating2:"2 - ज़्यादा उपयोगी नहीं",rating1:"1 - उपयोगी नहीं",suggestionLabel:"सुझाव (वैकल्पिक)",suggestionPlaceholder:"अपने सुझाव लिखें...",submitFeedback:"इस डिवाइस पर फ़ीडबैक सेव करें",feedbackLocalNote:"यह डेमो फ़ीडबैक केवल इसी ब्राउज़र में सेव करता है। यह प्रोजेक्ट के मालिक को नहीं भेजा जाता।",feedbackSaved:"धन्यवाद! फ़ीडबैक केवल इसी डिवाइस पर सेव हुआ है।",feedbackFailed:"इस ब्राउज़र में फ़ीडबैक सेव नहीं हो सका। कोई डेटा नहीं भेजा गया।",
    disclaimerTitle:"शैक्षणिक परियोजना सूचना",disclaimerText:"Digital Sahayak एक स्वतंत्र शैक्षणिक परियोजना है, सरकारी वेबसाइट नहीं। सेवाएँ, आवश्यकताएँ और शुल्क बदल सकते हैं। जानकारी संबंधित आधिकारिक पोर्टल पर जाँचें। इस डेमो वेबसाइट पर संवेदनशील व्यक्तिगत जानकारी न डालें।",footerFeedback:"फ़ीडबैक दें",closeGuide:"मार्गदर्शिका बंद करें",guideIntro:"इन सरल चरणों का पालन करें। वर्तमान निर्देश आधिकारिक पोर्टल पर जाँचें।",guideNote:"महत्वपूर्ण: अपना OTP, PIN या पासवर्ड किसी से साझा न करें। आधिकारिक प्रक्रिया बदल सकती है।",searchFound:"सेवाएँ मिलीं",
    listen:"🔊 सुनें",play:"▶ चलाएँ",pause:"⏸ रोकें",resume:"▶ फिर चलाएँ",stop:"⏹ बंद करें",speechUnsupported:"इस ब्राउज़र में टेक्स्ट सुनाने की सुविधा उपलब्ध नहीं है। Chrome, Edge या Safari का नया संस्करण आज़माएँ।",voiceFallback:"इस डिवाइस पर {lang} की सही आवाज़ उपलब्ध नहीं है। सबसे मिलती-जुलती आवाज़ इस्तेमाल की जा रही है; उच्चारण अलग हो सकता है।",speechReady:"किसी भाग को सुनने के लिए 'सुनें' दबाएँ या पूरा पृष्ठ सुनने के लिए चलाएँ दबाएँ।",nothingToRead:"इस भाग में सुनाने के लिए कोई दिखाई देने वाला पाठ नहीं है।",ttsToolbar:"पाठ सुनने के नियंत्रण",speechStopped:"आवाज़ बंद कर दी गई है।",speechPaused:"आवाज़ रोक दी गई है।",speechResumed:"आवाज़ फिर शुरू हो गई है।",playPage:"▶ पृष्ठ सुनें",sectionListen:"यह भाग सुनें",cardListen:"यह सेवा सुनें",guideListen:"यह मार्गदर्शिका सुनें",quizListen:"यह प्रश्नोत्तरी सुनें",speechError:"आवाज़ शुरू नहीं हो सकी। अपने डिवाइस की आवाज़ सेटिंग जाँचें।"

  },
  mr: {
    navHome:"मुख्यपृष्ठ",navServices:"सेवा",navGuides:"मार्गदर्शक",navSafety:"सायबर सुरक्षा",navQuiz:"प्रश्नमंजुषा",brandSubtitle:"नागरिक सहाय्य पोर्टल",footerTagline:"प्रत्येकासाठी डिजिटल जागरूकता",footerProject:"महाविद्यालयीन CEP प्रकल्प",
    eyebrow:"तुमचा डिजिटल मार्गदर्शक",heroTitle:"सरकारी सेवा, आता सोप्या पद्धतीने.",heroText:"सोपे मार्गदर्शक, कागदपत्रांची यादी आणि ऑनलाइन सुरक्षिततेच्या टिप्स वापरून सरकारी पोर्टल वापरायला शिका.",
    explore:"सेवा पाहा →",heroNote:"✓ मोफत शिकण्याचे साहित्य · ✓ सोप्या सूचना",artServices:"डिजिटल सेवा",artSteps:"शिका • तयारी करा • वापरा",artMini:"📱 वापरण्यास सोपे",
    quickHelp:"त्वरित मदत",findTitle:"तुम्हाला कोणत्या मदतीची गरज आहे?",searchPlaceholder:"सेवा शोधा...",servicesEyebrow:"सेवा पाहा",servicesTitle:"लोकप्रिय सरकारी सेवा",servicesText:"अधिक माहितीसाठी सेवा निवडा.",
    tagDocuments:"कागदपत्रे",tagServices:"सेवा",tagSchemes:"योजना",tagIdentity:"ओळख",tagCitizenship:"नागरिक सेवा",tagSafety:"सुरक्षा",officialPortal:"अधिकृत पोर्टल ↗",
    digilockerDesc:"डिजिटल कागदपत्रे आणि प्रमाणपत्रे मिळवण्याबद्दल शिका.",umangDesc:"UMANG वरील सरकारी सेवांची माहिती मिळवा.",schemeDesc:"सरकारी योजना आणि पात्रतेची माहिती पाहा.",aadhaarDesc:"आधारच्या अधिकृत सेवा आणि माहिती पाहा.",voterDesc:"मतदार नोंदणी आणि निवडणूक सेवांबद्दल शिका.",
    safetyCard:"सायबर सुरक्षा",safetyDesc:"ऑनलाइन फसवणूक ओळखायला आणि खाती सुरक्षित ठेवायला शिका.",learnSafety:"सुरक्षितता शिका ↓",guideBtn:"मार्गदर्शक पाहा",noResults:"जुळणारी सेवा आढळली नाही. दुसरा शब्द शोधा.",
    guidesEyebrow:"टप्प्याटप्प्याने शिका",guidesTitle:"पोर्टल वापरण्यापूर्वी",step1Title:"योग्य सेवा निवडा",step1Text:"तुमच्या गरजेसाठी अधिकृत वेबसाइट वापरा.",step2Title:"आवश्यकता तपासा",step2Text:"अधिकृत सूचना वाचा आणि आवश्यक कागदपत्रे तयार ठेवा.",step3Title:"अधिकृत सूचनांचे पालन करा",step3Text:"अर्ज पाठवण्यापूर्वी माहिती काळजीपूर्वक तपासा.",
    checkTitle:"माझी तयारी यादी",checkText:"तयारीनुसार प्रत्येक पर्यायावर खूण करा.",check1:"मी योग्य सेवा निवडली आहे",check2:"मी अधिकृत आवश्यकता तपासल्या आहेत",check3:"मी अधिकृत वेबसाइट उघडली आहे",check4:"मी OTP आणि पासवर्ड गोपनीय ठेवेन",checkNote:"ही यादी फक्त शिकण्यासाठी आणि तयारीसाठी आहे.",
    safetyEyebrow:"सुरक्षित राहा",safetyTitle:"इंटरनेट वापरताना सुरक्षित राहा",otpTitle:"OTP कधीही शेअर करू नका",otpText:"फोन करणाऱ्या किंवा अनोळखी व्यक्तींना OTP, PIN किंवा पासवर्ड सांगू नका.",urlTitle:"वेबसाइटचा पत्ता तपासा",urlText:"विश्वसनीय अधिकृत लिंक वापरा आणि योग्य डोमेन तपासा.",scamTitle:"संशयास्पद लिंक टाळा",scamText:"बक्षीस किंवा तातडीच्या लाभाचे आश्वासन देणाऱ्या अनोळखी संदेशांवर क्लिक करू नका.",safetyNote:"सायबर आर्थिक फसवणुकीचा संशय असल्यास भारतात त्वरित 1930 वर संपर्क करा आणि cybercrime.gov.in वर तक्रार नोंदवा.",reportBtn:"अधिकृत सायबर क्राइम पोर्टल ↗",
    quizEyebrow:"तुमचे ज्ञान तपासा",quizTitle:"डिजिटल सुरक्षा प्रश्नमंजुषा",previous:"← मागील",next:"पुढील प्रश्न →",seeResult:"निकाल पाहा",restart:"प्रश्नमंजुषा पुन्हा सुरू करा",question:"प्रश्न {n} / {total}",score:"गुण: {score}",completed:"प्रश्नमंजुषा पूर्ण",yourScore:"तुमचे गुण: {score} / {total}",excellent:"उत्तम! तुम्ही सर्व प्रश्नांची बरोबर उत्तरे दिली.",good:"छान प्रयत्न! स्पष्टीकरणे वाचा आणि गुण सुधारण्यासाठी पुन्हा प्रयत्न करा.",correct:"बरोबर! ",incorrect:"हे बरोबर नाही. ",answerFirst:"पुढे जाण्यासाठी उत्तर निवडा.",resultExcellent:"डिजिटल सुरक्षिततेबद्दल तुमचे ज्ञान उत्तम आहे!",resultGood:"शिकत राहा—सुरक्षिततेच्या छोट्या सवयी ऑनलाइन संरक्षण करतात.",
    feedbackEyebrow:"तुमचे मत महत्त्वाचे आहे",feedbackTitle:"वेबसाइट सुधारण्यास मदत करा",feedbackText:"या शैक्षणिक वेबसाइटचा तुमचा अनुभव सांगा.",ratingLabel:"ही वेबसाइट उपयुक्त होती का?",selectRating:"रेटिंग निवडा",rating5:"5 - खूप उपयुक्त",rating4:"4 - उपयुक्त",rating3:"3 - ठीक आहे",rating2:"2 - फारशी उपयुक्त नाही",rating1:"1 - उपयुक्त नाही",suggestionLabel:"सूचना (पर्यायी)",suggestionPlaceholder:"तुमच्या सूचना लिहा...",submitFeedback:"या डिव्हाइसवर अभिप्राय जतन करा",feedbackLocalNote:"या डेमोमध्ये अभिप्राय फक्त याच ब्राउझरमध्ये जतन होतो. तो प्रकल्पाच्या मालकाला पाठवला जात नाही.",feedbackSaved:"धन्यवाद! अभिप्राय फक्त या डिव्हाइसवर जतन झाला आहे.",feedbackFailed:"या ब्राउझरमध्ये अभिप्राय जतन होऊ शकला नाही. कोणताही डेटा पाठवला नाही.",
    disclaimerTitle:"शैक्षणिक प्रकल्पाची सूचना",disclaimerText:"Digital Sahayak हा स्वतंत्र शैक्षणिक प्रकल्प आहे; सरकारी वेबसाइट नाही. सेवा, आवश्यकता आणि शुल्क बदलू शकतात. माहिती संबंधित अधिकृत पोर्टलवर तपासा. या डेमो वेबसाइटवर संवेदनशील वैयक्तिक माहिती टाकू नका.",footerFeedback:"अभिप्राय द्या",closeGuide:"मार्गदर्शक बंद करा",guideIntro:"या सोप्या टप्प्यांचे अनुसरण करा. सध्याच्या सूचना अधिकृत पोर्टलवर तपासा.",guideNote:"महत्त्वाचे: तुमचा OTP, PIN किंवा पासवर्ड कोणालाही सांगू नका. अधिकृत प्रक्रिया बदलू शकते.",searchFound:"सेवा सापडल्या",
    listen:"🔊 ऐका",play:"▶ सुरू करा",pause:"⏸ थांबवा",resume:"▶ पुन्हा सुरू करा",stop:"⏹ बंद करा",speechUnsupported:"या ब्राउझरमध्ये मजकूर वाचून दाखवण्याची सुविधा उपलब्ध नाही. Chrome, Edge किंवा Safari ची नवीन आवृत्ती वापरा.",voiceFallback:"या डिव्हाइसवर {lang} साठी योग्य आवाज उपलब्ध नाही. जवळचा उपलब्ध आवाज वापरला जात आहे; उच्चार वेगळा असू शकतो.",speechReady:"एखादा भाग ऐकण्यासाठी 'ऐका' दाबा किंवा संपूर्ण पानासाठी सुरू करा दाबा.",nothingToRead:"या भागात वाचून दाखवण्यासाठी दिसणारा मजकूर नाही.",ttsToolbar:"मजकूर ऐकण्याची नियंत्रणे",speechStopped:"आवाज बंद केला आहे.",speechPaused:"आवाज थांबवला आहे.",speechResumed:"आवाज पुन्हा सुरू केला आहे.",playPage:"▶ पान ऐका",sectionListen:"हा भाग ऐका",cardListen:"ही सेवा ऐका",guideListen:"हे मार्गदर्शन ऐका",quizListen:"ही प्रश्नमंजुषा ऐका",speechError:"आवाज सुरू होऊ शकला नाही. डिव्हाइसच्या आवाज सेटिंग्ज तपासा."

  }
};

const guideData = {
 digilocker:{
  title:{en:"DigiLocker — Getting Started",hi:"DigiLocker — शुरुआत कैसे करें",mr:"DigiLocker — सुरुवात कशी करावी"},
  steps:{
   en:["Open the official DigiLocker website: digilocker.gov.in.","Choose Sign In or Sign Up and follow the instructions shown by the official portal.","Complete any identity or mobile verification requested by the portal yourself.","Find the document or issuing department you need and follow its instructions.","Review the document details before downloading or sharing it."],
   hi:["DigiLocker की आधिकारिक वेबसाइट digilocker.gov.in खोलें।","Sign In या Sign Up चुनें और आधिकारिक पोर्टल पर दिए निर्देशों का पालन करें।","पोर्टल द्वारा माँगा गया पहचान या मोबाइल सत्यापन स्वयं पूरा करें।","ज़रूरी दस्तावेज़ या जारी करने वाले विभाग को खोजें और निर्देशों का पालन करें।","दस्तावेज़ डाउनलोड या साझा करने से पहले उसकी जानकारी जाँचें।"],
   mr:["DigiLocker ची अधिकृत वेबसाइट digilocker.gov.in उघडा.","Sign In किंवा Sign Up निवडा आणि अधिकृत पोर्टलवरील सूचनांचे पालन करा.","पोर्टलने मागितलेली ओळख किंवा मोबाईल पडताळणी स्वतः पूर्ण करा.","आवश्यक कागदपत्र किंवा ते जारी करणारा विभाग शोधा आणि सूचना पाळा.","कागदपत्र डाउनलोड किंवा शेअर करण्यापूर्वी तपशील तपासा."]
  },note:{en:"Available documents and requirements may vary.",hi:"उपलब्ध दस्तावेज़ और आवश्यकताएँ अलग-अलग हो सकती हैं।",mr:"उपलब्ध कागदपत्रे आणि आवश्यकता वेगवेगळ्या असू शकतात।"},url:"https://www.digilocker.gov.in/"
 },
 umang:{
  title:{en:"UMANG — Getting Started",hi:"UMANG — शुरुआत कैसे करें",mr:"UMANG — सुरुवात कशी करावी"},
  steps:{
   en:["Open the official UMANG portal: web.umang.gov.in.","Search for the department or service you need.","Open the service and read its eligibility and document requirements.","Follow the instructions provided for that specific service.","If you submit a request, keep its reference number private and check status on the official portal."],
   hi:["UMANG का आधिकारिक पोर्टल web.umang.gov.in खोलें।","जिस विभाग या सेवा की ज़रूरत है, उसे खोजें।","सेवा खोलकर पात्रता और दस्तावेज़ों की ज़रूरत पढ़ें।","उस सेवा के लिए दिए गए निर्देशों का पालन करें।","अनुरोध भेजने पर संदर्भ संख्या सुरक्षित रखें और स्थिति आधिकारिक पोर्टल पर देखें।"],
   mr:["UMANG चे अधिकृत पोर्टल web.umang.gov.in उघडा.","आवश्यक विभाग किंवा सेवा शोधा.","सेवा उघडून पात्रता आणि कागदपत्रांची आवश्यकता वाचा.","त्या सेवेसाठी दिलेल्या सूचनांचे पालन करा.","विनंती सादर केल्यास संदर्भ क्रमांक सुरक्षित ठेवा आणि स्थिती अधिकृत पोर्टलवर तपासा."]
  },note:{en:"Services and procedures may change.",hi:"सेवाएँ और प्रक्रियाएँ बदल सकती हैं।",mr:"सेवा आणि प्रक्रिया बदलू शकतात."},url:"https://web.umang.gov.in/"
 },
 myscheme:{
  title:{en:"myScheme — Find a Scheme",hi:"myScheme — योजना खोजें",mr:"myScheme — योजना शोधा"},
  steps:{
   en:["Open the official myScheme website: myscheme.gov.in.","Browse or search for a scheme that matches your situation.","Read the eligibility criteria, benefits and required documents carefully.","Confirm the application process and deadline from the official scheme information.","Apply only through the official application channel named for that scheme."],
   hi:["myScheme की आधिकारिक वेबसाइट myscheme.gov.in खोलें।","अपनी स्थिति के अनुसार योजना खोजें।","पात्रता, लाभ और ज़रूरी दस्तावेज़ ध्यान से पढ़ें।","आधिकारिक योजना जानकारी से आवेदन प्रक्रिया और अंतिम तारीख की पुष्टि करें।","केवल उस योजना के लिए बताए गए आधिकारिक माध्यम से आवेदन करें।"],
   mr:["myScheme ची अधिकृत वेबसाइट myscheme.gov.in उघडा.","तुमच्या परिस्थितीला लागू होणारी योजना शोधा.","पात्रता, लाभ आणि आवश्यक कागदपत्रे काळजीपूर्वक वाचा.","अधिकृत योजनेच्या माहितीतून अर्ज प्रक्रिया आणि अंतिम तारीख तपासा.","त्या योजनेसाठी दिलेल्या अधिकृत माध्यमातूनच अर्ज करा."]
  },note:{en:"Eligibility guidance does not guarantee approval.",hi:"पात्रता की जानकारी से लाभ मिलने की गारंटी नहीं होती।",mr:"पात्रतेची माहिती म्हणजे मंजुरीची हमी नाही."},url:"https://www.myscheme.gov.in/"
 },
 aadhaar:{
  title:{en:"Aadhaar / UIDAI — Official Guidance",hi:"आधार / UIDAI — आधिकारिक जानकारी",mr:"आधार / UIDAI — अधिकृत माहिती"},
  steps:{
   en:["Open the official UIDAI website: uidai.gov.in.","Choose the Aadhaar service you need.","Read which services are available online and which require a visit.","Check official instructions, fees and appointment requirements before proceeding.","Never tell your Aadhaar OTP, PIN or password to an unofficial agent or caller."],
   hi:["UIDAI की आधिकारिक वेबसाइट uidai.gov.in खोलें।","अपनी ज़रूरत की आधार सेवा चुनें।","पढ़ें कि कौन-सी सेवाएँ ऑनलाइन उपलब्ध हैं और किनके लिए केंद्र जाना होगा।","आगे बढ़ने से पहले आधिकारिक निर्देश, शुल्क और अपॉइंटमेंट की ज़रूरत जाँचें।","अपना आधार OTP, PIN या पासवर्ड किसी अनधिकृत एजेंट या कॉल करने वाले को न बताएँ।"],
   mr:["UIDAI ची अधिकृत वेबसाइट uidai.gov.in उघडा.","तुम्हाला आवश्यक असलेली आधार सेवा निवडा.","कोणत्या सेवा ऑनलाइन उपलब्ध आहेत आणि कोणासाठी केंद्रात जावे लागेल ते वाचा.","पुढे जाण्यापूर्वी अधिकृत सूचना, शुल्क आणि अपॉइंटमेंटची गरज तपासा.","आधार OTP, PIN किंवा पासवर्ड अनधिकृत एजंट किंवा फोन करणाऱ्याला सांगू नका."]
  },note:{en:"Not every Aadhaar service can be completed online.",hi:"आधार की हर सेवा ऑनलाइन पूरी नहीं की जा सकती।",mr:"आधारच्या सर्व सेवा ऑनलाइन पूर्ण करता येत नाहीत."},url:"https://uidai.gov.in/"
 },
 voter:{
  title:{en:"Voter Services — Getting Started",hi:"मतदाता सेवाएँ — शुरुआत कैसे करें",mr:"मतदार सेवा — सुरुवात कशी करावी"},
  steps:{
   en:["Open the Election Commission of India voter portal: voters.eci.gov.in.","Choose the service you need, such as registration or checking voter details.","Read the eligibility rules and instructions for that service.","Prepare only the documents listed on the official portal.","After applying, use the official portal to check the application status."],
   hi:["भारत निर्वाचन आयोग का मतदाता पोर्टल voters.eci.gov.in खोलें।","अपनी ज़रूरत की सेवा चुनें, जैसे पंजीकरण या मतदाता विवरण जाँचना।","उस सेवा के पात्रता नियम और निर्देश पढ़ें।","केवल आधिकारिक पोर्टल पर सूचीबद्ध दस्तावेज़ तैयार करें।","आवेदन के बाद उसकी स्थिति आधिकारिक पोर्टल पर जाँचें।"],
   mr:["भारत निवडणूक आयोगाचे मतदार पोर्टल voters.eci.gov.in उघडा.","नोंदणी किंवा मतदार तपशील तपासणे यांसारखी आवश्यक सेवा निवडा.","त्या सेवेचे पात्रता नियम आणि सूचना वाचा.","अधिकृत पोर्टलवर नमूद केलेलीच कागदपत्रे तयार ठेवा.","अर्ज केल्यानंतर त्याची स्थिती अधिकृत पोर्टलवर तपासा."]
  },note:{en:"Election services follow official rules and timelines.",hi:"चुनावी सेवाओं में आधिकारिक नियम और समय-सीमाएँ लागू होती हैं।",mr:"निवडणूक सेवांसाठी अधिकृत नियम आणि कालमर्यादा लागू असतात."},url:"https://voters.eci.gov.in/"
 },
 safety:{
  title:{en:"Cyber Safety Basics",hi:"साइबर सुरक्षा की मूल बातें",mr:"सायबर सुरक्षिततेच्या मूलभूत गोष्टी"},
  steps:{
   en:["Never share OTPs, UPI PINs, passwords or screen-sharing access.","Check the full website address before entering personal information.","Do not install apps or remote-access tools because an unknown caller asks you to.","Never approve a UPI collect request unless you understand and intend the payment.","Report suspected cyber financial fraud promptly through official channels."],
   hi:["OTP, UPI PIN, पासवर्ड या स्क्रीन-शेयरिंग की अनुमति कभी साझा न करें।","व्यक्तिगत जानकारी डालने से पहले वेबसाइट का पूरा पता जाँचें।","अनजान कॉल करने वाले के कहने पर ऐप या रिमोट-एक्सेस टूल इंस्टॉल न करें।","UPI कलेक्ट अनुरोध तभी स्वीकार करें जब भुगतान समझते हों और करना चाहते हों।","साइबर वित्तीय धोखाधड़ी का संदेह हो तो तुरंत आधिकारिक माध्यम से रिपोर्ट करें।"],
   mr:["OTP, UPI PIN, पासवर्ड किंवा स्क्रीन-शेअरिंगची परवानगी कधीही देऊ नका.","वैयक्तिक माहिती भरण्यापूर्वी वेबसाइटचा पूर्ण पत्ता तपासा.","अनोळखी व्यक्तीच्या सांगण्यावरून अॅप किंवा रिमोट-अॅक्सेस साधन इन्स्टॉल करू नका.","UPI कलेक्ट विनंती समजली असेल आणि पैसे द्यायचे असतील तरच मंजूर करा.","सायबर आर्थिक फसवणुकीचा संशय असल्यास त्वरित अधिकृत माध्यमातून तक्रार करा."]
  },note:{en:"In India, report cyber financial fraud at 1930 and cybercrime.gov.in.",hi:"भारत में साइबर वित्तीय धोखाधड़ी की रिपोर्ट 1930 और cybercrime.gov.in पर करें।",mr:"भारतात सायबर आर्थिक फसवणुकीची तक्रार 1930 आणि cybercrime.gov.in येथे करा."},url:"https://www.cybercrime.gov.in/"
 }
};

const questions = [
 {q:{en:"Someone asks you to share an OTP over the phone. What should you do?",hi:"कोई व्यक्ति फोन पर आपसे OTP माँगता है। आपको क्या करना चाहिए?",mr:"फोनवर कोणी तुमच्याकडे OTP मागतो. तुम्ही काय करावे?"},
  o:{en:["Share it if they know your name","Never share it","Send it by text"],hi:["वे आपका नाम जानते हैं इसलिए बता दें","OTP कभी साझा न करें","मैसेज में भेज दें"],mr:["त्यांना तुमचे नाव माहीत आहे म्हणून सांगा","OTP कधीही शेअर करू नका","मेसेजने पाठवा"]},c:1,e:{en:"An OTP can authorize access or a transaction. Keep it private, even from callers claiming to be officials.",hi:"OTP से खाते या लेन-देन की अनुमति मिल सकती है। अधिकारी होने का दावा करने वाले व्यक्ति से भी इसे गोपनीय रखें।",mr:"OTP मुळे खाते किंवा व्यवहाराला परवानगी मिळू शकते. अधिकारी असल्याचा दावा करणाऱ्या व्यक्तीलाही तो सांगू नका."}},
 {q:{en:"Which is the safest way to visit a government service?",hi:"सरकारी सेवा खोलने का सबसे सुरक्षित तरीका कौन-सा है?",mr:"सरकारी सेवा उघडण्याचा सर्वात सुरक्षित मार्ग कोणता?"},
  o:{en:["Click any forwarded message","Use a verified official website address","Choose a sponsored pop-up"],hi:["किसी भी फॉरवर्ड संदेश पर क्लिक करें","जाँचा हुआ आधिकारिक वेबसाइट पता इस्तेमाल करें","विज्ञापन वाले पॉप-अप को चुनें"],mr:["कोणत्याही फॉरवर्ड मेसेजवर क्लिक करा","तपासलेला अधिकृत वेबसाइट पत्ता वापरा","जाहिरातीतील पॉप-अप निवडा"]},c:1,e:{en:"Check the exact domain and reach services through official sources instead of unexpected messages or ads.",hi:"सही डोमेन जाँचें और अनजान संदेश या विज्ञापन के बजाय आधिकारिक स्रोत से वेबसाइट खोलें।",mr:"योग्य डोमेन तपासा आणि अनोळखी संदेश किंवा जाहिरातीऐवजी अधिकृत स्रोतावरून वेबसाइट उघडा."}},
 {q:{en:"A caller says they can reverse a payment if you tell them your UPI PIN. What should you do?",hi:"कॉलर कहता है कि UPI PIN बताने पर वह भुगतान वापस कर देगा। क्या करें?",mr:"UPI PIN सांगितल्यास पैसे परत मिळवून देतो असे फोन करणारा म्हणतो. काय कराल?"},
  o:{en:["Tell them the PIN","Enter it while screen-sharing","Do not share it; contact your bank through official channels"],hi:["PIN बता दें","स्क्रीन शेयर करके दर्ज करें","PIN न बताएँ; आधिकारिक माध्यम से बैंक से संपर्क करें"],mr:["PIN सांगा","स्क्रीन शेअर करून PIN भरा","PIN सांगू नका; अधिकृत माध्यमातून बँकेशी संपर्क करा"]},c:2,e:{en:"A UPI PIN is used to authorize payments. Never disclose it to receive money or reverse a transaction.",hi:"UPI PIN से भुगतान की अनुमति मिलती है। पैसे पाने या लेन-देन वापस कराने के लिए इसे न बताएँ।",mr:"UPI PIN वापरून पैसे देण्यास मंजुरी मिळते. पैसे मिळवण्यासाठी किंवा व्यवहार परत घेण्यासाठी तो सांगू नका."}},
 {q:{en:"What should you do with a suspicious link promising a free prize?",hi:"मुफ़्त इनाम का वादा करने वाले संदिग्ध लिंक के साथ क्या करें?",mr:"मोफत बक्षिसाचे आश्वासन देणाऱ्या संशयास्पद लिंकबाबत काय करावे?"},
  o:{en:["Open it quickly","Forward it to friends","Do not open it; verify the message independently"],hi:["तुरंत खोलें","दोस्तों को भेजें","न खोलें; संदेश की अलग से पुष्टि करें"],mr:["लगेच उघडा","मित्रांना पाठवा","उघडू नका; संदेशाची स्वतंत्रपणे खात्री करा"]},c:2,e:{en:"Prize and urgency messages may be phishing attempts. Avoid the link and verify through a trusted source.",hi:"इनाम और जल्दबाज़ी वाले संदेश फ़िशिंग हो सकते हैं। लिंक से बचें और विश्वसनीय स्रोत से पुष्टि करें।",mr:"बक्षीस आणि घाई करण्यास सांगणारे संदेश फिशिंग असू शकतात. लिंक टाळा आणि विश्वासार्ह स्रोताकडून खात्री करा."}},
 {q:{en:"Which password habit is safest?",hi:"पासवर्ड के लिए कौन-सी आदत सबसे सुरक्षित है?",mr:"पासवर्डसाठी कोणती सवय सर्वात सुरक्षित आहे?"},
  o:{en:["Use the same short password everywhere","Use long, unique passwords and a password manager if available","Share passwords with a friend"],hi:["हर जगह एक छोटा पासवर्ड रखें","लंबे, अलग-अलग पासवर्ड रखें; उपलब्ध हो तो पासवर्ड मैनेजर इस्तेमाल करें","दोस्त को पासवर्ड बता दें"],mr:["सर्व ठिकाणी एकच छोटा पासवर्ड वापरा","लांब, वेगवेगळे पासवर्ड वापरा; उपलब्ध असल्यास पासवर्ड मॅनेजर वापरा","मित्राला पासवर्ड सांगा"]},c:1,e:{en:"Unique, hard-to-guess passwords limit the damage if one account is compromised. Never share them.",hi:"अलग और अनुमान लगाना कठिन पासवर्ड से एक खाते की समस्या दूसरे खातों तक नहीं फैलती। पासवर्ड साझा न करें।",mr:"वेगवेगळे आणि ओळखणे कठीण पासवर्ड वापरल्याने एका खात्याची समस्या इतर खात्यांवर परिणाम करत नाही. पासवर्ड शेअर करू नका."}},
 {q:{en:"A stranger asks you to install an app to help fix your bank account. What is safest?",hi:"कोई अनजान व्यक्ति बैंक खाता ठीक करने के लिए ऐप इंस्टॉल करने को कहता है। सुरक्षित कदम क्या है?",mr:"बँक खाते दुरुस्त करण्यासाठी अनोळखी व्यक्ती अॅप इन्स्टॉल करायला सांगते. सुरक्षित पर्याय कोणता?"},
  o:{en:["Install it and grant all permissions","Do not install it; contact your bank using its official number","Give them remote access"],hi:["ऐप इंस्टॉल करके सभी अनुमति दें","इंस्टॉल न करें; बैंक के आधिकारिक नंबर पर संपर्क करें","उन्हें रिमोट एक्सेस दें"],mr:["अॅप इन्स्टॉल करून सर्व परवानग्या द्या","इन्स्टॉल करू नका; बँकेच्या अधिकृत क्रमांकावर संपर्क करा","त्यांना रिमोट प्रवेश द्या"]},c:1,e:{en:"Remote-access apps can expose private information and transactions. Use your bank's verified contact details.",hi:"रिमोट-एक्सेस ऐप निजी जानकारी और लेन-देन दिखा सकते हैं। बैंक के सत्यापित संपर्क विवरण इस्तेमाल करें।",mr:"रिमोट-अॅक्सेस अॅपमुळे खाजगी माहिती आणि व्यवहार उघड होऊ शकतात. बँकेचे पडताळलेले संपर्क तपशील वापरा."}},
 {q:{en:"You receive a UPI collect request you were not expecting. What should you do?",hi:"आपको ऐसा UPI कलेक्ट अनुरोध मिलता है जिसकी आपने उम्मीद नहीं की थी। क्या करें?",mr:"तुम्हाला अपेक्षित नसलेली UPI कलेक्ट विनंती येते. काय करावे?"},
  o:{en:["Approve it to check what happens","Decline it unless you understand and intend the payment","Share your PIN with the sender"],hi:["देखने के लिए मंज़ूर करें","जब तक भुगतान समझकर करना न चाहें, अस्वीकार करें","भेजने वाले को PIN बता दें"],mr:["काय होते ते पाहण्यासाठी मंजूर करा","व्यवहार समजून आणि पैसे द्यायचे असल्याशिवाय नकार द्या","पाठवणाऱ्याला PIN सांगा"]},c:1,e:{en:"Approving a collect request may authorize money leaving your account. Read payment details and decline unknown requests.",hi:"कलेक्ट अनुरोध मंज़ूर करने से खाते से पैसे जा सकते हैं। विवरण पढ़ें और अनजान अनुरोध अस्वीकार करें।",mr:"कलेक्ट विनंती मंजूर केल्यास खात्यातून पैसे जाऊ शकतात. तपशील वाचा आणि अनोळखी विनंती नाकारा."}},
 {q:{en:"What should you do before entering personal details on a website?",hi:"वेबसाइट पर निजी जानकारी डालने से पहले क्या करें?",mr:"वेबसाइटवर वैयक्तिक माहिती भरण्यापूर्वी काय करावे?"},
  o:{en:["Check the exact domain and whether it is the official service","Trust the logo only","Ignore browser warnings"],hi:["सही डोमेन और आधिकारिक वेबसाइट होने की जाँच करें","केवल लोगो पर भरोसा करें","ब्राउज़र की चेतावनी अनदेखी करें"],mr:["योग्य डोमेन आणि अधिकृत वेबसाइट असल्याची खात्री करा","फक्त लोगोवर विश्वास ठेवा","ब्राउझरचा इशारा दुर्लक्षित करा"]},c:0,e:{en:"A copied logo does not prove a website is genuine. Check the full address and heed browser security warnings.",hi:"कॉपी किया हुआ लोगो वेबसाइट के असली होने का प्रमाण नहीं है। पूरा पता जाँचें और ब्राउज़र चेतावनी मानें।",mr:"कॉपी केलेला लोगो वेबसाइट खरी असल्याचा पुरावा नाही. पूर्ण पत्ता तपासा आणि ब्राउझरचे सुरक्षा इशारे पाळा."}},
 {q:{en:"You think money has been stolen through cyber financial fraud in India. What should you do?",hi:"आपको लगता है कि भारत में साइबर वित्तीय धोखाधड़ी से पैसे चोरी हुए हैं। क्या करें?",mr:"भारतात सायबर आर्थिक फसवणुकीमुळे पैसे गेले असे वाटल्यास काय करावे?"},
  o:{en:["Wait a few weeks","Send more money to recover it","Contact your bank and report promptly through 1930 / cybercrime.gov.in"],hi:["कुछ सप्ताह इंतज़ार करें","पैसे वापस पाने के लिए और पैसे भेजें","बैंक से संपर्क करें और 1930 / cybercrime.gov.in पर तुरंत रिपोर्ट करें"],mr:["काही आठवडे थांबा","पैसे परत मिळवण्यासाठी आणखी पैसे पाठवा","बँकेशी संपर्क करा आणि 1930 / cybercrime.gov.in वर त्वरित तक्रार करा"]},c:2,e:{en:"Act quickly: contact your bank and report cyber financial fraud through India's official reporting channels.",hi:"जल्दी कार्रवाई करें: बैंक से संपर्क करें और भारत के आधिकारिक माध्यमों से साइबर वित्तीय धोखाधड़ी की रिपोर्ट करें।",mr:"त्वरित कृती करा: बँकेशी संपर्क करा आणि भारताच्या अधिकृत माध्यमांतून सायबर आर्थिक फसवणुकीची तक्रार करा."}},
 {q:{en:"What is a good habit when using a shared or public computer?",hi:"साझा या सार्वजनिक कंप्यूटर इस्तेमाल करते समय कौन-सी आदत अच्छी है?",mr:"सामायिक किंवा सार्वजनिक संगणक वापरताना कोणती सवय चांगली आहे?"},
  o:{en:["Save your password in the browser","Log out of accounts and avoid saving passwords","Leave accounts open for the next person"],hi:["ब्राउज़र में पासवर्ड सेव करें","खातों से लॉग आउट करें और पासवर्ड सेव न करें","अगले व्यक्ति के लिए खाते खुले छोड़ें"],mr:["ब्राउझरमध्ये पासवर्ड जतन करा","खात्यांमधून लॉग आउट करा आणि पासवर्ड जतन करू नका","पुढील व्यक्तीसाठी खाती उघडी ठेवा"]},c:1,e:{en:"Logging out and not saving credentials helps protect your account from the next person using the device.",hi:"लॉग आउट करना और पासवर्ड सेव न करना आपके बाद कंप्यूटर इस्तेमाल करने वाले व्यक्ति से खाते की रक्षा करता है।",mr:"लॉग आउट करणे आणि पासवर्ड जतन न करणे यामुळे पुढील वापरकर्त्यापासून खाते सुरक्षित राहते."}}
];

let currentLang = "en";
let questionIndex = 0;
const answersGiven = Array(questions.length).fill(null);
let quizFinished = false;

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}
function format(key, values) {
  return Object.keys(values).reduce((text, name) => text.replace("{" + name + "}", values[name]), t(key));
}
function setLanguage(lang) {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  currentLang = translations[lang] ? lang : "en";
  $("#language").value = currentLang;
  document.documentElement.lang = currentLang;
  const dictionary = translations[currentLang];
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dictionary[key]) el.textContent = dictionary[key];
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dictionary[key]) el.placeholder = dictionary[key];
  });
  $$("[data-i18n-aria-label]").forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    if (dictionary[key]) el.setAttribute("aria-label", dictionary[key]);
  });
  filterServices();
  // Preserve the current quiz state when the language changes.
  // In particular, redraw the result screen instead of returning to question 1.
  if (quizFinished) {
    showResult();
  } else {
    renderQuestion();
  }
  if ($("#guideDialog").open) {
    const key = $("#guideDialog").dataset.guideKey;
    if (key) renderGuide(key);
  }
  updateTtsLabels();
}
$("#language").addEventListener("change", event => setLanguage(event.target.value));

function filterServices() {
  const query = $("#searchInput").value.trim().toLocaleLowerCase();
  let visible = 0;
  $$(".service-card").forEach(card => {
    const text = (card.innerText + " " + card.dataset.search).toLocaleLowerCase();
    const matches = text.includes(query);
    card.classList.toggle("hidden", !matches);
    if (matches) visible++;
  });
  $("#noResults").classList.toggle("hidden", visible !== 0);
  $("#searchStatus").textContent = query ? visible + " " + t("searchFound") : "";
}
$("#searchInput").addEventListener("input", filterServices);

function renderGuide(key) {
  const guide = guideData[key];
  if (!guide) return;
  $("#guideDialog").dataset.guideKey = key;
  const content = $("#guideContent");
  content.replaceChildren();
  const title = document.createElement("h2");
  title.textContent = guide.title[currentLang];
  content.append(title);
  const intro = document.createElement("p");
  intro.textContent = t("guideIntro");
  content.append(intro);
  const list = document.createElement("ol");
  guide.steps[currentLang].forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    list.append(li);
  });
  content.append(list);
  const note = document.createElement("p");
  note.className = "muted";
  note.textContent = guide.note[currentLang] + " " + t("guideNote");
  content.append(note);
  const link = document.createElement("a");
  link.href = guide.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "btn btn-primary";
  link.textContent = t("officialPortal");
  content.append(link);
  createTtsButton(content, "guideListen", () => getReadableText(content));
}
$("[data-guide]").forEach(button => button.addEventListener("click", () => {
  renderGuide(button.dataset.guide);
  const dialog = $("#guideDialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert($("#guideContent").innerText);
}));
$("#closeDialog").addEventListener("click", () => $("#guideDialog").close());
$("#guideDialog").addEventListener("click", event => {
  if (event.target === $("#guideDialog")) $("#guideDialog").close();
});

function renderQuestion() {
  const q = questions[questionIndex];
  quizFinished = false;
  $("#question").textContent = q.q[currentLang];
  $("#questionCount").textContent = format("question", {n:questionIndex + 1,total:questions.length});
  $("#quizFeedback").textContent = "";
  $("#quizScore").textContent = format("score", {score:answersGiven.reduce((sum, value, i) => sum + (value === questions[i].c ? 1 : 0), 0)});
  $("#previousQuestion").textContent = t("previous");
  $("#previousQuestion").disabled = questionIndex === 0;
  $("#nextQuestion").textContent = questionIndex === questions.length - 1 ? t("seeResult") : t("next");
  $("#nextQuestion").disabled = answersGiven[questionIndex] === null;
  $("#nextQuestion").classList.remove("hidden");
  $("#restartQuiz").textContent = t("restart");
  $("#restartQuiz").classList.remove("hidden");
  const container = $("#answers");
  container.replaceChildren();
  q.o[currentLang].forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = option;
    button.disabled = answersGiven[questionIndex] !== null;
    if (answersGiven[questionIndex] !== null && index === q.c) button.classList.add("correct");
    if (answersGiven[questionIndex] === index && index !== q.c) button.classList.add("incorrect");
    button.addEventListener("click", () => selectAnswer(index));
    container.append(button);
  });
  if (answersGiven[questionIndex] !== null) {
    const chosen = answersGiven[questionIndex];
    $("#quizFeedback").textContent = (chosen === q.c ? t("correct") : t("incorrect")) + q.e[currentLang];
  }
}
function selectAnswer(index) {
  if (answersGiven[questionIndex] !== null || quizFinished) return;
  answersGiven[questionIndex] = index;
  renderQuestion();
  $("#nextQuestion").focus();
}
$("#previousQuestion").addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
});
$("#nextQuestion").addEventListener("click", () => {
  if (answersGiven[questionIndex] === null) return;
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    showResult();
  }
});
function showResult() {
  quizFinished = true;
  const score = answersGiven.reduce((sum, value, i) => sum + (value === questions[i].c ? 1 : 0), 0);
  $("#questionCount").textContent = t("completed");
  $("#question").textContent = format("yourScore", {score:score,total:questions.length});
  $("#answers").replaceChildren();
  $("#quizFeedback").textContent = score === questions.length ? t("resultExcellent") + " " + t("excellent") : t("resultGood") + " " + t("good");
  $("#quizScore").textContent = format("score", {score:score});
  $("#nextQuestion").classList.add("hidden");
  $("#previousQuestion").classList.add("hidden");
  $("#restartQuiz").classList.remove("hidden");
}
$("#restartQuiz").addEventListener("click", () => {
  questionIndex = 0;
  answersGiven.fill(null);
  quizFinished = false;
  $("#previousQuestion").classList.remove("hidden");
  renderQuestion();
});

$("#feedbackForm").addEventListener("submit", event => {
  event.preventDefault();
  const rating = $("#rating").value;
  const suggestion = $("#suggestion").value.trim();
  try {
    const previous = JSON.parse(localStorage.getItem("dsFeedback") || "[]");
    previous.push({rating, suggestion, createdAt:new Date().toISOString()});
    localStorage.setItem("dsFeedback", JSON.stringify(previous));
    $("#feedbackStatus").textContent = t("feedbackSaved");
    $("#feedbackForm").reset();
  } catch (error) {
    $("#feedbackStatus").textContent = t("feedbackFailed");
  }
});

// Accessible browser-based text-to-speech. Voice quality and availability depend on the device/browser.
let ttsCurrentText = "";
let ttsCurrentUtterance = null;
let ttsCurrentChunk = 0;
let ttsChunks = [];
let ttsUsingFallback = false;
const ttsLangCodes = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };
function ttsSupported() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}
function updateTtsLabels() {
  const toolbar = $("#ttsToolbar");
  if (!toolbar) return;
  $("#ttsPlay").textContent = t("play");
  $("#ttsPause").textContent = t("pause");
  $("#ttsResume").textContent = t("resume");
  $("#ttsStop").textContent = t("stop");
  $("#ttsStatus").textContent = ttsSupported() ? t("speechReady") : t("speechUnsupported");
  $("[data-tts-button]").forEach(button => {
    button.textContent = t("listen");
    button.setAttribute("aria-label", button.dataset.ttsLabel ? t(button.dataset.ttsLabel) : t("sectionListen"));
    button.title = button.getAttribute("aria-label");
  });
}
function createTtsButton(container, labelKey, textProvider) {
  if (!container || container.querySelector(":scope > .tts-button")) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tts-button";
  button.dataset.ttsButton = "true";
  button.dataset.ttsLabel = labelKey;
  button.textContent = t("listen");
  button.setAttribute("aria-label", t(labelKey));
  button.addEventListener("click", () => speakText(textProvider(), true));
  container.append(button);
}
function getReadableText(element) {
  if (!element) return "";
  const clone = element.cloneNode(true);
  clone.querySelectorAll(".tts-button, .tts-toolbar, button, input, textarea, select, script, style, .hidden, [hidden], [aria-hidden='true']").forEach(node => node.remove());
  return (clone.innerText || clone.textContent || "").replace(/\s+/g, " ").trim();
}
function selectVoice(langCode) {
  const voices = window.speechSynthesis.getVoices();
  const exact = voices.find(voice => voice.lang.toLowerCase() === langCode.toLowerCase());
  if (exact) return {voice: exact, fallback: false};
  const base = langCode.split("-")[0].toLowerCase();
  const sameLanguage = voices.find(voice => voice.lang.toLowerCase().startsWith(base));
  if (sameLanguage) return {voice: sameLanguage, fallback: false};
  const indianEnglish = voices.find(voice => voice.lang.toLowerCase() === "en-in") ||
    voices.find(voice => voice.lang.toLowerCase().startsWith("en"));
  return {voice: indianEnglish || voices[0] || null, fallback: true};
}
function speakText(text, announceFallback = false) {
  if (!ttsSupported()) {
    $("#ttsStatus").textContent = t("speechUnsupported");
    return;
  }
  const cleanText = (text || "").replace(/\s+/g, " ").trim();
  if (!cleanText) {
    $("#ttsStatus").textContent = t("nothingToRead");
    return;
  }
  window.speechSynthesis.cancel();
  ttsCurrentText = cleanText;
  ttsChunks = cleanText.match(/[\s\S]{1,220}(?:\s+|$)/g) || [cleanText];
  ttsCurrentChunk = 0;
  const voiceChoice = selectVoice(ttsLangCodes[currentLang] || "en-IN");
  ttsUsingFallback = voiceChoice.fallback;
  if (announceFallback && ttsUsingFallback) {
    const languageNames = {en:"English (India)",hi:"Hindi",mr:"Marathi"};
    $("#ttsStatus").textContent = format("voiceFallback", {lang: languageNames[currentLang]});
  } else {
    $("#ttsStatus").textContent = t("speechReady");
  }
  speakNextChunk(voiceChoice.voice);
}
function speakNextChunk(voice) {
  if (ttsCurrentChunk >= ttsChunks.length) {
    ttsCurrentUtterance = null;
    $("#ttsStatus").textContent = t("speechReady");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(ttsChunks[ttsCurrentChunk]);
  utterance.lang = ttsLangCodes[currentLang] || "en-IN";
  if (voice) utterance.voice = voice;
  utterance.rate = 0.9;
  utterance.onend = () => {
    if (ttsCurrentUtterance !== utterance) return;
    ttsCurrentChunk++;
    speakNextChunk(voice);
  };
  utterance.onerror = event => {
    if (event.error !== "canceled" && event.error !== "interrupted") {
      $("#ttsStatus").textContent = t("speechError");
    }
  };
  ttsCurrentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}
function stopSpeech(showMessage = true) {
  if (ttsSupported()) window.speechSynthesis.cancel();
  ttsCurrentUtterance = null;
  ttsChunks = [];
  ttsCurrentChunk = 0;
  if (showMessage && $("#ttsStatus")) $("#ttsStatus").textContent = t("speechStopped");
}
function initTts() {
  const toolbar = $("#ttsToolbar");
  if (!toolbar) return;
  if (!ttsSupported()) {
    $("#ttsStatus").textContent = t("speechUnsupported");
    ["ttsPlay","ttsPause","ttsResume","ttsStop"].forEach(id => { $("#"+id).disabled = true; });
  } else {
    $("#ttsPlay").addEventListener("click", () => speakText(getReadableText(document.querySelector("main")), true));
    $("#ttsPause").addEventListener("click", () => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        $("#ttsStatus").textContent = t("speechPaused");
      }
    });
    $("#ttsResume").addEventListener("click", () => {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        $("#ttsStatus").textContent = t("speechResumed");
      }
    });
    $("#ttsStop").addEventListener("click", () => stopSpeech(true));
    window.speechSynthesis.onvoiceschanged = () => {};
  }
  $("main section").forEach(section => {
    if (section.id === "feedback" || section.id === "quiz" || section.id === "safety" || section.id === "home" || section.id === "guides" || section.id === "services") {
      createTtsButton(section, "sectionListen", () => getReadableText(section));
    }
  });
  $(".service-card").forEach(card => createTtsButton(card, "cardListen", () => getReadableText(card)));
  createTtsButton($("#guideContent"), "guideListen", () => getReadableText($("#guideContent")));
  updateTtsLabels();
}

setLanguage("en");
initTts();
renderQuestion();
