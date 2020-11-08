var i = 0;
var txt = 'My name is Nathanael Hondi, currently a 17-year-old student at East London Arts and Music situated in London. I am an aspiring games developer taking my passion for technology and using it to create a variety of games. Currently, we are in a world where creativity and the desire to create is essential to bring something new to the world. Utilising Unity and C# I know how to program both 2D and 3D games and now seek to learn a wide variety of programming languages to widen my skill set. I occasionally also do digital art, drawing different forms of fanart and portraits. These skills and interests are what set me on my path as a game developer.'; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }