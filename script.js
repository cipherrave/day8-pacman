let pacman = document.querySelector("#pacman");

function upClick() {
  console.log("button up is clicked");
  let pacmanTop = parseInt(pacman.style.top, 10);
  if (pacmanTop > 0) {
    pacman.style.top = pacmanTop - 10 + "%";
  } else {
    pacman.style.top = pacmanTop;
  }
}

function downClick() {
  console.log("button down is clicked");
  let pacmanTop = parseInt(pacman.style.top, 10);
  if (pacmanTop < 90) {
    pacman.style.top = pacmanTop + 10 + "%";
  } else {
    pacman.style.top = pacmanTop;
  }
}

function leftClick() {
  console.log("button left is clicked");
  let pacmanLeft = parseInt(pacman.style.left, 10);
  if (pacmanLeft > 0) {
    pacman.style.left = pacmanLeft - 10 + "%";
  } else {
    pacman.style.left = pacmanLeft;
  }
}

function rightClick() {
  console.log("button right is clicked");
  let pacmanLeft = parseInt(pacman.style.left, 10);
  if (pacmanLeft < 90) {
    pacman.style.left = pacmanLeft + 10 + "%";
  } else {
    pacman.style.left = pacmanLeft;
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    console.log("Up Key is pressed");
    upClick();
  }
  if (event.key === "ArrowDown") {
    console.log("Down Key is pressed");
    downClick();
  }
  if (event.key === "ArrowLeft") {
    console.log("Left Key is pressed");
    leftClick();
  }
  if (event.key === "ArrowRight") {
    console.log("Right Key is pressed");
    rightClick();
  }
});

document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

document.addEventListener("gesturechange", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

document.addEventListener("gestureend", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});
