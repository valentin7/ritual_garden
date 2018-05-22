
var newKeyToUse = 52;

document.addEventListener('keydown', function(event) {

    if(event.keyCode == 37) {
        console.log("HEYY");
        alert('Left was pressed');
    }
    else if(event.keyCode == 49) {
        //alert('1 was pressed');
      console.log("YOUUUUUU");

      var audio = new Audio('valentin_new.wav');
      audio.play();
    }
    else if(event.keyCode == 50) {
        //alert('1 was pressed');
      console.log("YOUUUUUU");

      var audio = new Audio('cu_ishaan.wav');
      audio.play();
    }
    else if(event.keyCode == 51) {
        //alert('1 was pressed');
      console.log("YOUUUUUU");

      var audio = new Audio('cu_brett2.wav');
      audio.play();
    }
    else if(event.keyCode == 52) {
        //alert('1 was pressed');
      console.log("first brett one");

      var audio = new Audio('cu_brett2.wav');
      audio.play();
    }

    // toggle recording when r is pressed.
    else if (event.keyCode == 84) {
      toggleRecording("recording");
    }
    else if (event.keyCode == 82) {
      toggleRecording("NotRecording");
    }
    else if (event.keyCode == 83) {
      saveAudio();
    }

});
