const trailer = document.getElementById("trailer");
const page = document.getElementById("page");

const animateTrailer = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  });
  
}

window.onload = function(){ 
    page.onmousemove = e => {
       animateTrailer(e);
    }
};
