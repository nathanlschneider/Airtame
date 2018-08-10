var app = (function () {

    var pictureFrame = document.getElementById('pictureFrame');
    var picture = document.createElement('img');
    var randomNumber = 0,
        thisRandomNumber = 1;

    addPicture();

    var loopTimer = setInterval(function () {
        picture.remove();
        addPicture();
    }, 5000);

    function addPicture() {
        picture.src = "img/" + makeRandomNumber() + ".png";
        picture.classList = "picture";
        pictureFrame.appendChild(picture);
    }

    function makeRandomNumber() {
        randomNumber = Math.floor(Math.random() * 10 + 1);
        return randomNumber;
    }
})()