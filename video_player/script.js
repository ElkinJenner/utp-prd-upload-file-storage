document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoList = document.getElementById('videoList');
    const videos = videoList.getElementsByTagName('li');
    let currentIndex = 0; // Para llevar el índice del video actual

    // Función para cargar y reproducir un video
    function playVideo(index) {
        if (index < videos.length) {
            // Remover la clase 'active' de cualquier video previamente activo
            for (let j = 0; j < videos.length; j++) {
                videos[j].classList.remove('active');
            }

            // Agregar la clase 'active' al video actual
            videos[index].classList.add('active');

            // Cambiar el video source y reproducir
            const videoSrc = videos[index].getAttribute('data-video');
            videoPlayer.src = videoSrc;
            videoPlayer.play();
        }
    }

    // Reproducir el primer video por defecto al cargar la página
    playVideo(currentIndex);

    // Cuando un video termina, pasar al siguiente video
    videoPlayer.addEventListener('ended', function () {
        currentIndex++;
        if (currentIndex < videos.length) {
            playVideo(currentIndex);
        } else {
            currentIndex = 0; // Si es el último video, reiniciar la lista
            playVideo(currentIndex);
        }
    });

    // Reproducir un video al hacer clic en la lista
    for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener('click', function () {
            currentIndex = i; // Actualiza el índice al video seleccionado
            playVideo(currentIndex);
        });
    }
});