const A = [100, 200, 100];
const B = [50, 100, 100];

const tap = [100, 70];

var icon0 = document.getElementById("icon0");

var icon1 = document.getElementById("icon1");

var icon2 = document.getElementById("icon2");

var tapElement = document.getElementById("tap");

(function position() {

  icon0.style.position = 'absolute';

  icon0.style.left = A[0] + 'px';

  icon0.style.top = B[0] + 'px';

  icon1.style.position = 'absolute';

  icon1.style.left = A[1] + 'px';

  icon1.style.top = B[1] + 'px';

  icon2.style.position = 'absolute';

  icon2.style.left = A[2] + 'px';

  icon2.style.top = B[2] + 'px';

})();

// ANOTHER SOLUTION

// function iconClick ({ pageX, pageY }) {
//   let circle1 = {
//     x: [A[0] - 20, A[0] + 20],
//     y: [B[0] - 20, B[0] + 20],
//   }

//   let circle2 = {
//     x: [A[1] - 20, A[1] + 20],
//     y: [B[1] - 20, B[1] + 20],
//   }

//   let circle3 = {
//     x: [A[2] - 20, A[2] + 20],
//     y: [B[2] - 20, B[2] + 20],
//   }

//   if (pageX >= circle1.x[0] && pageX <= circle1.x[1] && pageY >= circle1.y[0] && pageY <= circle1.y[1]) {

//     console.log(0);

//   } else if(pageX >= circle2.x[0] && pageX <= circle2.x[1] && pageY >= circle2.y[0] && pageY <= circle2.y[1]) {

//     console.log(1);

//   } else if(pageX >= circle3.x[0] && pageX <= circle3.x[1] && pageY >= circle3.y[0] && pageY <= circle3.y[1]) {

//     console.log(2);

//   } else {
//     console.log(-1);
//   }
// }

// CIRCLE LAW

function iconClick ({ pageX, pageY }) {
  let circles = [0, 1, 2];
  let inside = false;

  circles.forEach(cir => {
    if (Math.sqrt((A[cir] - pageX)**2 + (B[cir] - pageY)**2) < 20) {
      console.log(cir);
      inside = true;
    }
  });

  if (!inside) console.log(-1);
}

