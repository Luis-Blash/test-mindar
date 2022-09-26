const sceneEl = document.querySelector("a-scene");
const scann = document.querySelector("#scanning");
const examplePlane = document.querySelector("#example-plane");


sceneEl.addEventListener("arReady", (event) => {
  console.log("MindAR is ready");
});

sceneEl.addEventListener("arError", (event) => {
  console.log("MindAR failed to start");
});

sceneEl.addEventListener("targetFound", (event) => {
  console.log("target found");
});

sceneEl.addEventListener("targetLost", (event) => {
  scann.classList.remove("hidden");
  console.log("target lost");
});
