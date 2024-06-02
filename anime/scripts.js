document.getElementById('animeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const animeTitle = document.getElementById('animeTitle').value;
    const videoList = document.getElementById('videoList');
    const photo = document.getElementById('photo');
    videoList.innerHTML = '';

    // Jikan API endpoint for searching anime
    const searchEndpoint = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeTitle)}&limit=1`;

    // Fetch anime data from the Jikan API
    fetch(searchEndpoint)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                const anime = data.data[0];
                const episodesEndpoint = `https://api.jikan.moe/v4/anime/${anime.mal_id}/episodes`;
                const imgUrl = anime.images.jpg.large_image_url

                // Create an image element
const photoElement = document.createElement("img");

// Set the 'src' attribute of the image element
photoElement.setAttribute("src", imgUrl);

// Set the width and height of the photo element
photoElement.style.width = "550px";
photoElement.style.height = "400px";

// Get the parent element where you want to append the image
const parentElement = document.querySelector(".photoParent"); // Assuming 'photoParent' is the class of the parent element

// Remove all children of the parent element
while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}

// Append the image element to the parent element
parentElement.appendChild(photoElement);

// Set styles for the parent element
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
