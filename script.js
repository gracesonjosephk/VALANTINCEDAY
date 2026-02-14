const heartsBox = document.getElementById("hearts");
const msg = document.getElementById("msg");

const points = [
  [4,0],[5,0],[9,0],[10,0],
  [3,1],[4,1],[5,1],[8,1],[9,1],[10,1],[11,1],
  [2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],
  [2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],
  [3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],
  [4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
  [5,6],[6,6],[7,6],[8,6],[9,6],
  [6,7],[7,7],[8,7],
  [7,8]
];

const gap = 6;
const size = 22;

function reset(){
  heartsBox.innerHTML = "";
  heartsBox.classList.remove("moveUp");
  msg.classList.remove("show");
}

function drawHearts(){
  reset();

  points.forEach((p, i) => {
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "heart";
      h.textContent = "♥️";
      h.style.left = (p[0] * (size + gap)) + "px";
      h.style.top  = (p[1] * (size + gap)) + "px";
      heartsBox.appendChild(h);

      if(i === points.length - 1){
        setTimeout(() => heartsBox.classList.add("moveUp"), 500);
        setTimeout(() => msg.classList.add("show"), 1200);
      }
    }, i * 70);
  });
}

reset();
setTimeout(drawHearts, 2900);

document.getElementById("card").addEventListener("click", () => {
  location.reload();
});
