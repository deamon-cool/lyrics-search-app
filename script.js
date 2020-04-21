const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// Event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTrim = search.value.trim();

});
