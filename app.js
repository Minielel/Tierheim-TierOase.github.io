function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let sections = document.querySelectorAll('section');
    let found = false;
    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(input) && !found) {
            section.style.display = '';
            found = true;
        } else {
            section.style.display = 'none';
        }
    });
}

function expandSearch() {
    document.getElementById('searchInput').classList.add('search-expanded');
}

function collapseSearch() {
    if (document.getElementById('searchInput').value === '') {
        document.getElementById('searchInput').classList.remove('search-expanded');
    }
}

function toggleSearch() {
    let searchInput = document.getElementById('searchInput');
    if (!searchInput.classList.contains('search-expanded')) {
        expandSearch();
        searchInput.focus();
    } else {
        searchFunction();
    }
}

function findPerfectPet() {
    // Simulate AI processing
    alert("Wir berechnen Ihr perfektes Haustier basierend auf Ihren Antworten mit einem der besten KI-Tools...");
}

function donate() {
    let amount = document.getElementById('donationAmount').value;
    alert("Vielen Dank f�r Ihre Spende von " + amount + " Euro!");
}

function sendMessage() {
    let message = document.getElementById('chatMessage').value;
    alert("Ihre Nachricht: " + message);
}
