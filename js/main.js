var app = (function () {

    var pictureFrame = document.getElementById('pictureFrame');
    var picture = document.createElement('img');

    picture.src = "img/1.png";
    picture.classList = "picture";
    pictureFrame.appendChild(picture);

})()