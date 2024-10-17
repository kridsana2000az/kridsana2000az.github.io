let currentScreen = 0;

document.getElementById('start-btn').addEventListener('click', function() {
    startMusic(); // เริ่มเล่นเพลง
    changeScreen(1);
    startHeartAnimation(); // เริ่มหัวใจลอยขึ้นที่หน้าจอแรก
});

const nextButtons = document.querySelectorAll('.next-btn');
nextButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (currentScreen === 7) { // หน้าสุดท้าย
            launchFireworks(); // ปล่อยดอกไม้ไฟในหน้าสุดท้าย
        } else {
            changeScreen(index + 2);
            if (index === 0) { startSparkles(); } // เพิ่มประกายระยิบระยับเมื่อถึงหน้าจอกลาง
        }
    });
});

function changeScreen(screenIndex) {
    const screens = document.querySelectorAll('.screen');
    screens[currentScreen].classList.add('hidden');
    screens[screenIndex].classList.remove('hidden');
    currentScreen = screenIndex;

    // เรียกใช้ฟังก์ชันเพื่อแสดงหัวใจและดอกไม้ไฟในหน้าสุดท้าย
    if (screenIndex === 7) { // ถ้าเป็นหน้าสุดท้าย
        startHeartAnimation(); // เริ่มหัวใจลอยขึ้น
        launchFireworks(); // ปล่อยดอกไม้ไฟ
    }
}

function startHeartAnimation() {
    const heartsContainer = document.getElementById('hearts-container');
    heartsContainer.innerHTML = ''; 

    setInterval(() => {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 30 + 10 + 'px'; 
        heart.style.top = '100vh'; 
        heart.style.left = Math.random() * 100 + 'vw'; 
        heart.style.animation = 'floatUp 5s linear infinite'; 
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300); 
}

function startSparkles() {
    document.body.classList.add('sparkle-bg'); // เพิ่มคลาสสำหรับพื้นหลังแบบประกายระยิบระยับ
}

function launchFireworks() {
    const fireworkContainer = document.getElementById('firework-container');
    fireworkContainer.innerHTML = ''; // ล้างพลุเก่า

    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        fireworkContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }, 500); // ปล่อยพลุทุกๆ 500 มิลลิวินาที
}

// ฟังก์ชันสำหรับเปิดเพลงผ่าน iframe
function startMusic() {
    const player = document.getElementById('youtube-player');
    player.classList.remove('hidden');

    const iframe = document.getElementById('ytplayer');
    const playerURL = iframe.src; // เก็บ URL ของ iframe
    iframe.src = playerURL; // รีเซ็ต src เพื่อเริ่มเล่นใหม่

    console.log("Music starting..."); // ตรวจสอบการเรียกใช้งาน
}
