// Открытие модального окна
function openModal(videoId) {
    var modal = document.getElementById("videoModal");
    var iframe = document.getElementById("videoIframe");

    // Задаем ссылку на видео в iframe в зависимости от videoId
    if (videoId === 'video1') {
        iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Пример ссылки на YouTube
    } else if (videoId === 'video2') {
        iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Пример ссылки на YouTube
    } else if (videoId === 'video3') {
        iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Пример ссылки на YouTube
    } else if (videoId === 'video4') {
        iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Пример ссылки на YouTube
    }

    modal.style.display = "flex"; // Показываем модальное окно
}

// Закрытие модального окна
function closeModal() {
    var modal = document.getElementById("videoModal");
    var iframe = document.getElementById("videoIframe");

    iframe.src = ""; // Очищаем источник видео, чтобы остановить воспроизведение
    modal.style.display = "none"; // Закрываем модальное окно
}

// Закрытие модального окна, если кликнуть за его пределами
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
}
