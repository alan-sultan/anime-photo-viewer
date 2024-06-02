document.getElementById('animeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const animeTitle = document.getElementById('animeTitle').value;
    const videoList = document.getElementById('videoList');
    const photo = document.getElementById('photo');
    videoList.innerHTML = '';

    const searchEndpoint = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeTitle)}&limit=1`;
    fetch(searchEndpoint)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                const anime = data.data[0];
                const episodesEndpoint = `https://api.jikan.moe/v4/anime/${anime.mal_id}/episodes`;
                const imgUrl = anime.images.jpg.large_image_url

const photoElement = document.createElement("img");

photoElement.setAttribute("src", imgUrl);

photoElement.style.width = "550px";
photoElement.style.height = "400px";

const parentElement = document.querySelector(".photoParent"); 

while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}


parentElement.appendChild(photoElement);

parentElement.style.marginTop = "20px";
parentElement.style.height = "400px";
parentElement.style.width = "400px";


            } else {
                videoList.textContent = 'No anime found for the given title.';
            }
        })
        .catch(error => {
            console.error('Error fetching anime data:', error);
            videoList.textContent = 'Error fetching anime data.';
        });
});
