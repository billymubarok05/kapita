/* =====================================================
   VOLCANO EXPLORER 3D
   JAVASCRIPT / INTERAKSI
===================================================== */


/* ================= STATE ================= */

let score = 0;

let currentQuestion = 0;

let selectedAnswer = null;

let zoom = 1;

let rotation = 0;

let soundEnabled = true;


/* ================= DATA BAGIAN GUNUNG ================= */

const volcanoParts = {

    crater: {

        icon: "🔥",

        title: "Kawah Gunung Api",

        description:
            "Kawah merupakan bagian pada puncak gunung api yang menjadi tempat keluarnya material vulkanik ketika terjadi aktivitas erupsi.",

        facts: [
            "Terletak di bagian puncak gunung.",
            "Dapat menjadi tempat keluarnya lava dan gas.",
            "Ukuran dan bentuk kawah dapat berubah akibat aktivitas vulkanik."
        ]

    },


    cone: {

        icon: "⛰️",

        title: "Kerucut Gunung Api",

        description:
            "Kerucut gunung api merupakan bentuk tubuh gunung yang terbentuk dari akumulasi material vulkanik selama aktivitas gunung api.",

        facts: [
            "Terbentuk dari material vulkanik.",
            "Memiliki bentuk menyerupai kerucut pada banyak gunung api.",
            "Bentuknya dapat dipengaruhi oleh aktivitas erupsi."
        ]

    },


    lava: {

        icon: "🌋",

        title: "Aliran Lava",

        description:
            "Lava merupakan magma yang telah mencapai permukaan bumi dan mengalir dari pusat erupsi.",

        facts: [
            "Berasal dari magma.",
            "Mengalir di permukaan bumi.",
            "Temperaturnya sangat tinggi ketika keluar dari gunung."
        ]

    },


    pipe: {

        icon: "⬆️",

        title: "Pipa Magma",

        description:
            "Pipa magma merupakan saluran yang menjadi jalur pergerakan magma dari bagian dalam gunung menuju permukaan.",

        facts: [
            "Menghubungkan ruang magma dengan bagian atas gunung.",
            "Menjadi jalur pergerakan magma.",
            "Dapat menjadi saluran material vulkanik."
        ]

    },


    chamber: {

        icon: "🔥",

        title: "Ruang Magma",

        description:
            "Ruang magma merupakan tempat berkumpulnya magma di bawah permukaan bumi sebelum magma bergerak menuju bagian yang lebih atas.",

        facts: [
            "Berada di bawah permukaan.",
            "Berisi magma dengan temperatur tinggi.",
            "Magma dapat bergerak melalui saluran menuju permukaan."
        ]

    },


    crust: {

        icon: "🌍",

        title: "Kerak Bumi",

        description:
            "Kerak bumi merupakan lapisan terluar bumi. Aktivitas gunung api berhubungan dengan proses geologi yang berlangsung di bawah dan pada kerak bumi.",

        facts: [
            "Merupakan lapisan terluar bumi.",
            "Menjadi tempat berbagai aktivitas geologi.",
            "Memiliki struktur batuan yang beragam."
        ]

    }

};


/* ================= QUIZ DATA ================= */

const questions = [

    {

        question:
            "Apa yang dimaksud dengan magma?",

        answers: [

            "Material batuan panas di bawah permukaan bumi",

            "Air laut yang menguap",

            "Awan yang berada di sekitar gunung",

            "Tanah di sekitar gunung"

        ],

        correct: 0

    },


    {

        question:
            "Bagian gunung api yang menjadi tempat keluarnya material vulkanik disebut...",

        answers: [

            "Kerak",

            "Kawah",

            "Ruang magma",

            "Akar"

        ],

        correct: 1

    },


    {

        question:
            "Magma yang telah mencapai permukaan bumi disebut...",

        answers: [

            "Lava",

            "Abu",

            "Kerak",

            "Awan"

        ],

        correct: 0

    },


    {

        question:
            "Tempat berkumpulnya magma di bawah permukaan disebut...",

        answers: [

            "Kawah",

            "Kerucut",

            "Ruang magma",

            "Lereng"

        ],

        correct: 2

    },


    {

        question:
            "Apa yang dimaksud dengan erupsi?",

        answers: [

            "Proses terbentuknya awan",

            "Proses keluarnya material vulkanik",

            "Proses turunnya hujan",

            "Proses pembentukan sungai"

        ],

        correct: 1

    }

];


/* ================= ELEMENT ================= */

const pages =
    document.querySelectorAll(".page");

const scoreElement =
    document.getElementById("score");

const homeSection =
    document.getElementById("homeSection");

const explorerSection =
    document.getElementById("explorerSection");

const materialSection =
    document.getElementById("materialSection");

const eruptionSection =
    document.getElementById("eruptionSection");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");


/* ================= NAVIGATION ================= */

function showPage(page) {

    pages.forEach(function(item) {

        item.classList.remove("active");

    });

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= HOME BUTTONS ================= */

document
    .getElementById("startButton")
    .addEventListener("click", function() {

        showPage(explorerSection);

    });


document
    .getElementById("materialButton")
    .addEventListener("click", function() {

        showPage(materialSection);

    });


document
    .getElementById("backHomeButton")
    .addEventListener("click", function() {

        showPage(homeSection);

    });


document
    .getElementById("materialBackButton")
    .addEventListener("click", function() {

        showPage(homeSection);

    });


document
    .getElementById("eruptionBackButton")
    .addEventListener("click", function() {

        showPage(homeSection);

    });


document
    .getElementById("resultHome")
    .addEventListener("click", function() {

        showPage(homeSection);

    });


/* ================= ADD MENU BUTTONS ================= */

const heroButtons =
    document.querySelector(".hero-buttons");


const eruptionMenuButton =
    document.createElement("button");

eruptionMenuButton.type = "button";

eruptionMenuButton.className =
    "btn btn-secondary";

eruptionMenuButton.textContent =
    "🔥 Simulasi Erupsi";

eruptionMenuButton.addEventListener(
    "click",
    function() {

        showPage(eruptionSection);

    }
);

heroButtons.appendChild(
    eruptionMenuButton
);


const quizMenuButton =
    document.createElement("button");

quizMenuButton.type = "button";

quizMenuButton.className =
    "btn btn-secondary";

quizMenuButton.textContent =
    "🧠 Mulai Kuis";

quizMenuButton.addEventListener(
    "click",
    function() {

        startQuiz();

    }
);

heroButtons.appendChild(
    quizMenuButton
);


/* ================= VOLCANO INFORMATION ================= */

const partButtons =
    document.querySelectorAll(".volcano-part");


partButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const part =
                button.dataset.part;

            showPartInfo(part);

            playClickSound();

        }
    );

});


function showPartInfo(part) {

    const data =
        volcanoParts[part];

    if (!data) {
        return;
    }

    document
        .getElementById("infoIcon")
        .textContent =
        data.icon;

    document
        .getElementById("infoTitle")
        .textContent =
        data.title;

    document
        .getElementById("infoDescription")
        .textContent =
        data.description;


    const facts =
        document.getElementById(
            "infoFacts"
        );

    facts.innerHTML = "";


    data.facts.forEach(function(fact) {

        const div =
            document.createElement("div");

        div.innerHTML = `
            <span>✓</span>
            <p>${fact}</p>
        `;

        facts.appendChild(div);

    });

}


/* ================= 3D ROTATION ================= */

const volcanoModel =
    document.getElementById(
        "volcanoModel"
    );


function updateRotation() {

    volcanoModel.style.transform =
        `rotateY(${rotation}deg) scale(${zoom})`;

}


document
    .getElementById("rotateLeft")
    .addEventListener("click", function() {

        rotation -= 20;

        updateRotation();

    });


document
    .getElementById("rotateRight")
    .addEventListener("click", function() {

        rotation += 20;

        updateRotation();

    });


document
    .getElementById("resetView")
    .addEventListener("click", function() {

        rotation = 0;

        zoom = 1;

        updateRotation();

        updateZoomText();

    });


/* ================= ZOOM ================= */

function updateZoomText() {

    document
        .getElementById("zoomValue")
        .textContent =
        Math.round(zoom * 100) + "%";

}


document
    .getElementById("zoomIn")
    .addEventListener("click", function() {

        zoom += 0.1;

        if (zoom > 1.5) {
            zoom = 1.5;
        }

        updateRotation();

        updateZoomText();

    });


document
    .getElementById("zoomOut")
    .addEventListener("click", function() {

        zoom -= 0.1;

        if (zoom < 0.7) {
            zoom = 0.7;
        }

        updateRotation();

        updateZoomText();

    });


/* ================= ERUPTION ================= */

const eruptionButton =
    document.getElementById(
        "eruptionButton"
    );

const eruptionStatus =
    document.getElementById(
        "eruptionStatus"
    );


eruptionButton.addEventListener(
    "click",
    function() {

        startEruption();

    }
);


function startEruption() {

    eruptionStatus.textContent =
        "🌋 Gunung sedang mengalami erupsi...";

    document
        .querySelectorAll(".eruption-smoke")
        .forEach(function(smoke) {

            smoke.classList.remove("active");

            void smoke.offsetWidth;

            smoke.classList.add("active");

        });


    const particles =
        document.getElementById(
            "particles"
        );

    particles.innerHTML = "";


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.setProperty(
            "--random",
            Math.random()
        );

        particle.style.left =
            (45 + Math.random() * 10) + "%";

        particle.style.top =
            (20 + Math.random() * 20) + "%";

        particle.style.background =
            Math.random() > .5
                ? "#ffb703"
                : "#ef4444";

        particles.appendChild(
            particle
        );

    }


    playEruptionSound();


    setTimeout(function() {

        eruptionStatus.textContent =
            "✅ Simulasi erupsi selesai.";

    }, 3200);

}


/* ================= SOUND ================= */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    return audioContext;

}


function playClickSound() {

    if (!soundEnabled) {
        return;
    }

    try {

        const context =
            getAudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value =
            500;

        gain.gain.setValueAtTime(
            0.05,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime + 0.15
        );

        oscillator.connect(gain);

        gain.connect(context.destination);

        oscillator.start();

        oscillator.stop(
            context.currentTime + 0.15
        );

    } catch (error) {

        console.log(
            "Audio tidak tersedia."
        );

    }

}


function playEruptionSound() {

    if (!soundEnabled) {
        return;
    }

    try {

        const context =
            getAudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type = "sawtooth";

        oscillator.frequency.value =
            80;

        gain.gain.setValueAtTime(
            0.08,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime + 1
        );

        oscillator.connect(gain);

        gain.connect(context.destination);

        oscillator.start();

        oscillator.stop(
            context.currentTime + 1
        );

    } catch (error) {

        console.log(
            "Audio tidak tersedia."
        );

    }

}


/* ================= SOUND BUTTON ================= */

document
    .getElementById("soundButton")
    .addEventListener("click", function() {

        soundEnabled =
            !soundEnabled;

        this.textContent =
            soundEnabled
                ? "🔊"
                : "🔇";

    });


/* ================= QUIZ ================= */

function startQuiz() {

    score = 0;

    currentQuestion = 0;

    selectedAnswer = null;

    scoreElement.textContent =
        score;

    showPage(quizSection);

    loadQuestion();

}


function loadQuestion() {

    selectedAnswer = null;

    const question =
        questions[currentQuestion];


    document
        .getElementById("questionText")
        .textContent =
        question.question;


    document
        .getElementById("questionNumber")
        .textContent =
        `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;


    document
        .getElementById("progressBar")
        .style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    const container =
        document.getElementById(
            "answerContainer"
        );

    container.innerHTML = "";


    document
        .getElementById("quizFeedback")
        .textContent = "";


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );

    nextButton.disabled = true;


    question.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "answer";

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                function() {

                    chooseAnswer(
                        index,
                        button
                    );

                }
            );

            container.appendChild(
                button
            );

        }
    );

}


function chooseAnswer(
    index,
    button
) {

    if (
        selectedAnswer !== null
    ) {
        return;
    }

    selectedAnswer = index;

    const question =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(function(item) {

        item.classList.add(
            "disabled"
        );

    });


    if (
        index === question.correct
    ) {

        button.classList.add(
            "correct"
        );

        score += 20;

        document
            .getElementById(
                "quizFeedback"
            )
            .textContent =
            "✅ Jawaban benar! +20 poin";

        playCorrectSound();

    } else {

        button.classList.add(
            "wrong"
        );

        buttons[
            question.correct
        ].classList.add(
            "correct"
        );

        document
            .getElementById(
                "quizFeedback"
            )
            .textContent =
            "❌ Jawaban kurang tepat.";

    }


    scoreElement.textContent =
        score;


    document
        .getElementById(
            "nextQuestion"
        )
        .disabled = false;

}


document
    .getElementById("nextQuestion")
    .addEventListener(
        "click",
        function() {

            currentQuestion++;

            if (
                currentQuestion >=
                questions.length
            ) {

                showResult();

            } else {

                loadQuestion();

            }

        }
    );


function showResult() {

    document
        .getElementById("finalScore")
        .textContent =
        score;


    const message =
        document.getElementById(
            "resultMessage"
        );


    if (score === 100) {

        message.textContent =
            "🏆 Luar biasa! Semua jawaban benar.";

    } else if (score >= 80) {

        message.textContent =
            "👏 Sangat baik! Pemahamanmu sudah bagus.";

    } else if (score >= 60) {

        message.textContent =
            "👍 Cukup baik. Pelajari kembali beberapa materi.";

    } else {

        message.textContent =
            "📚 Jangan menyerah. Pelajari materi dan coba lagi.";

    }


    showPage(resultSection);

}


/* ================= CORRECT SOUND ================= */

function playCorrectSound() {

    if (!soundEnabled) {
        return;
    }

    try {

        const context =
            getAudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value =
            700;

        gain.gain.value =
            0.06;

        oscillator.connect(gain);

        gain.connect(
            context.destination
        );

        oscillator.start();

        oscillator.frequency.exponentialRampToValueAtTime(
            1000,
            context.currentTime + .2
        );

        gain.gain.exponentialRampToValueAtTime(
            .001,
            context.currentTime + .25
        );

        oscillator.stop(
            context.currentTime + .25
        );

    } catch (error) {

        console.log(
            "Audio tidak tersedia."
        );

    }

}


/* ================= RETRY ================= */

document
    .getElementById("retryQuiz")
    .addEventListener(
        "click",
        function() {

            startQuiz();

        }
    );


/* ================= INIT ================= */

updateZoomText();

console.log(
    "🌋 Volcano Explorer berhasil dijalankan!"
);