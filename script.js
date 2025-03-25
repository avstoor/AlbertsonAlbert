// Funktio, joka päivittää latauslaskurin
function updateCount(id) {
    const countElement = document.getElementById(id);
    let currentCount = parseInt(countElement.textContent, 10);
    currentCount++;
    countElement.textContent = currentCount;
}

// Kommentoidaan pois laskuriosuus, käytetään myöhemmin CountAPI:ta
/*
document.querySelectorAll("a[download]").forEach(link => {
    link.addEventListener("click", (e) => {
        const pdfId = e.target.id;
        updateCount(pdfId);
    });
});
*/
