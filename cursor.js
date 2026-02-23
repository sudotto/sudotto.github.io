const cursor = document.createElement("img");
cursor.src = "img/cursor.png";
cursor.style.position = "fixed";
cursor.style.width = "25px";
cursor.style.height = "25px";
const body = document.getElementById("body");
body.appendChild(cursor);
addEventListener("mousemove", (event) => {
	cursor.style.left = event.clientX+1;  // +1 because the img will cover up links and make it impossible to click
	cursor.style.top = event.clientY+1;
})
