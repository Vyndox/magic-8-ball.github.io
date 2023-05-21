const answers = [
    "Bu kesin",
    "Kesin öyledir",
    "Şüphesiz",
    "Evet, kesinlikle",
    "Buna güvenebilirsin",
    "Gördüğüm kadarıyla evet",
    "Büyük ihtimalle",
    "İyi görünüm",
    "Evet",
    "İşaretler evete işaret ediyor",
    "Bulanık cevap tekrar deneyin",
    "Sonra tekrar sor",
    "Sana şimdi söylememek daha iyi",
    "Şimdi tahmin edemem",
    "Konsantre ol ve tekrar sor",
    "Buna güvenme",
    "Cevabım hayır",
    "Araştırmalarım hayır diyor",
    "Görünüm çok iyi değil",
    "Çok şüpheli"
  ];
  
  const shakeButton = document.getElementById('shake-btn');
  const answerText = document.getElementById('answer');
  const logList = document.getElementById('log');
  const log = [];
  
  shakeButton.addEventListener('click', () => {
    const questionInput = document.getElementById('question-input');
    const question = questionInput.value.trim();
  
    if (question !== '') {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      answerText.textContent = randomAnswer;
  
      log.push({
        question,
        answer: randomAnswer
      });
  
      renderLog();
      questionInput.value = '';
    }
  });
  
  function renderLog() {
    logList.innerHTML = '';
    log.forEach((entry, index) => {
      const li = document.createElement('li');
      const question = document.createElement('span');
      question.textContent = entry.question;
      question.classList.add('question');
      const answer = document.createElement('span');
      answer.textContent = entry.answer;
      answer.classList.add('answer');
      li.appendChild(question);
      li.appendChild(document.createTextNode(' - '));
      li.appendChild(answer);
      logList.appendChild(li);
    });
  }
  
 