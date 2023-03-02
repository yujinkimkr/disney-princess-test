//MBTI별 공주리스트
const princessList = [
    {
        mbti: 'ISTJ',
        name: '뮬란',
        name_en: 'Mulan',
        name_pl: 'Mulan',
        description: "일상적인 활동에 지루함을 느낀다.\n 현실적이면서 책임감이 강하고, \n 모든 일에 철저함이 있으며 사리분별력이 뛰어나다.",
        description_en: "These people feel bored with their daily activities.\n They are down-to-earth and responsible. \nThey are thorough in everything and have good reasoning.",
        description_pl: "Ci ludzie czują się znudzeni codziennymi zajęciami.\n Twardo stąpający po ziemi i odpowiedzialni, \nMyślący o wszystkim i dobrze rozumujący.",
        good_match: ['ESFP', 'ESTP'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "mulan.gif"
    }, 
    {
        mbti: 'ISFJ',
        name: '신데렐라',
        name_en: 'Cinderella',
        name_pl: 'Kopciuszek',
        description: "차분하고 헌신적인 사람들로 인내심이 강하다.\n 또한 다른 사람들의 감정 변화에 주의를 기울이는 경향이 있다.",
        description_en: "These people are calm, dedicated, and patient.\n They also tend to pay attention to other people's mood swings.",
        description_pl: "Ci ludzie są spokojni, oddani i cierpliwi.\n Mają też tendencję do zwracania uwagi na wahania nastroju innych osób.",
        good_match: ['ESFP', 'ESTP'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "cinderella.gif"
    }, 
    {
        mbti: "ISTP",
        name: "메가라",
        name_en: 'Megara',
        name_pl: 'Megara',
        description: "과묵하면서 분석적인 사람들로 상황을 민첩하게 파악하는 것을 잘한다.\n 도구 같은 걸 잘 다루어 손재주가 좋다.",
        description_en: "These people are taciturn and analytical, and are good at quickly grasping the situation.\n They are good at handling things like tools and are dexterous.",
        description_pl: "Ci ludzie są małomówni i analityczni, są dobrzy w szybkiej analizie sytuacji.\n Są zręczni.",
        good_match: ['ESFJ', 'ESTJ'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "megara.webp"
    },
    {
        mbti: "ISFP",
        name: "백설공주",
        name_en: 'Snow White',
        name_pl: 'Śnieżka',
        description: "말수는 적지만 다정하고 온화한 성품을 지니고 있다. \n 삶의 여유를 즐기려 하며 매사에 겸손함을 잃지 않습니다.",
        description_en: "These people are of few words, but have a sweet and gentle disposition. \n I try to enjoy my leisurely life and do not lose my humility in everything.",
        description_pl: "Ci ludzie są małomówni, ale mają słodkie i łagodne usposobienie. \n Starają się cieszyć spokojnym życiem i przede wszystkim, nie tracić pokory.",
        good_match: ['ENFJ', 'ESFJ', 'ESTJ'],
        bad_match: ['INFP','ENFP','INFJ'],
        img_src: "snowwhite.gif"
    },
    {
        mbti: "INTJ",
        name: "벨",
        name_en: 'Belle',
        name_pl: 'Bella',
        description: "일반적으로 사고력이 독창적이며 독립적인 성향이 강하다. \n  비판적인 분석력이 탁월하며 내적 신념이 강하다.",
        description_en: "You are generally creative and independent. \n She has excellent critical analysis and strong inner convictions.",
        description_pl: "Na ogół są kreatywni i niezależni. \n Mają doskonałą analizę krytyczną i silne wewnętrzne przekonania.",
        good_match: ['ENFP', 'ENTP'],
        bad_match: [],
        img_src: "belle.gif"
    },
    {
        mbti: "INFJ",
        name: "엘사",
        name_en: 'Elsa',
        name_pl: 'Elsa',
        description: "통찰력과 직관력이 뛰어나며 인내심이 강하다. \n 그들은 공동체 이익을 중요하게 생각한다. ",
        description_en: "You have great insight, intuition, and perseverance. \n They value community interests.",
        description_pl: "Mają wielką umiejętność dostrzeżenia i zrozumienia znaczenia ludzi oraz sytuacji, intuicję i wytrwałość. \n Cenią interesy społeczności.",
        good_match: ['ENFP', 'ENTP'],
        bad_match: ['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        img_src: "elsa.gif"
    },
    {
        mbti: "INTP",
        name: "자스민",
        name_en: 'Jasmine',
        name_pl: 'Dżasmina',
        description: "이들은 조용하면서 과묵한 경향이 있다.\n 문제를 논리적, 분석적으로 해결하는 능력이 있다.",
        description_en: "They tend to be quiet and reticent.\n They have the ability to solve problems logically and analytically.",
        description_pl: "Zwykle są to osby ciche i powściągliwe.\n Mają zdolność logicznego i analitycznego rozwiązywania problemów.",
        good_match: ['ENTJ', 'ESTJ'],
        bad_match: [],
        img_src: "jasmine.gif"
    },
    {
        mbti: "INFP",
        name: "오로라",
        name_en: 'Aurora',
        name_pl: 'Aurora',
        description: "성실하며, 이해심이 많은 개방적이다. \n 표현을 잘 하지는 않으나 내적 신념이 강하다.",
        description_en: "You are sincere, understanding and open. \nI don't express myself well, but I have a strong inner conviction.",
        description_pl: "Są to osoby szczere, wyrozumiałe i otwarte. \nNie wyrażają się dobrze, ale mają silne wewnętrzne przekonania.",
        good_match: ['ENFJ','ENTJ'],
        bad_match: ['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        img_src: "aurora.gif"
    },
    {
        mbti: "ESTJ",
        name: "티아나",
        name_en: 'Tiana',
        name_pl: 'Tiana',
        description: "구체적이며, 현실적이고, 사실적인 경향이 있다.\n 일을 할 때는 조직화해서 처리해 나가는 성향을 가지고 있으며 지도력이 뛰어나다.",
        description_en: "You tend to be specific, down-to-earth, and factual.\n You have a tendency to organize and manage things and have excellent leadership skills.",
        description_pl: "Mają tendencję do bycia konkretnymi i rzeczowymi.\n Mają tendencję do organizowania i zarządzania sprawami oraz mają doskonałe umiejętności przywódcze.",
        good_match: ['ISFP', 'ISTP'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "tiana.gif"
    },
    {
        mbti: "ESFJ",
        name: "안나",
        name_en: "Anna",
        name_pl: "Anna",
        description: "따뜻한 마음을 가지고 있으며 이야기하는 것에 호의적으로 생각한다.\n 또한 타인에 대한 관심과 동정심이 많으며 친절하다. ",
        description_en: "You have a warm heart and are friendly to talk to.\nYou are also caring, compassionate, and kind to others.",
        description_pl: "Mają ciepłe serce i łatwo się z nimi rozmawia.\nSą także troskliwi, współczujący i mili dla innych.",
        good_match: ['ISFP', 'ISTP'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "anna.gif"
    },
    {
        mbti: "ESTP",
        name: "메리다",
        name_en: "Merida",
        name_pl: "Merida",
        description: "느긋한 성격으로 관용적이며 타협에 능하다.\n 그렇기 때문에 현실적인 문제를 해결하는 능력이 풍부하다.",
        description_en: "You have a laid-back personality, are tolerant, and are good at negotiating.\n That's why you have a lot of ability to solve realistic problems.",
        description_pl: "Są wyluzowani, tolerancyjni i dobrzy w kompromisach.\n Dlatego mają dużą zdolność rozwiązywania realistycznych problemów.",
        good_match: ['ISFJ', 'ISTJ'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "merida.gif"
    },
    {
        mbti: "ESFP",
        name: "에리얼",
        name_en: "Ariel",
        name_pl: "Ariel",
        description: "사교적이면서 활동적이다.\n 또한 수용적이며, 낙천적이고 친절하다.",
        description_en: "You are sociable and active.\n Also accommodating, optimistic and friendly.",
        description_pl: "Są to osoby towarzyskie i aktywne.\n Również gościnne, optymistyczne i przyjazne.",
        good_match: ['ISFJ', 'ISTJ'],
        bad_match: ['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        img_src: "arial.gif"
    },
    {
        mbti: "ENTJ",
        name: "키다",
        name_en: "Kida",
        name_pl: "Kida",
        description: "준비를 철저하게 하며, 활동적이면서 솔직한 사람들이다.\n 단호한 결단력 및 통솔력을 갖춘 것이 특징이다.",
        description_en: "You are well-prepared, active, and outspoken.\n You are characterized by firm determination and leadership.",
        description_pl: "Są to osoby dobrze przygotowane, aktywne i szczere.\n Cechuje ich  stanowcza determinacja i przywództwo.",
        good_match: [ 'INFP', 'INTP'],
        bad_match: [],
        img_src: "kida.gif"
    },
    {
        mbti: "ENFJ",
        name: "포카혼타스",
        name_en: "Pokahontas",
        name_pl: "Pocahontas",
        description: "사교적이며, 타인들의 의견을 존중하는 것을 중요시 한다.\n 그러나 본인에게 하는 비판에 대해서는 예민하게 반응하는 경향이 많다.",
        description_en: "You are outgoing and value the opinions of others.\n However, you tend to react sensitively to criticism directed against you.",
        description_pl: "Są towarzyscy i cenią sobie opinie innych.\n Jednak zwykle reagują wrażliwie na krytykę skierowaną przeciwko nim",
        good_match: ['INFP', 'ISFP'],
        bad_match: ['ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        img_src: "pokahontas.gif"
    },
    {
        mbti: "ENTP",
        name: "에스메랄다",
        name_en: "Esmeralda",
        name_pl: "Esmeralda",
        description: "독창적이며 민첩한 사람들이 많다.\n 특히 넓은 안목을 가지고 있으며 여러 가지 방면과 재능과 관심을 지니고 있습니다.",
        description_en: "These types tend to be inventive and agile.\n You have a particularly broad eye and have many directions, talents and interests.",
        description_pl: "Te typy są zwykle pomysłowe i zwinne.\n Mają szczególnie szerokie otwarte oko i mają wiele talentów i zainteresowań.",
        good_match: ['INFJ', 'INTJ'],
        bad_match: [],
        img_src: "esmeralda.gif"
    },
    {
        mbti: "ENFP",
        name: "라푼젤",
        name_en: "Rapunzel",
        name_pl: "Roszpunka",
        description: "따뜻하며, 정열적이고 활기가 있는 경향이 많다.\n 이를 뒷받침 하는 재능이 충만하며 상상력과 감수성이 풍부하다.",
        description_en: "You tend to be warm, passionate, and energetic.\n You are full of talent to support this, and you are full of imagination and sensitivity.",
        description_pl: "Zwykle są ciepli, namiętni i energiczni.\n Mają talent, by to wspierać, są pełni wyobraźni i wrażliwości",
        good_match: ['INFJ', 'INTJ'],
        bad_match: ['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
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
        option1: "아싸! 나가기 귀찮았는데~ 편하게 쉬어야지!",
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
        option1: "멜로디와 가사가 다 마음에 들어야 \n 진정한 띵곡이지~!",
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
        question: "W dni powszednie byłem w pracy,",
        option1: "Koniecznie muszę gdzieś wyjść w weekend!",
        option2: "Mój plan to odpoczynek cały weekend w moim pokoju!"
    },
    {
        question: "Kiedy zaczynałem swoją pasję",
        option1: "Szukałem czegoś co mogę wygodnie zrobić sam",
        option2: "W klubie można poznać nowych ludzi!"
    },
    {
        question: "Kiedy miałam się spotkać z przyjaciółką, ale nagle spotkanie zostało odwołane",
        option1: "O tak! Szykowanie się do wyjścia było udręką... Co teraz powinienem zrobić~~? ekscytujący!",
        option2: "Ah.. Jestem gotowy.... Czy ktoś ma czas?"
    },
    {
        question: "Z czym kojarzy Ci się jabłko?",
        option1: "Królewna Śnieżka, Newton",
        option2: "czerwony, owocowy, pyszny"
    },
    {
        question: "O czym myślisz przed wejściem do samolotu?",
        option1: "Czy powinienem usiąść na miejscu przy wyjściu awaryjnym? Czy nie spadnie?",
        option2: "Jaki jest posiłek podczas lotu? jaki film powinnam obejrzeć?"
    },
    {
        question: "Jakie znaczenie ma słuchanie muzyki?",
        option1: "To prawdziwe arcydzieło, jeśli podoba ci się melodia i tekst!",
        option2: "Muzyka to melodia i uczucia!"
    },
    {
        question: "Dostałem telefon od znajomego, który powiedział: „Miałem wypadek samochodowy”",
        option1: "Ups! Czy jesteś bardzo ranny? czy wszystko w porządku?",
        option2: "Miałeś poważny wypadek? Czy masz ubezpieczenie?"
    },
    {
        question: "Przyjaciel: „Poszedłem do salonu piękności, ponieważ miałem depresję”",
        option1: "Dlaczego masz depresję? Co się stało?",
        option2: "Jakie włosy zrobiłaś? Trwałą? Wyślij mi zdjęcie!"
    },
    {
        question: "Kiedy przyjaciel spóźnia się na spotkanie",
        option1: "Przeprosiny wystarczą",
        option2: "Jeśli ma powód, jest ok"
    },
    {
        question: "Kiedy podróżuję, ja ….",
        option1: "wszystko jest zaplanowane",
        option2: "robię wszystko na spontana"
    },
    {
        question: "Podczas gotowania...",
        option1: "Wodę należy dokładnie odmierzyć miarką o pojemności 500 ml!",
        option2: "Jedzenie smakuje lepiej, jeżeli gotujemy na oko~!"
    },
    {
        question: "Spojrzałem na messenger'a",
        option1: "Gdy otrzymam wiadomość, od razu ją czytam",
        option2: "Zwykle czytam wszystko później, więc jest bardzo dużo nieprzeczytanych wiadomości"
    },
];
    

const questionListEn = [
    {
        question: "I was at work during the week, so",
        option1: "I should go outside on the weekends!",
        option2: "I should stay home on weekends!"
    },
    {
        question: "When I started my hobby",
        option1: "Something I can do alone",
        option2: "Meeting new people in the club!"
    },
    {
        question: "When I was supposed to meet up with a friend, but it's suddenly canceled",
        option1: "Oh yea! I was lazy to go out... \n Now what should I do? exciting!",
        option2: "Ah.. I've prepared everything... \n but does anyone have time??"
    },
    {
        question: "What do you think of when you apologize?",
        option1: "Snow White, Apple, Newton",
        option2: "red, fruit, delicious"
    },
    {
        question: "What do you think about before getting on the plane?",
        option1: "Should I sit in the emergency exit seat? \n Won't the plane crash??",
        option2: "What's the in-flight meal? \n what movie do you want to see?"
    },
    {
        question: "What is important when listening to a song?",
        option1: "True masterpieces have good lyrics and melody",
        option2: "Music is a melody and a feel!"
    },
    {
        question: "I got a call from a friend saying 'I've been in a car accident'",
        option1: "Oops! Are you hurt a lot? are you okay?",
        option2: "Did you have a bad accident? \n how about car, Whose fault is it"
    },
    {
        question: "Friend: 'I went to the beauty salon \n because I was depressed'",
        option1: "why are you depressed What happened?",
        option2: "did you? what hair did you do? \n dying? Perm? show me!"
    },
    {
        question: "When a friend is late for an appointment",
        option1: "An apology relieves the mind",
        option2: "If the friend has a reason, \nI'll be relieved"
    },
    {
        question: "When I travel,",
        option1: "I made a plan, how about doing like this?!",
        option2: "I like everything!"
    },
    {
        question: "when i cook,",
        option1: "It should be accurately measured \n with a 500ml measuring cup!",
        option2: "I'm just going to eyeball it, \n doesn't have to be perfect~"
    },
    {
        question: "I am looking at my messenger...",
        option1: "No message! When you receive a message, \n I read it right away",
        option2: "I tend to read it later, \n  so there are a lot of messages"
    },
];

window.onload = function() {
    let language = "kr";
    let lan = document.documentElement.getAttribute("lang");

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
        lan = document.documentElement.getAttribute("lang");

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
                if(lan == 'ko') {
                    questionEl.innerText = questionListKr[no].question;
                    option[0].innerText = questionListKr[no].option1;
                    option[1].innerText = questionListKr[no].option2;
                    no++;
                } else if(lan == 'en') {
                    questionEl.innerText = questionListEn[no].question;
                    option[0].innerText = questionListEn[no].option1;
                    option[1].innerText = questionListEn[no].option2;
                    no++;
                } else if(lan == 'pl') {
                    questionEl.innerText = questionListPl[no].question;
                    option[0].innerText = questionListPl[no].option1;
                    option[1].innerText = questionListPl[no].option2;
                    no++;
                }
                
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
        // 결과 화면 block 처리
        document.querySelector(".result").style.display = "block";
        // 문제 화면 숨김 처리 
        document.getElementsByClassName("container")[1].style.display = "none";
       // 결과 화면에 출력하기
        const charName = document.querySelector(".char_name");
        const charDescription = document.querySelector(".result_description");
        
        for(let i = 0; i < princessList.length; i++) {
            if(result == princessList[i].mbti) {
                if(lan == 'ko') {
                    charName.innerText = princessList[i].name;
                    charDescription.innerText = princessList[i].description; 
                } else if(lan == 'en') {
                    charName.innerText = princessList[i].name_en;
                    charDescription.innerText = princessList[i].description_en; 
                    
                    // 버튼 언어 변경
                    document.querySelector(".btn--share").value = "Share";
                    document.querySelector(".btn--reset").value = "Redo";
                } else if(lan == 'pl') {
                    charName.innerText = princessList[i].name_pl;
                    charDescription.innerText = princessList[i].description_pl; 
                    
                    // 버튼 언어 변경
                    document.querySelector(".btn--share").value = "Udział";
                    document.querySelector(".btn--reset").value = "Przywróć";
                }
                // 이미지 삽입
                document.getElementById("princess_img").src = `./img/princess/${princessList[i].img_src}`;

                // 좋은 매칭 - 나쁜 매칭 찾기
                for(let j = 0; j < princessList.length; j++) {
                    if(princessList[j].mbti == princessList[i].good_match[0]) {
                        switch(lan) {
                            case "pl": 
                            document.querySelector(".good-princess").innerText = princessList[j].name_pl;
                            document.querySelector(".good-title").innerText = 'dobry z';
                            document.querySelector(".bad-title").innerText = 'źle z';
                            break;
                            case "en":
                                document.querySelector(".good-princess").innerText = princessList[j].name_en;
                                document.querySelector(".good-title").innerText = 'good match';
                                document.querySelector(".bad-title").innerText = 'bad match';
                                break;
                            default : 
                                document.querySelector(".good-princess").innerText = princessList[j].name;
                        }
                    } 
                    
                    if(princessList[j].mbti == princessList[i].bad_match[0]) {
                        switch(lan) {
                            case "pl": 
                            document.querySelector(".bad-princess").innerText = princessList[j].name_pl;
                            break;
                            case "en":
                                document.querySelector(".bad-princess").innerText = princessList[j].name_en;
                                break;
                            default : 
                                document.querySelector(".bad-princess").innerText = princessList[j].name;
                        }
                    }
                }
                break;
            }
        }

        if(document.querySelector(".bad-princess").innerText == "") 
            document.querySelector(".bad-princess").innerText = "-";
            
        // 테스트 다시 하기
        document.querySelector(".btn--reset").addEventListener("click", function() {
            location.reload();
        });
    }

    // 언어 변경
    const langOpt = document.querySelectorAll(".language__option");
    for(let i = 0; i < langOpt.length; i++){
        langOpt[i].addEventListener("click", function(){
                changeLanguage(langOpt[i]);
        });
    }

    function changeLanguage(langOpt) {
        switch(langOpt.innerText){
            // 깜빡이기 - 구현 필요

            case "English":
                document.documentElement.setAttribute("lang", "en");
                changeFonts('en');
                //초기 페이지 화면 영어로 변경 
                document.querySelector(".container>.title>div:first-child").innerText = "Disney Princess Test";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "Which princess am I most similar to?";
                document.querySelector(".btn--start").value = "Start test";
                break;
            case "Polski": 
                document.documentElement.setAttribute("lang", "pl");
                // 폴란드어 폰트 변경 
                changeFonts('pl');
                document.querySelector(".container>.title>div:first-child").innerText = "Test Księżniczki Disneya";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "Jaką jestem księżniczką?";
                document.querySelector(".btn--start").value = "rozpocząć testowanie";
                break; 
            case "한국어":
                document.documentElement.setAttribute("lang", "ko");
                changeFonts('ko');
                document.querySelector(".container>.title>div:first-child").innerText = "디즈니 공주 유형 테스트";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "나는 어떤 공주와 제일 비슷할까?";
                document.querySelector(".btn--start").value = "테스트 시작하기";
                break;
        }

    }

}

function changeFonts(lang) {
    if(lang == 'pl') {
        document.body.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        document.querySelector("input[type=button]").style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        // 버튼 폰트를 따로 변경 
        document.querySelector('.btn--reset').style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        document.querySelector('.btn--share').style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    } else {
        // 다시 기존 폰트로 변경
        document.body.style.fontFamily = "Jua, sans-serif";
        document.querySelector("input[type=button]").style.fontFamily = "Jua, sans-serif";
        // 버튼 폰트를 따로 변경 
        document.querySelector('.btn--reset').style.fontFamily = "Jua, sans-serif";
        document.querySelector('.btn--share').style.fontFamily = "Jua, sans-serif";
    }
}