let currentQuestion = 1;
const totalQuestions = 4;

function checkAnswer(selectedImage, isCorrect) {
  if (isCorrect) {
    const message = document.createElement('div');
    message.innerHTML = `<p class="correct-answer">Правильно! Переход к следующему вопросу.</p>`;
    message.classList.add('message');
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 2000);

    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      document.getElementById(`question-${currentQuestion - 1}`).style.display = "none";
      document.getElementById(`question-${currentQuestion}`).style.display = "block";
    } else {
      document.getElementById('result').style.display = "block";
    }
  } else {
    const message = document.createElement('div');
    message.innerHTML = `<p class="wrong-answer">Неправильный ответ, попробуй снова!</p>`;
    message.classList.add('message');
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
}

// Скрываем все вопросы кроме первого
for (let i = 2; i <= totalQuestions; i++) {
  document.getElementById(`question-${i}`).style.display = "none";
}
