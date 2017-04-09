if (typeof(Storage) !== "undefined") {
    var c=0;

	function increment() {
		document.getElementById("txt").value = c;
		c++;
	}

	function decrement() {
		document.getElementById("txt").value = c;
		c--;
	}

$(function(){
  $(".increment").click(function(){
    var count = parseInt($("~ .count", this).text());
    
    if($(this).hasClass("up")) {
      var count = count + 1;
      
       $("~ .count", this).text(count);
    } else {
      var count = count - 1;
       $("~ .count", this).text(count);     
    }
    
    $(this).parent().addClass("bump");
    
    setTimeout(function(){
      $(this).parent().removeClass("bump");    
    }, 400);
  });
});


} else {
    // Sorry! No Web Storage support..
}





