//MBTI별 공주리스트
const princessList = [
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
        description: "구체적이며, 현실적이고, 사실적인 경향이다.\n 일을 할 때는 조직화해서 처리해 나가는 성향을 가지고 있으며 지도력이 뛰어나다.",
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

window.onload = function() {
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
        }, 900);
    });

    function showQuestion() {
        document.querySelectorAll(".container")[1].style.display = "block";
    }

    // 버튼 클릭시 다음 문제로 이동 (기존 문제 display:none 처리 )
    const inner = document.querySelectorAll(".inner");
    const option = document.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        let n = Math.floor(i/2);
        document.querySelectorAll(".option")[i].addEventListener("click", function() {
            inner[n].style.display = "none";

            if(n != 11) {
                inner[n+1].style.display = "block";
            } else {
                //마지막 문항에서 결과 페이지로 이동
                document.getElementsByClassName("result")[0].style.display = "block";
                document.getElementsByClassName("container")[1].style.display = "none";
            }
            
            increaseStatusBar();
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
            ei = (opt%2==0) ? --ei : ++ei;
        } else if(question <= 6) {
            //N과 S 구별 문제
            ns = (opt%2==0) ? --ns : ++ns;
        } else if(question <= 9) {
            //F와 T 구별 문제
            ft = (opt%2==0) ? --ft : ++ft;
        } else {
            //J와 P 구별 문제
            jp = (opt%2==0) ? --jp : ++jp;
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

       // 결과 화면에 출력하기
        const charName = document.querySelector(".char_name");
        const charDescription = document.querySelector(".result_description");

        for(let i = 0; i < princessList.length; i++) {
            if(result == princessList[i].mbti) {
                charName.innerText = princessList[i].name;
                charDescription.innerText = princessList[i].description; 
                console.log(princessList[i].img_src);
                document.getElementById("princess_img").src = `./img/princess/${princessList[i].img_src}`;
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
            alert("서비스 준비 중입니다.");
        });
    }

}