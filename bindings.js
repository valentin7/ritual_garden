document.addEventListener('keydown', function(event) {

    if(event.keyCode == 37) {
        console.log("HEYY");
        alert('Left was pressed');
    }
    else if(event.keyCode == 49) {
        //alert('1 was pressed');
      console.log("YOUUUUUU");

      var audio = new Audio('cu_brett2.m4a');
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

      var audio = new Audio('cu_valentin.wav');
      audio.play();
    }
    else if(event.keyCode == 52) {
        //alert('1 was pressed');
      console.log("first brett one");

      var audio = new Audio('cu_brett2.wav');
      audio.play();
    }
});
