function myFunction() {
  var x = document.getElementById("mTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("Mob-nav").setAttribute("aria-expanded","true");
  } else {
    x.className = "topnav";
    document.getElementById("Mob-nav").setAttribute("aria-expanded","false");
  }
}

$(document).ready(function(){
  var paused = 0;
  $('#togglePlayPause').on('click keydown' ,function() {
    var state = (paused) ? 'cycle' : 'pause';
    paused = (paused) ? 0 : 1;
    $('#accomplishes').carousel(state);
    $(this).toggleClass('fa-play-circle fa-pause-circle');
    $(this).attr('aria-pressed', 'true');
  });
});

var modal = document.getElementsByClassName('bg-modal');
var close = document.getElementsByClassName('close');

function stopVideo(mod) {
  var currentIframe = mod.querySelector('.modal-contents > iframe');
  currentIframe.src = currentIframe.src;
}

document.getElementById('Arc_btn').addEventListener("click", function() {
	modal[0].style.display = "flex";
});
close[0].addEventListener("click", function() {
	modal[0].style.display = "none";
});

document.getElementById('Vid_btn').addEventListener("click", function() {
	modal[1].style.display = "flex";
});
close[1].addEventListener("click", function() {
	modal[1].style.display = "none";
  stopVideo(modal[1]);
});

document.getElementById('Comp_btn').addEventListener("click", function() {
	modal[2].style.display = "flex";
});
close[2].addEventListener("click", function() {
	modal[2].style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  else if (event.target == modal[1]) {
    modal[1].style.display = "none";
    stopVideo(modal[1]);
  }
  else if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal[0].style.display = 'none';
    modal[1].style.display = 'none';
    modal[2].style.display = 'none';
    stopVideo(modal[1]);
  }
});

$('.Vform input').on('keyup', function(e){
  $(this).addClass('edited');
});
