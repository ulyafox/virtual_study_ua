const container = document.querySelector(".card");

const bg = document.createElement("div");
bg.style.backgroundSize = "cover";
bg.style.backgroundImage = "url('./img/bg.jpg')";

bg.style.height = "100vh";
bg.style.width = "100vw";

bg.style.position = "absolute";
bg.style.inset = "0";
bg.style.zIndex = "-1";

bg.style.filter = "brightness(95%) blur(0px)";
bg.style.transition = "1s";

document.body.appendChild(bg);

container.addEventListener("mouseover", () => {
	bg.style.filter = "brightness(70%) blur(5px)";
});
container.addEventListener("mouseleave", () => {
	bg.style.filter = "brightness(95%) blur(0px)";
});
