function checkGrade() {
  const body = document.querySelector("body");
  const garde1 = document.querySelector("#myGrade1");
  const garde2 = document.querySelector("#myGrade2");

  let score = Number(myGrade1.value) + Number(myGrade2.value);
  console.log(score);
  if (score == 60) {
    console.log("hey you got HD");
    console.log("time for a celebration");
    body.style.backgroundColor = "blue";
  } else if (score <= 59 && score > 15) {
    console.log("hey you passed");
    body.style.backgroundColor = "green";
  } else if (score < 15) {
    console.log("sorry you failed");
    body.style.backgroundColor = "red";
  }
}
