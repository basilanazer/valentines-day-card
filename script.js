function showHeart() {
  const myImage1 = document.getElementById("line"); 
  const myImage2 = document.getElementById("heart");
  const mytitle1 = document.getElementById("complete");
  const mytitle2 = document.getElementById("you-won");
  const bear = document.getElementById("bear");

  bear.style.display = "block";
  myImage1.style.display = "block";
   myImage2.style.display = "block";
  mytitle1.style.display = "none";
  mytitle2.style.display = "block";


}