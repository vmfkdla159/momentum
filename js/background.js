const image = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImg = image[Math.floor(Math.random() * image.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);

bgImg.className = "background-image";
