var i = 0;
var txt1 =
"SANDHYA..!  <<               Now I want to say you something.. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < It was the only time that I had ever wanted to make someone a permanent part of my world.  <<                  You are someone special whom I think abou every miles per second. <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always interesting for me...!                     << Yes I get upset easily because the smallest change in your behaviour hurts me a lot. It's not because I don't trust you,but I'm afraid to lose the real you.                                                     > If I did anything wrong,come to me,talk to me. If I hurt you,be honest with me.Don't go all silent on me.I can't take it anymore.                   << i'm not going anywhere.I won't leave and I won't giveup and I will be here every single time you need me. You can doubt it.You can try to push me away because you think I'll leave anyway but that will never be true.I don't care if there are 100 millions reasons to leave,you're the only reason I ever need to stay.                                                             >I Love U <SANDHYA|                  <<<<   by untoldcoding";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
