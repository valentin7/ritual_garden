document.addEventListener('keydown', function(event) {
  
    if(event.keyCode == 37) {
        console.log("HEYY");
        alert('Left was pressed');
    }
    else if(event.keyCode == 49) {
        //alert('1 was pressed');
      console.log("YOUUUUUU");
      
      var audio = new Audio('cu_brett.wav');
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
});