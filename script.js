let currentScreen = 0;

document.getElementById('start-btn').addEventListener('click', function() {
    changeScreen(1);
});

const nextButtons = document.querySelectorAll('.next-btn');
nextButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (currentScreen === 7) { // ถ้ากดที่ปุ่มในหน้าสุดท้าย
            window.open('https://youtu.be/2DXwy2aSwPI?si=N_N9Kjp7zs6DmQUe', '_blank'); // เปลี่ยน YOUR_VIDEO_ID เป็น ID ของเพลง
        } else {
            changeScreen(index + 2);
        }
    });
});

function changeScreen(screenIndex) {
    const screens = document.querySelectorAll('.screen');
    screens[currentScreen].classList.add('hidden');
    screens[screenIndex].classList.remove('hidden');
    currentScreen = screenIndex;

    if (screenIndex === 7) { // หน้าสุดท้าย
        startHeartAnimation();
    }
}

function startHeartAnimation() {
    const heartsContainer = document.getElementById('hearts-container');
    heartsContainer.innerHTML = ''; // ล้างหัวใจเก่า

    setInterval(() => {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 50 + 20 + 'px'; // ขนาดสุ่ม
        heart.style.top = Math.random() * 100 + 'vh'; // ตำแหน่งแนวตั้งสุ่ม
        heart.style.left = Math.random() * 100 + 'vw'; // ตำแหน่งแนวนอนสุ่ม
        heartsContainer.appendChild(heart);
        
        // ทำให้หัวใจหายไปหลังจาก 2 วินาที
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }, 20); // สร้างหัวใจทุก 200 มิลลิวินาที
}
