document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startBtn');
    const reactionButton = document.getElementById('reactionBtn');
    const resultElement = document.getElementById('result');
    let startTime, endTime;
    let isTestRunning = false;
  
    function getRandomTime(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function setReactionTime() {
      isTestRunning = true;
      const delayTime = getRandomTime(1000, 5000); // เวลาหน่วงสุ่มระหว่าง 1 ถึง 5 วินาที
      setTimeout(() => {
        reactionButton.style.backgroundColor = '#dc3545'; // เปลี่ยนสีปุ่ม
        startTime = Date.now(); // บันทึกเวลาเริ่มต้น
      }, delayTime);
    }
  
    function calculateReactionTime() {
      if (isTestRunning) {
        isTestRunning = false;
        reactionButton.style.backgroundColor = '#007bff'; // รีเซ็ตสีปุ่ม
        endTime = Date.now(); // บันทึกเวลาสิ้นสุด
        const reactionTime = endTime - startTime;
        const reactionText = getReactionText(reactionTime);
        resultElement.textContent = `Reaction Time: ${reactionTime} ms (${reactionText})`;
        resultElement.classList.remove('d-none'); // แสดงผลลัพธ์
        reactionButton.disabled = true; // ปิดใช้งานปุ่มหลังจากทำการทดสอบเสร็จแล้ว
      }
    }
  
    function getReactionText(reactionTime) {
      if (reactionTime < 150) {
        return "ดีเยี่ยม";
      } else if (reactionTime >= 150 && reactionTime < 250) {
        return "ดีมาก";
      } else if (reactionTime >= 250 && reactionTime < 350) {
        return "ดี";
      } else if (reactionTime >= 350 && reactionTime < 500) {
        return "พอใช้";
      } else {
        return "ต้องปรับปรุง";
      }
    }
  
    // ตัวจัดการเหตุการณ์คลิกปุ่ม "Start"
    startButton.addEventListener('click', () => {
      startButton.style.display = 'none'; // ซ่อนปุ่ม "Start"
      reactionButton.classList.remove('d-none'); // แสดงปุ่ม "Click me!"
      setReactionTime(); // เริ่มทำการทดสอบ
    });
  
    // ตัวจัดการเหตุการณ์คลิกปุ่ม "Click me!"
    reactionButton.addEventListener('click', () => {
      calculateReactionTime();
    });
  });
  