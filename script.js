function changeImage(imageName) {
    document.getElementById("mainImage").src = imageName;
}

function resetImage() {
    document.getElementById("mainImage").src = "doyou.png";
}

function showPage(pageId) {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
}

function handleNoClick() {
    showPage('noPage');
}
let clickCount = 0;

function changeImage(imageName) {
    document.getElementById("mainImage").src = imageName;
}

function resetImage() {
    document.getElementById("mainImage").src = "cool.jpg";
}

function handleNoClick() {
    clickCount++;
    if (clickCount < 5) {
        moveButton();
    } else {
        showPage('noPage');
    }
}

function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector(".button-container");

    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function showPage(pageId) {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
}
