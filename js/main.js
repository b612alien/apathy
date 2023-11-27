

//postit random

document.addEventListener("DOMContentLoaded", function () {
    placeQuestionsRandomly("politic-question");
    placeQuestionsRandomly("nonpolitic-question");
});

let submitCnt = 0;
let politicAns = 0;
let nonPoliticAns = 0;

function placeQuestionsRandomly(className) {
    var questions = document.getElementsByClassName(className);

    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];

        // Set random position
        var randomX = Math.floor(Math.random() * (window.innerWidth - question.offsetWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight - question.offsetHeight));

        question.style.position = "absolute";
        question.style.left = randomX + "px";
        question.style.top = randomY + "px";
        makeDraggable(question);

        // Set random background image
        var randomImageIndex = Math.floor(Math.random() * 4 + 1); // Assuming you have three images
        question.style.backgroundImage = "url('./img/postit" + randomImageIndex + ".png')";
    }
}

function makeDraggable(element) {
    // Display the question ID in the console
    console.log("Question ID:", element);
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    element.addEventListener("mousedown", function (event) {
        isDragging = true;

        offset.x = event.clientX - element.getBoundingClientRect().left;
        offset.y = event.clientY - element.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function (event) {
        if (isDragging) {
            var x = event.clientX - offset.x;
            var y = event.clientY - offset.y;

            element.style.left = x + "px";
            element.style.top = y + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
}


document.addEventListener("DOMContentLoaded", function () {
    // ...
    var usedIndices2 = [];

    // Function to generate random questions and options
    function generateRandomQuestion() {
        // Sample questions and options (replace with your own)
        var questions = [
            {
                question: "20대 대통령 선거 후보가 아닌 사람은?",
                correctAnswer: "홍준표",
                type: "multiple",
                options: ["윤석열", "이재명", "홍준표", "심상정"],
            },
            {
                question: "윤석열 대통령의 후보 시절 대선 공약이 아닌 것은?",
                correctAnswer: "개성공단 재개",
                type: "multiple",
                options: ["병사 월급 200만원 지급", "공수처 개편과 개혁", "양도소득세 감세", "개성공단 재개"],
            },
            {
                question: "이재명이 대통령 선거 공약으로 제시한 사항은?",
                correctAnswer: "예산 300조 증액 및 복지 정책 강화",
                type: "multiple",
                options: ["예산 300조 증액 및 복지 정책 강화", "미사일 방어체계 강화", "코로나19 대응 및 백신 접종 확대", "병사 월급 200만원 지급"],
            },
            {
                question: "심상정의 정당은 무엇인가?",
                correctAnswer: "정의당",
                type: "multiple",
                options: ["더불어민주당", "자유한국당", "정의당", "미래통합당"],
            },
            {
                question: "2022년 대한민국 지방선거에서 서울시장에 당선된 후보는?",
                correctAnswer: "오세훈",
                type: "multiple",
                options: ["박영선", "오세훈", "안철수", "유승민"],
            },
            {
                question: "대한민국의 19대 대통령은?",
                type: "short",
                correctAnswer: "문재인",
            },
            {
                question: "2022년 대한민국 국회의원 선거에서 국회의원 선거구 수는 몇 개인가?",
                correctAnswer: "300개",
                type: "multiple",
                options: ["200개", "250개", "300개", "350개"],
            },
            {
                question: "대한민국에서 대통령은 최대 몇 번 연임할 수 있는가? 'n번'으로 대답하시오.",
                type: "short",
                correctAnswer: "1번",
            },
            {
                question: "윤석열 대통령이 취임한 연도는? 'n년'으로 대답하시오.",
                type: "short",
                correctAnswer: "2022년",
            },
            {
                question: "2022년 대한민국에서 가장 의석수가 많은 정당은?",
                type: "short",
                correctAnswer: "더불어민주당",
            },
            {
                question: "대한민국의 국회의사당의 위치는?",
                type: "short",
                correctAnswer: "여의도",
            },
            {
                question: "대한민국에서 대통령 선거는 몇 년마다 열리는가?",
                correctAnswer: "5년",
                type: "multiple",
                options: ["2년", "4년", "5년", "6년"],
            },
            {
                question: "좌파 정치 사상은 어떤 가치를 중시하며 다음 중 어떤 정책을 중요하게 여길 것으로 알려져 있을까?",
                correctAnswer: "사회적 평등",
                type: "multiple",
                options: ["사회적 평등", "자유 시장 경제", "중앙집중화", "국가안보 강화"],
            },
            {
                question: "2021년 대한민국 국회의원 선거의 결과는 어떻게 나왔나?",
                correctAnswer: "더불어민주당 승리",
                type: "multiple",
                options: ["더불어민주당 승리", "자유한국당 승리", "무소속 선거 승리", "공동정부 승리"],
            },
            {
                question: "2022년 대한민국 대통령 취임식은 어디서 열렸나?",
                correctAnswer: "국회 의사당",
                type: "multiple",
                options: ["청와대", "국회 의사당", "국립극장", "올림픽 경기장"],
            },
            {
                question: "2022년 대한민국 지방선거에서 경기도지사에 당선된 후보는 누구인가?",
                correctAnswer: "김동연",
                type: "multiple",
                options: ["윤석열", "오세훈", "김동연", "이재명"],
            },
            {
                question: "대한민국에서 대통령은 어떤 선거 방식으로 선출되는가?",
                correctAnswer: "직접 선거",
                type: "multiple",
                options: ["간접 선거", "직접 선거", "임명", "상속"],
            },
            {
                question: "2022년 이태원 사건으로 대한민국 정치에서 논란이 된 주제는 무엇인가?",
                correctAnswer: "사이버범죄 대응법 개정",
                type: "multiple",
                options: ["사이버범죄 대응법 개정", "양성평등 정책", "국방력 강화", "장애인 복지 정책"],
            },
            {
                question: "2022년 대한민국 대통령 선거의 20대 투표율은 어느 정도였나?",
                correctAnswer: "71%",
                type: "multiple",
                options: ["25%", "50%", "71%", "92%"],
            },
            {
                question: "2021년에 '국민의 힘'으로 정식 명칭을 변경한 이전의 대한민국 보수 정당 이름은 무엇이었나?",
                type: "short",
                correctAnswer: "미래통합당",
            },
            {
                question: "더불어민주당은 2015년에 '더불어민주당'으로 명칭을 변경하기 전에 어떤 이름의 정당으로 활동하였나?",
                type: "short",  
                correctAnswer: "새정치민주연합",
            },
            {
                question: "보수주의는 어떤 정치적 가치를 중시하는 사상으로 정부 역할에 대해 어떤 입장을 가지고 있는가?",
                correctAnswer: "전통적 가치 강조 및 작은 정부 주장",
                type: "multiple",
                options: ["국제 협력 강조 및 중앙 집중화", "자본주의 경제 지지 및 대중 주권 강조", "전통적 가치 강조 및 작은 정부 주장", "사회 평등 추구 및 공공부문 강화"],
            },
            {
                question: "진보주의는 어떤 정치적 가치를 중시하는 사상으로 사회 정의와 어떤 목표를 추구하는가?",
                correctAnswer: "사회적 평등과 복지국가 구축",
                type: "multiple",
                options: ["국가안보 강화와 민주주의 강조", "자본주의 경제 확대와 경제 성장", "사회적 평등과 복지국가 구축", "환경 보호와 지속가능한 개발"],
            },
            {
                question: "엘리트주의는 어떤 사상으로, 정치적 결정과 권력은 누구에 의해 행해져야 한다고 주장하는가?",
                correctAnswer: "고학력이나 경험이 풍부한 엘리트에 의해",
                type: "multiple",
                options: ["모든 시민에 의해 직접적으로", "고학력이나 경험이 풍부한 엘리트에 의해", "종교적 지도자에 의해", "군사 엘리트에 의해"],
            },
            {
                question: "민주주의는 어떤 원칙을 중시하는 정치사상으로 어떤 방식으로 정부를 운영하는 것을 지지하는가?",
                correctAnswer: "다수결과 국민에 의한 지배",
                type: "multiple",
                options: ["독재와 중앙집권", "군사 정권과 체제 안정성", "다수결과 국민에 의한 지배", "전통적인 군주국가"]
            },
            {
                question: "공산주의는 어떤 사상으로, 어떤 목표를 추구하며, 어떤 경제 시스템을 지지하는가?",
                correctAnswer: "사회주의를 통한 공유 경제와 사적 재산의 철폐",
                type: "multiple",
                options: ["자본주의 시장 경제와 경제 경쟁", "사회주의를 통한 공유 경제와 사적 재산의 철폐", "독재와 중앙집권", "자유 시장 경제와 소유권"]
            },
            {
                question: "자본주의는 어떤 경제 체제를 주장하며, 어떤 가치를 중시하는 정치사상인가?",
                correctAnswer: "자유 시장 경제와 민간 소유권",
                type: "multiple",
                options: ["자유 시장 경제와 민간 소유권", "사회주의와 공유 경제", "국가 경제 계획과 중앙집중권", "환경 보호와 지속가능한 개발"]
            },
            {
                question: "사회주의는 어떤 경제 체제를 주장하며, 어떤 가치를 중시하는 정치사상인가?",
                correctAnswer: "재분배와 사회적 평등",
                type: "multiple",
                options: ["자유 시장 경제와 민간 소유권", "재분배와 사회적 평등", "국가 경제 계획과 중앙집중권", "환경 보호와 지속가능한 개발"]
            },
            {
                question: "우파 정치 사상은 어떤 가치를 중시하며 다음 중 어떤 정책을 중요하게 여길 것으로 알려져 있을까?",
                correctAnswer: "자유 시장 경제",
                type: "multiple",
                options: ["자유 시장 경제", "사회적 평등", "환경 보호", "청년 복지"],
            },
            {
                question: "좌파와 우파의 주요 차이점은 무엇인가?",
                correctAnswer: "정부 역할",
                type: "multiple",
                options: ["경제 체제", "정부 역할", "외교 정책", "군사력 강화"],
            },
            {
                question: "좌파와 우파의 역사적 기원은 어디에 해당하는가?",
                correctAnswer: "프랑스 혁명",
                type: "multiple",
                options: ["미국 독립 선언", "고대 그리스 철학", "중세 기독교", "프랑스 혁명"],
            },
            // Add more questions as needed
        ];
        

        // Choose a random question
        var randomIndex;
        // Keep generating a random index until you find one that hasn't been used
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (usedIndices2.includes(randomIndex));

        // Add the selected index to the usedIndices array
        usedIndices2.push(randomIndex);
        return questions[randomIndex];
    }

    //NonPolitical
    var usedIndices = [];
    function generateRandomQuestionNon() {
        // Sample questions and options (replace with your own)
        var questions = [
            {
                question: "다음 중 4세대 여자 아이돌이 아닌 것은?",
                correctAnswer: "블랙핑크",
                type: "multiple",
                options: ["아이브", "르세라핌", "에스파", "블랙핑크"],
            },
            {
                question: "2022년 밈이 아닌 것은?",
                correctAnswer: "I am 신뢰에요",
                type: "multiple",
                options: ["소울리스좌", "부럽지가 않어", "I am 신뢰에요", "중꺽마(중요한 건 꺾이지 않는 마음)"],
            },
            {
                question: "샘 스미스의 Unholy를 따라하여 유명해진 개그맨, '킹 스미스'라고도 불리는 이 개그맨의 이름은?",
                correctAnswer: "황제성",
                type: "short",
            },
            {
                question: "2023년 y2k를 이어 유행하는 패션 트렌드는? OOOO룩",
                correctAnswer: "올드머니",
                type: "short",
            },
            {
                question: "리그 오브 레전드 2023 월드 챔피언십(이하 롤드컵) 우승팀은?",
                correctAnswer: "T1",
                type: "multiple",
                options: ["담원", "KT", "Weibo", "T1"],
            },
            {
                question: "대한민국의 19대 대통령은?",
                type: "short",
                correctAnswer: "문재인",
            },
            {
                question: "홍대로 가려면 어디로 가야해요?",
                correctAnswer: "뉴진스의 하입보이요",
                type: "multiple",
                options: ["걸스데이의 썸띵이요", "아이유 분홍신이요", "뉴진스의 하입보이요", "르세라핌의 fearless요"],
            },
            {
                question: "2023년 틱톡에서 유행한 옆으로 미끄러지듯이 걷는 춤 이름은?",
                type: "short",
                correctAnswer: "슬릭백",
            },
            {
                question: "르세라핌 김채원이 공연 중 한 가사 실수 중 일부를 맞추시오. OOO~ 너 내 도도독",
                type: "short",
                correctAnswer: "피어나",
            },
            {
                question: "다음 대사의 뒷부분을 맞추시오. 시켜줘, 금잔디 OOOOO",
                type: "short",
                correctAnswer: "명예소방관",
            },
            {
                question: "리그 오브 레전드 프로게이머 케리아가 롤드컵 4강 우승 후 외친 유명한 대사는? OOO 나와!",
                type: "short",
                correctAnswer: "뉴진스",
            },
            {
                question: "다음 중 구인구직 어플이 아닌 것은?",
                correctAnswer: "요기요",
                type: "multiple",
                options: ["잡코리아", "사람인", "요기요", "잡플래닛"],
            },
            {
                question: "다음 중 패션 오픈마켓이 아닌 것은?",
                correctAnswer: "오아시스",
                type: "multiple",
                options: ["무신사", "지그재그", "에이블리", "오아시스"],
            },
            {
                question: "다음 중 OTT 플랫폼이 아닌 것은?",
                correctAnswer: "왓챠피디아",
                type: "multiple",
                options: ["왓챠피디아", "넷플릭스", "쿠팡플레이", "네이버 시리즈온"],
            },
            {
                question: "상철, 영숙, 옥순 등의 출연자 이름을 쓰는 방송 프로그램 이름은?",
                correctAnswer: "나는 솔로",
                type: "multiple",
                options: ["연애의 맛", "나는 솔로", "연애의 참견", "하트시그널"],
            },
            {
                question: "2023년 기준 가장 구독자수가 많은 지자체 유튜브는?",
                correctAnswer: "충주시",
                type: "multiple",
                options: ["충주시", "강남구", "보령시", "고양시"],
            },
            {
                question: "2023년도 폭발적인 유행인 음식은? 힌트: OOO",
                correctAnswer: "탕후루",
                type: "short",
            },
            
        ];

        // Choose a random question
        var randomIndex;
        // Keep generating a random index until you find one that hasn't been used
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (usedIndices.includes(randomIndex));

        // Add the selected index to the usedIndices array
        usedIndices.push(randomIndex);
        return questions[randomIndex];
    }

    // Function to set up a political question
    function setUpPoliticalQuestion(questionContainer) {
        var questionData = generateRandomQuestion();

        // Set up question text
        var questionElement = questionContainer.querySelector("#question");
        questionElement.textContent = questionData.question;

        // Set up answer input based on question type
        var answerInput = questionContainer.querySelector("#user-answer");
        if (questionData.type === "multiple") {
            // Set up multiple-choice options
            var inputs = questionContainer.querySelectorAll(".inputs input");
            var labels = questionContainer.querySelectorAll(".inputs label");

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = questionData.options[i];
                labels[i].textContent = questionData.options[i];
            }

            answerInput.style.display = "none";
        } else {
            // Set up short answer input
            answerInput.style.display = "block";

            var optionsContainer = questionContainer.querySelector(".inputs");
            var sub = questionContainer.querySelector("#multiple > .sub");
            optionsContainer.style.display = "none";
            sub.style.display = "none";
        }

        // Add event listener to the submit button ///////111111
        var submitButton = questionContainer.querySelector("#submit");
        submitButton.addEventListener("click", function () {

            // Check the answer
            var userAnswer = questionData.type === "multiple"
                ? getSelectedOption(inputs)
                : answerInput.value;

            if (userAnswer === questionData.correctAnswer) {
                console.log("Correct answer!");
                politicAns ++;
            } else {
                console.log("Wrong answer. The correct answer is: " + questionData.correctAnswer);
            }
            // 여기에서 페이지 이동 처리
            if(submitCnt >= 13){
                localStorage.setItem("totalTime", totalTime);
                localStorage.setItem("politicAns", politicAns);
                localStorage.setItem("nonPoliticAns", nonPoliticAns);
                localStorage.setItem("politicalTime", politicalTime);
                localStorage.setItem("nonPoliticalTime", nonPoliticalTime);
                window.location.href = './result.html';
            }
            else{submitCnt++;}

            // Apply fade-out effect to the question container
            fadeOut(questionContainer);

            console.log(submitCnt);

            });

            // Function to apply fade-out effect
            function fadeOut(element) {
                var opacity = 1;
                var fadeOutInterval = setInterval(function () {
                    if (opacity > 0) {
                        opacity -= 0.01;
                        element.style.opacity = opacity;
                    } else {
                        clearInterval(fadeOutInterval);
                        element.style.display = "none";
                        // Optionally reset opacity for future display
                        element.style.opacity = 1;
                    }
                }, 5); // Adjust the interval for a smoother or faster fade-out
                }


    }

    function setUpNonPoliticalQuestion(questionContainer) {
        var questionData = generateRandomQuestionNon();

        // Set up question text
        var questionElement = questionContainer.querySelector("#question");
        questionElement.textContent = questionData.question;

        // Set up answer input based on question type
        var answerInput = questionContainer.querySelector("#user-answer");
        if (questionData.type === "multiple") {
            // Set up multiple-choice options
            var inputs = questionContainer.querySelectorAll(".inputs input");
            var labels = questionContainer.querySelectorAll(".inputs label");

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = questionData.options[i];
                labels[i].textContent = questionData.options[i];
            }

            answerInput.style.display = "none";
        } else {
            // Set up short answer input
            answerInput.style.display = "block";

            var optionsContainer = questionContainer.querySelector(".inputs");
            var sub = questionContainer.querySelector("#multiple > .sub");
            optionsContainer.style.display = "none";
            sub.style.display = "none";
        }

        // Add event listener to the submit button //////22222
        var submitButton = questionContainer.querySelector("#submit");
        submitButton.addEventListener("click", function () {
        // Check the answer
        var userAnswer = questionData.type === "multiple"
            ? getSelectedOption(inputs)
            : answerInput.value;

        if (userAnswer === questionData.correctAnswer) {
            console.log("Correct answer!");
            nonPoliticAns++;
        } else {
            console.log("Wrong answer. The correct answer is: " + questionData.correctAnswer);
        }
        // 여기에서 페이지 이동 처리
        if(submitCnt >= 13){
            localStorage.setItem("totalTime", totalTime);
            localStorage.setItem("politicAns", politicAns);
            localStorage.setItem("nonPoliticAns", nonPoliticAns);
            localStorage.setItem("politicalTime", politicalTime);
            localStorage.setItem("nonPoliticalTime", nonPoliticalTime);
            window.location.href = './result.html';
        }
        else{submitCnt++;}

        // Apply fade-out effect to the question container
        fadeOut(questionContainer);

        console.log(submitCnt);

});

// Function to apply fade-out effect
function fadeOut(element) {
    var opacity = 1;
    var fadeOutInterval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.01;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeOutInterval);
            element.style.display = "none";
            // Optionally reset opacity for future display
            element.style.opacity = 1;
        }
    }, 5); // Adjust the interval for a smoother or faster fade-out
}

    }

    // Function to get the selected option in a multiple-choice question
    function getSelectedOption(inputs) {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                return inputs[i].value;
            }
        }
        return null; // No option selected
    }

    // Set up political questions
    var politicalQuestions = document.querySelectorAll(".politic-question");
    politicalQuestions.forEach(setUpPoliticalQuestion);

    // Set up non-political questions
    var nonPoliticalQuestions = document.querySelectorAll(".nonpolitic-question");
    nonPoliticalQuestions.forEach(setUpNonPoliticalQuestion);
});

function toggleBlur(questionId) {
    const quesBox = document.getElementById(questionId).querySelector('.ques-box');
    const startButton = document.getElementById(questionId).querySelector('button');
    const submitButton = document.getElementById(questionId).querySelector('#submit');
    
    quesBox.classList.toggle('blur');
    startButton.classList.add('hidden');
    submitButton.classList.remove('hidden');
    submitButton.removeAttribute('disabled');
}


//time

  let startTime;
  let elapsedTime = 0;
  let isRunning = false;
  let timerInterval;
  let totalTime = 0;
  let politicalTime = 0;
  let nonPoliticalTime = 0;

  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('submit');
  const resetBtn = document.getElementById('resetBtn');

  function start(questionId) {
    reset();
    if (!isRunning) {
      isRunning = true;
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTime, 10);

    //   startBtn.disabled = true;
    //   pauseBtn.disabled = false;
    //   resetBtn.disabled = false;
    }
  }

  function pause(questionId) {
    if (isRunning) {
      isRunning = false;
      clearInterval(timerInterval);

      if(questionId=='ques-1'||questionId=='ques-2'||questionId=='ques-3'||questionId=='ques-4'||questionId=='ques-5'||questionId=='ques-6'||questionId=='ques-7'){
        politicalTime += elapsedTime;
        totalTime+=elapsedTime;
      }
      else if(questionId=='ques-8'||questionId=='ques-9'||questionId=='ques-10'||questionId=='ques-11'||questionId=='ques-12'||questionId=='ques-13'||questionId=='ques-14'){
        nonPoliticalTime += elapsedTime;
        totalTime+=elapsedTime;
      }

    //   startBtn.disabled = false;
    //   pauseBtn.disabled = true;
    //   resetBtn.disabled = false;

      displayTime();
    }
  }

  function reset() {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;

    // startBtn.disabled = false;
    // pauseBtn.disabled = true;
    // resetBtn.disabled = true;

    displayTime();
  }

  function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime();
  }

  function displayTime() {
    const milliseconds = elapsedTime % 1000;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    

    console.clear();
    console.log(`${hours}:${pad(minutes)}:${pad(seconds)}.${padMilliseconds(milliseconds)}`);
    console.log("total:" + totalTime);
    console.log("politic:" + politicalTime);
    console.log("nonpolitic:" + nonPoliticalTime);
  }

  function pad(number) {
    return number < 10 ? `0${number}` : number;
  }

  function padMilliseconds(milliseconds) {
    return milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
  }








// result
let timer;
const sentences = [
    "투표하셨나요?",
    "투표해야지",
    "민주주의를 위해!",
    "자신의 권리를 지킵시다.",
    "민주주의가 고마운 줄 모르네",
    "소중한 한표를 행사해주세요",
    "투표도 안 하면 민주주의 국가에 살 자격이 없지!",
    "여러분 모두 투표하세요",
    "어머, 투표를 안 했다고?",
    "사전투표를 하세요",
    "투표날에 공휴일이라고 여행을 가?",
    "연예인 누구도 투표했대",
    "#투표",
    // Add more sentences as needed
];

function handleButtonClick() {
    var totalTime = localStorage.getItem("totalTime");
    var politicAns = localStorage.getItem("politicAns");
    var nonPoliticalTime = localStorage.getItem("nonPoliticalTime");
    var politicalTime = localStorage.getItem("politicalTime");
    var nonPoliticAns = localStorage.getItem("nonPoliticAns");
    var enteredName = document.getElementById("nameInput").value;
    localStorage.setItem("enteredName", enteredName);
    document.getElementById("name").textContent = enteredName;
    document.getElementById("total").textContent = display(totalTime);
    console.log(politicAns);
    console.log(totalTime);
    document.getElementById("pol-time").textContent = display(politicalTime);
    document.getElementById("non-pol-time").textContent = display(nonPoliticalTime);
    document.getElementById("pol-ans").textContent = politicAns + "개";
    document.getElementById("non-pol-ans").textContent = nonPoliticAns + "개";

    if(politicalTime < nonPoliticalTime * 1.5 && politicAns > 3){
        document.getElementById("rank").textContent = "정치어른이 수준";
        document.getElementById("ment").innerHTML = "현명한 유권자이시군요!<br><br><b>앞으로도 정치에 많은 관심을 가져주세요!</b>";
    }
    else{
        document.getElementById("rank").textContent = "정치새싹이 수준";
        document.getElementById("ment").innerHTML = "알고 투표하는 유권자가 됩시다.<br><br><b>앞으로 더 분발하세요!</b>";
    }

    clearTimeout(timer);

    // Add the 'fade-out' class to trigger the fade-out effect
     document.getElementById("loading-page-result").classList.add("fade-out");
}

function simulateRandomTextAppearance() {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

    const textElement = document.createElement("div");
    textElement.classList.add("random-text");
    textElement.innerText = randomSentence;

    // Set random position on the screen
    textElement.style.left = Math.random() * (window.innerWidth - 200) + "px"; // Subtract 200 to ensure the entire text is visible
    textElement.style.top = Math.random() * (window.innerHeight - 30) + "px"; // Subtract 30 to ensure the entire text is visible

    document.getElementById("loading-page-result").appendChild(textElement);

    // Accelerate the appearance by reducing the timeout duration
    timer = setTimeout(simulateRandomTextAppearance, calculateTimeoutDuration());
}

let accelerationFactor = 0.5; // Initial acceleration factor
let baseTimeout = 3000;
let aaa = 0.7;
let cnt = 0;

function display(a){
    const milliseconds = a % 1000;
    const seconds = Math.floor(a / 1000) % 60;
    const minutes = Math.floor(a / (1000 * 60)) % 60;
    return (`${pad(minutes)}:${pad(seconds)}.${padMilliseconds(milliseconds)}`);
}

function calculateTimeoutDuration() {
    // Incrementally reduce the baseTimeout by the acceleration factor each second
    if(cnt>=60){
        if(cnt>1000) return;
        console.log('053');
        baseTimeout = Math.max(baseTimeout - accelerationFactor * 1000, 50);
        return baseTimeout;
    }
    if(cnt>=50){
        cnt++;
        console.log('023');
        baseTimeout = Math.max(baseTimeout - accelerationFactor * 1000, 70);
        return baseTimeout;
    }
    if(cnt>=30){
        cnt++;
        console.log('023');
        baseTimeout = Math.max(baseTimeout - accelerationFactor * 1000, 100);
        return baseTimeout;
    }
    if(baseTimeout<=1000){
        console.log('0');
        cnt++;
        baseTimeout = Math.max(baseTimeout - accelerationFactor * 1000, 200 * aaa);
        return baseTimeout;
    }
    baseTimeout = Math.max(baseTimeout - accelerationFactor * 1000, 500);

    return baseTimeout;
}


// Initial timeout for the first appearance
timer = setTimeout(simulateRandomTextAppearance, 3000); // Adjust the timeout duration as needed