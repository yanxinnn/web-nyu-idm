$(document).ready(function(){
  var timer = false;
  var count = 0;
  var filled = false;
  var hiddenWords = false;
  var page2 = false;
  //console.log(timer);

  if (timer == false){
    // spins the arrow
    $("button").click(function(){
      //console.log("clicked");
      $("#counterclock").css({
        "-webkit-animation": "rotation 2s infinite linear"
      });
      timer = true;
      page2 = true;
      //console.log(timer);
    });
  }

  setInterval(function() {
    if (timer == true && page2 == true){
      count += 1;
      //console.log(count/60);
      }
    if (count >= 60 && page2 == true){ // reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
      window.location.href = "page2.html";
      console.log("turning");
      page2 = false;
    }
  });

  $("#drop").click(function(){
    if (filled == false){
      $("body").css({
        "background-color": "black"
      });
      $("p").css({
        "color": "white"
      });
      $("a").css({
        "color": "#FFC9D0"
      });
      $(this).attr("src", "images/dropFilled.png");
      filled = true;
    } else {
      $("body").css({
        "background-color": "#FFC9D0"
      });
      $("p").css({
        "color": "black"
      });
      $("a").css({
        "color": "black"
      });
      $(this).attr("src", "images/drop.png");
      filled = false;
    }
  });

  $("#shoe").click(function(){
    if (hiddenWords == false){
      $("#page3").hide();
      hiddenWords = true;
    } else {
      $("#page3").show();
      hiddenWords = false;
    }
  });

  function signUp() {
    page2 = false;
    var name = document.getElementById("input_name").value;
    console.log(name);
    if (name == '') {
      window.location.reload();
    } else{
      window.location.href = "page3.html";
    }
  }

});

function signUp(){
  page2 = false;
  var name = document.getElementById("input_name").value;
  console.log(name);
  if (name == '') {
    console.log('reloaded');
    window.location.reload();
  } else{
    console.log('next page');
    window.location.href = "page3.html";
  }
}
