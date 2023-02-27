//MBTI별 공주리스트
const princessListKr = [
    {
        mbti: 'ISTJ',
        name: '뮬란',
        description: "일상적인 활동에 지루함을 느낀다.\n 현실적이면서 책임감이 강하고, \n 모든 일에 철저함이 있으며 사리분별력이 뛰어나다.",
        good_match: ['ESFP', 'ESTP'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "mulan.gif"
    }, 
    {
        mbti: 'ISFJ',
        name: '신데렐라',
        description: "차분하고 헌신적인 사람들로 인내심이 강하다.\n 또한 다른 사람들의 감정 변화에 주의를 기울이는 경향이 있다.",
        good_match: [],
        bad_match: [],
        img_src: "cinderella.gif"
    }, 
    {
        mbti: "ISTP",
        name: "메가라",
        description: "과묵하면서 분석적인 사람들로 상황을 민첩하게 파악하는 것을 잘한다.\n 도구 같은 걸 잘 다루어 손재주가 좋다.",
        good_match: [],
        bad_match: [],
        img_src: "megara.webp"
    },
    {
        mbti: "ISFP",
        name: "백설공주",
        description: "말수는 적지만 다정하고 온화한 성품을 지니고 있다. \n 삶의 여유를 즐기려 하며 매사에 겸손함을 잃지 않습니다.",
        good_match: [],
        bad_match: [],
        img_src: "snowwhite.gif"
    },
    {
        mbti: "INTJ",
        name: "벨",
        description: "일반적으로 사고력이 독창적이며 독립적인 성향이 강하다. \n  비판적인 분석력이 탁월하며 내적 신념이 강하다.",
        good_match: [],
        bad_match: [],
        img_src: "belle.gif"
    },
    {
        mbti: "INFJ",
        name: "엘사",
        description: "통찰력과 직관력이 뛰어나며 인내심이 강하다. \n 그들은 공동체 이익을 중요하게 생각한다. ",
        good_match: [],
        bad_match: [],
        img_src: "elsa.gif"
    },
    {
        mbti: "INTP",
        name: "자스민",
        description: "이들은 조용하면서 과묵한 경향이 있다.\n 문제를 논리적, 분석적으로 해결하는 능력이 있다.",
        good_match: [],
        bad_match: [],
        img_src: "jasmine.gif"
    },
    {
        mbti: "INFP",
        name: "오로라",
        description: "성실하며, 이해심이 많은 개방적이다. \n 표현을 잘 하지는 않으나 내적 신념이 강하다.",
        good_match: [],
        bad_match: [],
        img_src: "aurora.gif"
    },
    {
        mbti: "ESTJ",
        name: "티아나",
        description: "구체적이며, 현실적이고, 사실적인 경향이 있다.\n 일을 할 때는 조직화해서 처리해 나가는 성향을 가지고 있으며 지도력이 뛰어나다.",
        good_match: [],
        bad_match: [],
        img_src: "tiana.gif"
    },
    {
        mbti: "ESFJ",
        name: "안나",
        description: "따뜻한 마음을 가지고 있으며 이야기하는 것에 호의적으로 생각한다.\n 또한 타인에 대한 관심과 동정심이 많으며 친절하다. ",
        good_match: [],
        bad_match: [],
        img_src: "anna.gif"
    },
    {
        mbti: "ESTP",
        name: "메리다",
        description: " 느긋한 성격으로 관용적이며 타협에 능하다.\n 그렇기 때문에 현실적인 문제를 해결하는 능력이 풍부하다.",
        good_match: [],
        bad_match: [],
        img_src: "merida.gif"
    },
    {
        mbti: "ESFP",
        name: "에리얼",
        description: "사교적이면서 활동적이다.\n 또한 수용적이며, 낙천적이고 친절하다.",
        good_match: [],
        bad_match: [],
        img_src: "arial.gif"
    },
    {
        mbti: "ENTJ",
        name: "키다",
        description: "준비를 철저하게 하며, 활동적이면서 솔직한 사람들이다.\n 단호한 결단력 및 통솔력을 갖춘 것이 특징이다.",
        good_match: [],
        bad_match: [],
        img_src: "kida.gif"
    },
    {
        mbti: "ENFJ",
        name: "포카혼타스",
        description: "사교적이며, 타인들의 의견을 존중하는 것을 중요시 한다.\n 그러나 본인에게 하는 비판에 대해서는 예민하게 반응하는 경향이 많다.",
        good_match: [],
        bad_match: [],
        img_src: "pokahontas.gif"
    },
    {
        mbti: "ENTP",
        name: "에스메랄다",
        description: "독창적이며 민첩한 사람들이 많다.\n 특히 넓은 안목을 가지고 있으며 여러 가지 방면과 재능과 관심을 지니고 있습니다.",
        good_match: [],
        bad_match: [],
        img_src: "esmeralda.gif"
    },
    {
        mbti: "ENFP",
        name: "라푼젤",
        description: "따뜻하며, 정열적이고 활기가 있는 경향이 많다.\n 이를 뒷받침 하는 재능이 충만하며 상상력과 감수성이 풍부하다.",
        good_match: [],
        bad_match: [],
        img_src: "rapunzel.gif"
    },
];

const questionListKr = [
    {
        question: "주중에는 회사였으니,",
        option1: "주말에는 밖에 나가야 한다!",
        option2: "주말에는 집에 있어야 한다!"
    },
    {
        question: "취미 생활을 시작할 때 나는",
        option1: "혼자 편안하게 할 수 있는 걸 찾아 보자!",
        option2: "동호회에서 새로운 사람들 만날 수 있겠다!"
    },
    {
        question: "친구랑 만나기로 했는데 갑자기 약속이 취소되었을 때",
        option1: "아싸! 나가기 귀찮았는데... 이제 뭐할까~~? 신난다!",
        option2: "앗.. 준비 다 했는데.... 누구 시간되는 사람 없나?"
    },
    {
        question: "사과 하면 뭐가 생각나?",
        option1: "백설공주, 애플 , 뉴턴",
        option2: "빨갛다, 과일, 맛있다"
    },
    {
        question: "비행기 타기 전에 무슨 생각해?",
        option1: "비상구 자리에 앉을까? 추락하지는 않겠지..?",
        option2: "기내식 뭐 나오지? 무슨 영화볼까?"
    },
    {
        question: "노래들을 때 뭐가 중요해",
        option1: "멜로디와 가사가 다 마음에 들어야 진정한 띵곡이지~!",
        option2: "음악은 멜로디와 Feel이쥐!"
    },
    {
        question: "친구한테 연락이 왔다 '나 교통사고 났어'",
        option1: "어이구! 많이 다쳤어? 괜찮아?",
        option2: "사고 심하게 났어? 차는 어때? 누구 과실이야?"
    },
    {
        question: "친구: '나 우울해서 미용실 갔다 왔어'",
        option1: "왜 우울해? 무슨 일 있었어?",
        option2: "그래? 무슨 머리 했어? 염색? 파마? 보여줘!"
    },
    {
        question: "친구가 약속에 늦었을 때",
        option1: "사과를 하면 마음이 풀린다",
        option2: "이유가 있으면 마음이 풀린다"
    },
    {
        question: "여행갈 때 나는,",
        option1: "내가 계획을 짜 봤는데 이렇게 하는 거 어때?!",
        option2: "난 다 좋아!"
    },
    {
        question: "요리할 때 나는,",
        option1: "물은 정확하게 500ml 계량 컵으로 재야지!",
        option2: "음식은 손 맛이지~ 대강 눈으로 보고 넣어~"
    },
    {
        question: "카톡 창을 봤더니...",
        option1: "메세지 오면 바로바로 읽어서 깔끔",
        option2: "나중에 읽는 편이라~ 메세지가 잔뜩"
    },
];

const questionListPl = [
    {
        question: "Bo w tygodniu byłem w pracy,",
        option1: "Musimy wychodzić w weekendy",
        option2: "Powinieneś zostać w domu w weekendy!"
    },
    {
        question: "Kiedy zaczynałem swoją pasję",
        option1: "Znajdźmy coś, co możemy robić wygodnie sami!",
        option2: "W klubie możesz poznać nowych ludzi!"
    },
    {
        question: "Kiedy miałam się spotkać z przyjaciółką, ale nagle spotkanie zostało odwołane",
        option1: "O tak! Wychodzenie z domu było irytujące... Co teraz powinienem zrobić~~? ekscytujący!",
        option2: "Ah.. Jestem gotowy.... Czy ktoś ma czas?"
    },
    {
        question: "O czym myślisz, kiedy przepraszasz?",
        option1: "Królewna Śnieżka, Jabłko, Newton",
        option2: "czerwony, owocowy, pyszny"
    },
    {
        question: "O czym myślisz przed wejściem do samolotu?",
        option1: "Czy powinienem usiąść na miejscu przy wyjściu awaryjnym? Czy nie spadnie?",
        option2: "Jaki jest posiłek podczas lotu? jaki film chcesz obejrzeć?"
    },
    {
        question: "Jakie znaczenie ma słuchanie muzyki?",
        option1: "To prawdziwe arcydzieło, jeśli podoba ci się melodia i tekst!",
        option2: "Muzyka to melodia i uczucie szczura!"
    },
    {
        question: "Dostałem telefon od znajomego, który powiedział: „Miałem wypadek samochodowy”",
        option1: "Ups! Czy jesteś bardzo ranny? czy wszystko w porządku?",
        option2: "Miałeś poważny wypadek? co powiesz na herbatę kto zawinił"
    },
    {
        question: "Przyjaciel: „Poszedłem do salonu piękności, ponieważ miałem depresję”",
        option1: "dlaczego jesteś w depresji Co się stało?",
        option2: "Dobra? jakie włosy zrobiłaś? barwiący? Trwała ondulacja? Pokaż mi!"
    },
    {
        question: "Kiedy przyjaciel spóźnia się na spotkanie",
        option1: "Przeprosiny uspokajają umysł",
        option2: "Jeśli masz powód, twoje serce odetchnie z ulgą"
    },
    {
        question: "Kiedy podróżuję, I",
        option1: "Zrobiłem plan, co ty na to?",
        option2: "Lubię wszystko!"
    },
    {
        question: "Podczas gotowania I",
        option1: "Wodę należy dokładnie odmierzyć miarką o pojemności 500 ml!",
        option2: "Jedzenie smakuje się ręcznie ~ Z grubsza zobacz to na własne oczy i włóż ~"
    },
    {
        question: "Spojrzałem na okno rozmowy kakao...",
        option1: "Gdy otrzymasz wiadomość, przeczytaj ją od razu",
        option2: "Zwykle czytam to później, więc jest dużo wiadomości"
    },
];

window.onload = function() {
    let language = "kr";
    const containerEls = document.getElementsByClassName("container");

    // 시작하기 버튼 클릭 시, 메인 페이지 사라지는 효과
    document.querySelector(".btn--start").addEventListener("click", function() {
        containerEls[0].style.transition = ".5s";
        containerEls[0].style.opacity = "0";
        containerEls[0].style.transform = "translateX(-1200px)";
        
        setTimeout(function(){
            containerEls[0].style.display = "none";
            // 문제가 담긴 contianer 보이게 하기 
            showQuestion();
        }, 850);
    });

    function showQuestion() {
        document.querySelectorAll(".container")[1].style.display = "block";
        let lan = document.documentElement.getAttribute("lang");

        if(lan == 'ko') {
            questionEl.innerText = questionListKr[0].question;
            option[0].innerText = questionListKr[0].option1;
            option[1].innerText = questionListKr[0].option2;
        } else if(lan == 'en') {
            questionEl.innerText = questionListEn[0].question;
            option[0].innerText = questionListEn[0].option1;
            option[1].innerText = questionListEn[0].option2;
        } else if(lan == 'pl') {
            questionEl.innerText = questionListPl[0].question;
            option[0].innerText = questionListPl[0].option1;
            option[1].innerText = questionListPl[0].option2;
        }

        questionNo.innerText = `Q1.`;
        //한국어 버전
    }

    // 버튼 클릭시 다음 문제로 이동 (기존 문제 display:none 처리)

    // 버튼 클릭시 텍스트 변경
    const inner = document.querySelectorAll(".inner");
    const option = document.querySelectorAll(".option");
    let no = 1; 
    const questionEl = document.querySelector(".question>div:nth-child(2)");
    const questionNo = document.querySelector(".question>div:first-child");
    for(let i = 0; i < option.length; i++){
        document.querySelectorAll(".option")[i].addEventListener("click", function() {
            //다음 문제로 넘기기
            if(no != 12) {
                questionNo.innerText = `Q${no+1}.`;
                questionEl.innerText = questionListKr[no].question;
                option[0].innerText = questionListKr[no].option1;
                option[1].innerText = questionListKr[no].option2;
                no++;
                
            } else {
                //결과 페이지 출력
                // document.querySelector(".result").style.display = "block";
            }
            
            increaseStatusBar();
            // 누를 때마다 점수 계산
            calcScore(i);
        });
    }
    
    let tmp = 1;
    // 상태바 게이지 상승 효과 
    function increaseStatusBar(){
        document.getElementsByClassName("bar__statement")[0].style.width = `${100/12*tmp++}%`;
    }

    let question = 1;
    let ei = 0;
    let ns = 0;
    let ft = 0;
    let jp = 0;

    function calcScore(opt){
        if(question <= 3) {
            //E와 I 구별 문제
            ei = (opt==0) ? --ei : ++ei;
        } else if(question <= 6) {
            //N과 S 구별 문제
            ns = (opt==0) ? --ns : ++ns;
        } else if(question <= 9) {
            //F와 T 구별 문제
            ft = (opt==0) ? --ft : ++ft;
        } else {
            //J와 P 구별 문제
            jp = (opt==0) ? --jp : ++jp;
        }
        question++;

        // 마지막 문제에서 결과 값 도출
        if(question == 13)
            getResult(ei, ns, ft, jp);
    }

    function getResult(ei, ns, ft, jp){
        let result = "";

        if(ei > 0){
            result += "E"
        } else {
            result += "I"
        }
        
        if(ns > 0) {
            result += "S"
        } else {
            result += "N"
        }
        
        if(ft > 0) {
            result += "T"
        } else {
            result += "F"
        }
        
        if(jp > 0) {
            result += "P"
        } else {
            result += "J"
        }
        showResult(result);
    }

    function showResult(result) {
        // 결과화면 block 처리
        document.querySelector(".result").style.display = "block";
        // 문제 화면 숨김 처리 
        document.getElementsByClassName("container")[1].style.display = "none";
       // 결과 화면에 출력하기
        const charName = document.querySelector(".char_name");
        const charDescription = document.querySelector(".result_description");

        for(let i = 0; i < princessListKr.length; i++) {
            if(result == princessListKr[i].mbti) {
                charName.innerText = princessListKr[i].name;
                // console.log(princessListKr[i].name);
                charDescription.innerText = princessListKr[i].description; 
                document.getElementById("princess_img").src = `./img/princess/${princessListKr[i].img_src}`;
                break;
            }
        }
            
        document.querySelector(".btn--reset").addEventListener("click", function() {
            location.reload();
        });
    }

    // 다른 언어 준비 중
    const langOpt = document.querySelectorAll(".language__option");
    for(let i = 0; i < langOpt.length; i++){
        langOpt[i].addEventListener("click", function(){
                changeLanguage(langOpt[i]);
        });
    }

    function changeLanguage(langOpt) {
        switch(langOpt.innerText){
            // 깜빡이기

            case "English":
                document.documentElement.setAttribute("lang", "en");
                //초기 페이지 화면 영어로 변경 
                document.querySelector(".container>.title>div:first-child").innerText = "Disney Princess Test";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "Which princess am I most similar to?";
                document.querySelector(".btn--start").value = "Start test";
                break;
            case "Polski": 
                // 폴란드어 폰트 변경....
                document.documentElement.setAttribute("lang", "pl");
                document.querySelector(".container>.title>div:first-child").innerText = "Test Księżniczki Disneya";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "Jaką jestem księżniczką?";
                document.querySelector(".btn--start").value = "rozpocząć testowanie";
                break; 
            case "한국어":
                document.documentElement.setAttribute("lang", "ko");
                document.querySelector(".container>.title>div:first-child").innerText = "디즈니 공주 테스트";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "나는 어떤 공주일까?";
                document.querySelector(".btn--start").value = "테스트 시작하기";
                break;
        }

    }

}