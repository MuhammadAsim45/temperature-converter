let input = document.getElementById("input");
let answer = document.getElementsByClassName("answer")[0];
let convert = document.getElementsByClassName("convert")[0];
//from inputs
let F_calcius = document.getElementById("F_calcius");
let F_fahrenhiet = document.getElementById("F_fahrenhiet");
let F_kelvin = document.getElementById("F_kelvin");
//to inputs
let calcius = document.getElementById("calcius");
let fahrenhiet = document.getElementById("fahrenhiet");
let kelvin = document.getElementById("kelvin");
var val;
input.addEventListener("change", (e) => {
  val = e.target.value;
});

convert.addEventListener("click", () => {
  if (F_fahrenhiet.checked == true && calcius.checked == true) {
    let result = (val - 32) * (5 / 9);
    answer.innerHTML = `${result.toFixed(2)} ${"&deg"}C`;
  } else if (F_calcius.checked == true && fahrenhiet.checked == true) {
    let result = (9 / 5) * val + 32;
    answer.innerHTML = `${result.toFixed(2)} ${"&deg"}F`;
  } else if (F_fahrenhiet.checked == true && kelvin.checked == true) {
    let result = (val - 32) * (5 / 9) + 273;
    answer.innerHTML = `${result.toFixed(2)} ${"&deg"}K`;
  } else if (F_kelvin.checked == true && fahrenhiet.checked == true) {
    let result = (val - 273) * (9 / 5) + 32;
    answer.innerHTML = `${result.toFixed(2)} ${"&deg"}F`;
  } else if (F_calcius.checked == true && kelvin.checked == true) {
    let result = parseInt(val) + 273;
    answer.innerHTML = `${result.toFixed(2)} ${"&deg"}K`;
  } else if (F_kelvin.checked == true && calcius.checked == true) {
    let result = val - 273;
    answer.innerHTML = `${result.toFixed(2)} ${"&deg"}C`;
  } else {
    alert("please choose the following units to convert");
  }
});
Math.round();
