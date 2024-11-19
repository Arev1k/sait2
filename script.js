document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значения полей
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // "Отправляем" данные (на самом деле просто выводим их в консоль)
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    // Очищаем форму после "отправки"
    document.getElementById('feedbackForm').reset();

    // Сообщение об успешной отправке
    alert('Ваше сообщение отправлено! (но на самом деле нет)');
});