// const N = 30;

// var list = document.getElementById("list");

// var li = document.createElement("li");

// for(var i = 0; i < N; i++) {
//   li.appendChild(document.createTextNode("L"))
//   list.appendChild(li)
// }


(function solution() {

  var N = 10;

  for(var i = 0; i < N - 1; i++) {
    console.log("L");
    console.log('');
  }

  var xAxis = "";

  for(var i = 0; i < N; i++) {
    xAxis += "L" + " ";
  }
  console.log(xAxis);

})();