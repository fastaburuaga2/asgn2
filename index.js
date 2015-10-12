
var count = 0;

$(document).ready(function(){
    $('.button').click(function(){

    	var x;
    	x = 0 + this.id.substr(1, 2)
    	
      var col = x%3 + 1 ;
      var row = 0;
      if(x<3){row = 1;}
      else if(x<6){row = 2;}
      else if(x<9){row = 3;}
      else if(x<12){row = 4;}
      else{row = 5;}

      
      if($(this).hasClass("selected")){
          count -= ((row-1)*3 + col);
          $(this).removeClass('selected');
      }
      else{
          $(this).addClass('selected');
          count += ((row-1)*3 + col);
      }
      
		//////////////BONUS


		if(col==1){

			if($("#b00").hasClass("selected") && this.id != "b00"){
              count -= (0*3 + col);
              $('#b00').removeClass('selected');
          }
          
          if($("#b03").hasClass("selected") && this.id != "b03"){
              count -= (1*3 + col);
              $('#b03').removeClass('selected');
          }
          if($("#b06").hasClass("selected") && this.id != "b06"){
              count -= (2*3 + col);
              $('#b06').removeClass('selected');
          }
          if($("#b09").hasClass("selected") && this.id != "b09"){
              count -= (3*3 + col);
              $('#b09').removeClass('selected');
          }
          if($("#b12").hasClass("selected") && this.id != "b12"){
              count -= (4*3 + col);
              $('#b12').removeClass('selected');
          }
      }

		//////////////BONUS

    });
});

function getOutput() {
    document.getElementById("output").innerHTML = "Output: " + count ;
}