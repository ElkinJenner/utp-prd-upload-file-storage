const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.querySelector('.video-title');
const videoListItems = document.querySelectorAll('#videoList li');
let currentVideoIndex = 0;  // Para controlar el índice del video actual

// Función para cambiar el video y actualizar el título
function playVideo(videoUrl, videoName) {
    videoPlayer.src = videoUrl;
    videoTitle.textContent = videoName;
    videoPlayer.play();  // Reproduce automáticamente el video
}

// Función para reproducir el siguiente video en la lista
function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoListItems.length;  // Cicla a través de la lista
    const nextVideoItem = videoListItems[currentVideoIndex];
    const videoUrl = nextVideoItem.getAttribute('data-video');
    const videoName = nextVideoItem.textContent;

    // Remover clase 'active' de todos los items
    videoListItems.forEach(i => i.classList.remove('active'));
    // Añadir clase 'active' al siguiente elemento
    nextVideoItem.classList.add('active');
    playVideo(videoUrl, videoName);
}

// Añadir un evento de click a cada elemento de la lista
videoListItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        // Actualizar el índice del video actual
        currentVideoIndex = index;
        // Remover clase 'active' de todos los items
        videoListItems.forEach(i => i.classList.remove('active'));
        // Añadir clase 'active' al elemento seleccionado
        this.classList.add('active');
        // Reproducir el video correspondiente
        const videoUrl = this.getAttribute('data-video');
        const videoName = this.textContent;
        playVideo(videoUrl, videoName);
    });
});

// Detectar cuando un video termina para reproducir el siguiente automáticamente
videoPlayer.addEventListener('ended', playNextVideo);

// Reproducir el primer video automáticamente al cargar la página
window.addEventListener('load', function () {
    const firstVideoItem = videoListItems[0];
    const videoUrl = firstVideoItem.getAttribute('data-video');
    const videoName = firstVideoItem.textContent;
    firstVideoItem.classList.add('active');
    playVideo(videoUrl, videoName);
});

// Deshabilitar el clic derecho en el video
videoPlayer.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});