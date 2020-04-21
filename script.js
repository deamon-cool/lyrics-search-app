const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// Search by song artists
async function searchSong(term) {
    fetch(`${apiURL}/suggest/${term}`)
        .then(res => res.json())
        .then(data => console.log(data));

    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    showData(data);
}

// Show song and artists in DOM
function showData(data) {

    return result.innerHTML = `
        <ul class="songs">
            ${data.data.map(song =>
                `<li>
                <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                <button class="btn" data-artist="${song.artist.name}"
                data-songtitle="${song.title}">Get Lyrics</button>
                </li>`
            ).join('')}
        </ul>
    `;
}


// Event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert('Please type in a search term');
    } else {
        searchSong(searchTerm);
    }

});
