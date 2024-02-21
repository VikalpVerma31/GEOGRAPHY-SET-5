const questions = [
    {
        question:"भू-संतुलन शब्द का प्रयोग सर्वप्रथम किसने किया?",
        answers: [
            { text: "हटन", correct: false},
            { text: "एयरी", correct: false},
            { text: "प्रार", correct: false},
            { text: "डटन", correct: true},
        ] 
    },

    {
        question:"आइसोस्टेसी शब्द किस शब्द से लिया गया है?",
        answers: [
            { text: "आइसोइस्टेसियस", correct: true},
            { text: "आइसोपोटेसियस", correct: false},
            { text: "आइलोसियस", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"भू-संतुलन शब्द का प्रयोग सर्वप्रथम अमेरिका के प्रसिद्ध भूगर्भवेता डटन ने कब किया?",
        answers: [
            { text: "1889", correct: true},
            { text: "1890", correct: false},
            { text: "1895", correct: false},
            { text: "1907", correct: false},
        ] 
    },

    {
        question:"डटन के अनुसार ऊंचे उठे भागों का घनत्व कम होगा तथा नीचे धसे भागों का घनत्व अधिक होगा। तभी सब का भार एक रेखा के सहारे बराबर होगा, इस आधार को क्या कहा गया है?",
        answers: [
            { text: "समतोल तल", correct: false},
            { text: "सम दबाव तल", correct: false},
            { text: "(a) और (b) दोनों", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"पृथ्वी के धरातल पर जहां कहीं भी संतुलन होता है, वहां पर बराबर धरातलीय क्षेत्र के नीचे पदार्थ का द्रव्यमान होता है-",
        answers: [
            { text: "बराबर", correct: true},
            { text: "अधिक", correct: false},
            { text: "कम", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"हिमालय एक खोखला भाग है जिसके अंदर चट्टान न होकर बुलबुले हैं, इस कारण से पर्वत का भार क घनत्व............. होगा, जिसके कारण माप में अंतर आ गय",
        answers: [
            { text: "अधिक", correct: false},
            { text: "बराबर", correct: false},
            { text: "कम", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"भू-संतुलन की संकल्पना से संबंधित हैं-",
        answers: [
            { text: "सर जॉर्ज एयरी", correct: false},
            { text: "डटन", correct: false},
            { text: "हीस्कैनन", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"'पर्वतों की जड़े होती हैं' यह कथन है-",
        answers: [
            { text: "हटन", correct: false},
            { text: "एयरी", correct: true},
            { text: "प्राट", correct: false},
            { text: "डटन", correct: false},
        ] 
    },

    {
        question:"विभिन्न स्तंभों का घनत्व बराबर होता है, तथा उनक गहराई में परिवर्तन होता है। यह कथन है-",
        answers: [
            { text: "प्राट", correct: false},
            { text: "जॉली", correct: false},
            { text: "हेफोर्ड", correct: false},
            { text: "एयरी", correct: true},
        ] 
    },

    {
        question:"भू-संतुलन सिद्धांत आधारित है-",
        answers: [
            { text: "गुरुत्वाकर्षण सिद्धांत", correct: false},
            { text: "कैप्पलर की गति का सिद्धांत", correct: false},
            { text: "तैरने का सिद्धांत", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"किस बल के कारण सियाल, सीमा पर तैर रहा है?",
        answers: [
            { text: "उत्प्लावन बल", correct: true},
            { text: "गुरूत्वाकर्षण बल", correct: false},
            { text: "कोरियोलिस बल", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन एक सरजार्ज एयरी के संतुलन की संकल्पना से संबंधित नहीं है?",
        answers: [
            { text: "तैराव का नियम", correct: false},
            { text: "जड़ निर्माण", correct: false},
            { text: "समतोल तल", correct: true},
            { text: "विभिन्न गहराई वाले स्तंभों का समान घनत्व", correct: false},
        ] 
    },

    {
        question:"एयरी के भू-संतुलन सिद्धांत के सबसे बड़े आलोचक थे-",
        answers: [
            { text: "डटन", correct: false},
            { text: "जॉजी", correct: false},
            { text: "प्राट", correct: true},
            { text: "हेफोर्ड और बॉबी", correct: false},
        ] 
    },

    {
        question:"'ऊंचाई' और 'घनत्व' में व्युत्क्रम संबंध होता है। यह विचार है-",
        answers: [
            { text: "एयरी", correct: true},
            { text: "डटन", correct: false},
            { text: "हेफोर्ड और बॉबी", correct: false},
            { text: "जॉजी", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की भूपर्पटी के सतही उच्चावच के रूप में स्थित पर्वतों, पठारों और समुद्रों के उनके भार के अनुसार भूपर्पटी के नीचे स्थित पिघली चट्टानों के ऊपर संतुलन बनाए रखने की अवस्था क्या कहलाती है?",
        answers: [
            { text: "अर्पदन", correct: false},
            { text: "भूसंतुलन", correct: true},
            { text: "अपक्षय", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"अपक्षय की दर निम्न में से कहाँ अधिक है?",
        answers: [
            { text: "पूर्वी घाट", correct: false},
            { text: "पश्चिमी घाट", correct: false},
            { text: "निचला मैदान", correct: false},
            { text: "थार मरूस्थल", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन रासायनिक अपक्षय की प्रक्रिया नहीं है?",
        answers: [
            { text: "काबोनेशन", correct: false},
            { text: "अपपर्णन", correct: true},
            { text: "ऑक्सीकरण", correct: false},
            { text: "विलयन", correct: false},
        ] 
    },

    {
        question:"अपने ही स्थान पर शैलों की विघटन और अपघटन की प्रक्रिया कहलाती है?",
        answers: [
            { text: "अपरदन", correct: false},
            { text: "अपक्षय", correct: true},
            { text: "भूस्खलन", correct: false},
            { text: "साधारण भूस्खलन", correct: false},
        ] 
    },

    {
        question:"किन क्षेत्रों में ऊष्मीय दबाव अपक्षय होता है?",
        answers: [
            { text: "नदियाँ", correct: false},
            { text: "पठार", correct: false},
            { text: "पर्वत", correct: false},
            { text: "मरूस्थल", correct: true},
        ] 
    },

    {
        question:"कणिकायम विघटन .......... का एक उदाहरण है?",
        answers: [
            { text: "यात्रिक अपक्षय", correct: true},
            { text: "रसायनिक अपक्षय", correct: false},
            { text: "पादप अपक्षय", correct: false},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"शीत प्रदेशों में निम्नलिखित में से ऋतु अपक्षय का कौन-सा प्रकार प्रायः क्रियाशील नहीं रहता है?",
        answers: [
            { text: "भौतिक", correct: false},
            { text: "जैविक", correct: false},
            { text: "रासायनिक", correct: false},
            { text: "उपरोक्त सभी ", correct: true},
        ] 
    },

    {
        question:"सिलिकेट और कार्बोनेट खनिजों को प्रभावित करने वाली रासायनों से होने वाली अपक्षय प्रक्रिया क्या कहलाती है?",
        answers: [
            { text: "जलीय विश्लेषण", correct: true},
            { text: "विद्युत अपघटन", correct: false},
            { text: "अपपर्णन", correct: false},
            { text: "लवणीय क्रिस्टल वृद्धि", correct: false},
        ] 
    },

    {
        question:"दरारों में उगी हुई पौधों की जड़े, जो चारो ओर की शैल पर दबाव डालती हैं, अंत में जड़ें बढ़कर शैलों को तोड़ देती हैं। यह किसका उदाहरण है?",
        answers: [
            { text: "जलयोजन", correct: false},
            { text: "कार्बोनेशन", correct: false},
            { text: "रासायनिक अपक्षय", correct: false},
            { text: "भौतिकीय अपक्षय", correct: true},
        ] 
    },

    {
        question:"भौतिक अपक्षय में मिट्टी और शैलों का वायुमण्डलीय अवस्थाओं, जैसे जी, दबाव, बर्फ और ताप के प्रत्यक्ष सम्पर्क में आने के कारण अवखण्डन होना शामिल है।",
        answers: [
            { text: "यांत्रिक अपक्षय", correct: true},
            { text: "विसर्जन", correct: false},
            { text: "कार्बोनेशन", correct: false},
            { text: "कृत्रिम अपक्षय ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में कौन रासायनिक अपक्षय नहीं है-",
        answers: [
            { text: "ऑक्सीकरण", correct: false},
            { text: "जलीयकरण", correct: false},
            { text: "हिमीकरण", correct: true},
            { text: "कार्बनीकरण", correct: false},
        ] 
    },

    {
        question:"अपशल्कन गुंबद का निर्माण यांत्रिक अपक्षय की किस प्रक्रिया के कारण होता है?",
        answers: [
            { text: "हिमकरण एवं तुषार वेजिंग", correct: false},
            { text: "तापक्रम में परिवर्तन एवं विस्तरण", correct: true},
            { text: "लवण अपक्षय", correct: false},
            { text: "भारविहीनता एवं विस्तरण", correct: false},
        ] 
    },

    {
        question:"अपदलन नामक अपक्षय का कारण है-",
        answers: [
            { text: "हिमानी", correct: false},
            { text: "तापीय उतार-चढ़ाव", correct: true},
            { text: "प्रचलित पवन", correct: false},
            { text: "बहता जल", correct: false},
        ] 
    },

    {
        question:"अपक्षय की वह प्रक्रिया जो खनिजों में जल की वृद्धि से होती है......... ....... कहलाती है?",
        answers: [
            { text: "ऑक्सीकरण", correct: false},
            { text: "कार्बनीकरण", correct: false},
            { text: "जलीय संलयन", correct: false},
            { text: "जलयोजन", correct:true},
        ] 
    },

    {
        question:"किस शैल पर अपदलन अपक्षय विकसित होता है?",
        answers: [
            { text: "बलुआ पत्थर ", correct: false},
            { text: "डोलोमाइट", correct: false},
            { text: "ग्रेनाइट", correct: true},
            { text: "बेसाल्ट", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन एक यांत्रिक अपक्षय की प्रक्रिया नहीं है?",
        answers: [
            { text: "कैम्बरिंग", correct: false},
            { text: "एक्सफोलिएशन", correct: false},
            { text: "फ्लेकिंग", correct: false},
            { text: "चेलेशन", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में यांत्रिक अपक्षय की तुलना में रासायनिक अपक्षय ज्यादा प्रभावपूर्ण होता है:",
        answers: [
            { text: "अर्द्ध-शुष्क क्षेत्र", correct: false},
            { text: "शुष्क क्षेत्र", correct: false},
            { text: "तटीय क्षेत्र", correct: false},
            { text: "शीत शीतोष्ण क्षेत्र", correct: true},
        ] 
    },

    {
        question:"रासायनिक अपक्षय की दृष्टि से निम्न में से किन चट्टानों का वियोजन अधिक होता है?",
        answers: [
            { text: "बेसिक आग्नेय", correct: true},
            { text: "एसिड आग्नेय", correct: false},
            { text: "उपरोक्त दोनों ", correct: false},
            { text: "इनमें से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"ऑक्सीडेशन की क्रिया से निम्नलिखित किस प्रकार की चट्टानें उपघटित होती है?",
        answers: [
            { text: "लौहयुक्त", correct: true},
            { text: "सिलिकायुक्त", correct: false},
            { text: "चूनायुक्त", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"रासायनिक अपक्षय की कौन-सी प्रक्रिया लोहे पर जंग लगने का कारण है?",
        answers: [
            { text: "कार्बोनेटीकरण", correct: false},
            { text: "ऑक्सीकरण", correct: true},
            { text: "जलयोजन", correct: false},
            { text: "सिलिका पृथक्करण", correct: false},
        ] 
    },

    {
        question:"अपक्षय की प्रक्रिया क्या बताते हैं?",
        answers: [
            { text: "घाटियों का पार्वीय विस्तार", correct: false},
            { text: "महाद्वीपीय शेल्फ का फैलाव", correct: false},
            { text: "शैल सामग्री का खंडित होना", correct: true},
            { text: "शैल कर्तित प्लेटफॉर्म का निर्माण", correct: false},
        ] 
    },

    {
        question:"रासायनिक अपक्षय की प्रक्रिया 'जलयोजन' के संबंध में कौन-सा कथन सही है?",
        answers: [
            { text: "जलयोजन, शैलों के विघटन में सहायक होता है।", correct: false},
            { text: "यह प्रक्रिया (जलयोजन) भौतिक अपक्षय में सहायता प्रदान करती है।", correct: false},
            { text: "यह प्रक्रिया बहुत ही कम समय के लिए होती है।", correct: false},
            { text: "(a) और (b) दोनों", correct: true},
        ] 
    },

    {
        question:"निम्न में से कौनप-सा वक्तव्य 'लेपीज' शब्द को परिभाषित करता है?",
        answers: [
            { text: "छोटे से मध्यम आकार के उथले गर्त", correct: false},
            { text: "ऐसे स्थल रूप जिनके ऊपरी मुख वृत्ताकार तथा नीचे से कीप के आकार के होते हैं।", correct: false},
            { text: "ऐसे स्थल जो धरातल से जल टपकने के लिए बनते हैं।", correct: false},
            { text: "अनियमित धरातल जिनके तीखे कटक व खांच हों", correct: true},
        ] 
    },

    {
        question:"U-आकार की घाटी कहां पाई जाती है?",
        answers: [
            { text: "हिमानी क्षेत्र में", correct: true},
            { text: "परिपक्व नदी में", correct: false},
            { text: "चूना पत्थर क्षेत्र में", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"कास्टै प्रदेशों में डोलाइन की ऊपरी सतह के आने एवं ऊपरी भाग के खुले रह जाने से निर्मित को क्या कहा जाता है?",
        answers: [
            { text: "युवाला", correct: false},
            { text: "कार्स्ट खिड़की", correct: true},
            { text: "पोलिये", correct: false},
            { text: "जमा", correct: false},
        ] 
    },

    {
        question:"ड्रमलिन क्या है?",
        answers: [
            { text: "एक संकरी घाटी ", correct: false},
            { text: "अंडाकार पहाड़ी", correct: true},
            { text: "एक पिरामिडीय चोटी", correct: false},
            { text: "कार्स्ट खिड़की", correct: false},
        ] 
    },

    {
        question:"घोल रंध्र का निर्माण निम्न में से किस प्रक्रम द्वारा होता है",
        answers: [
            { text: "बहता हुआ जल", correct: false},
            { text: "पवन", correct: false},
            { text: "भूमिगत जल", correct: true},
            { text: "हिमानी", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा बाह्य कारक लोएस निक्षेप के विस्तार के लिए उत्तरदायी होता है।",
        answers: [
            { text: "हिमानी", correct: false},
            { text: "बहते जल", correct: false},
            { text: "पवन", correct: true},
            { text: "समुद्री तरंगे", correct: false},
        ] 
    },

    {
        question:"पिघलते हुए हिमनद के द्वारा मिश्रित रूप में भारी व महीन पदार्थों का निक्षेप कहलाता है-",
        answers: [
            { text: "हिमोढ़", correct: true},
            { text: "एस्कर", correct: false},
            { text: "ड्रमलिन", correct: false},
            { text: "सर्क", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किस हिमनद स्थलरूप का विकास हिमनद दरारों में भारी चट्टानी मलबे के भरने व उसके बर्फ के नीचे रहने से होता है?",
        answers: [
            { text: "एस्कर", correct: false},
            { text: "हिमानी धौत मैदान", correct: false},
            { text: "ड्रमलिन", correct: true},
            { text: "हॉर्न", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित स्थलाकृतियों में से कौन-सा एक कार्स्ट स्थलाकृतियों में सम्मिलित नहीं है?",
        answers: [
            { text: "यूवाला", correct: false},
            { text: "अंधी घाटी", correct: false},
            { text: "सीफ-टिब्बा", correct: true},
            { text: "धंसती निवेशिका", correct: false},
        ] 
    },

    {
        question:"कार्स्ट मैदान का उदाहरण है-",
        answers: [
            { text: "यूगोस्लाविया का मैदान ", correct: true},
            { text: "पूर्वी इंग्लैंड का मैदान", correct: false},
            { text: "डेन्यूब का मैदान", correct: false},
            { text: "फिनलैंड का मैदान", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कार्स्ट स्थलाकृति 'हम्स' को मिलान कर सकते हैं-",
        answers: [
            { text: "कुली झील से", correct: false},
            { text: "इन्सेलबर्ग से", correct: true},
            { text: "बरखान से", correct: false},
            { text: "हमादा से", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सी कार्स्ट स्थलाकृति का निक्षेपात्मक रूप नहीं है?",
        answers: [
            { text: "आश्चुताश्म", correct: false},
            { text: "निश्चुताश्म", correct: false},
            { text: "कन्दरा व गुफाएं", correct: false},
            { text: "लैपीज", correct: true},
        ] 
    },

    {
        question:"स्टैलेक्टाइट एक स्थलाकृति है-",
        answers: [
            { text: "हिमानी भू-दृश्य की ", correct: false},
            { text: "नदीय भू-दृश्य की", correct: false},
            { text: "कार्स्ट भू-दृश्य की", correct: true},
            { text: "वायूढ़ भू-दृश्य की", correct: false},
        ] 
    },

    {
        question:"झारखण्ड का सबसे ऊंचा जल-प्रपात हैं",
        answers: [
            { text: "सदनी-घाघ जल-प्रपात", correct: false},
            { text: "बूढ़ा घाघ जल-प्रपात", correct:true},
            { text: "दशमू जल-प्रपात", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 