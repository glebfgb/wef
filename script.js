document.addEventListener('DOMContentLoaded', function() {
    var clicker = document.getElementById('clicker');
    var count = 0;

    // Функция для подсчета кликов
    function countClicks() {
        count++;
        clicker.textContent = count;
    }

    // Сохранение результата в локальное хранилище
    function saveResult() {
        localStorage.setItem('clicks', count);
    }

    clicker.addEventListener('click', function() {
        countClicks();
        saveResult();
    });

    // Загрузка сохраненного результата при загрузке страницы
    if (localStorage.getItem('clicks')) {
        count = parseInt(localStorage.getItem('clicks'));
        clicker.textContent = count;
    }
});