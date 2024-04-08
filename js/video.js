var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector('#player1');
	video.autoplay=false;
	video.loop=false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});

document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var pauseButton = document.getElementById("play");
  
	pauseButton.addEventListener("click", function() {
	  video.play();
	});
  });

document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var pauseButton = document.getElementById("pause");
  
	pauseButton.addEventListener("click", function() {
	  video.pause();
	});
  });

document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var slowDownButton = document.getElementById("slower");
	slowDownButton.addEventListener("click", function() {
	  video.playbackRate -= video.playbackRate * 0.1;
	  console.log("Speed is:", video.playbackRate);
	});
  });

document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var slowDownButton = document.getElementById("faster");
	slowDownButton.addEventListener("click", function() {
	  video.playbackRate += video.playbackRate * 0.1;
	  console.log("Speed is:", video.playbackRate);
	});
  });

document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var skipButton = document.getElementById("skip");
	skipButton.addEventListener("click", function() {
	  var newTime = video.currentTime + 10;
	  if (newTime > video.duration) {
		video.currentTime = 0;
	  } else {
		video.currentTime = newTime;
	  }
	  console.log("Time is:", video.currentTime);
	});
  });

document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var muteButton = document.getElementById("mute");
	muteButton.addEventListener("click", function() {
	  if (video.muted) {
		video.muted = false;
		muteButton.textContent = "Mute";
	  } else {
		video.muted = true;
		muteButton.textContent = "Unmute";
	  }
	});
  });

  document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("player1");
	var slider = document.getElementById("slider");
	var currentVolume = document.getElementById("volume");
	function updateVolume() {
		video.volume = slider.value / 100;
		currentVolume.textContent = slider.value + "%";
	  }
	  slider.addEventListener("input", updateVolume);
	
	  updateVolume();
	});

	 


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

