$('#Go').click(function(){
$('.plantdiv').hide();


var hardinessVal =$('#climateZone').val();
var soilDrainage = $('#soilDrainage').val();
var plantboxCheck = $('.plantbox').val();

var droughtFlag = 0;
var heatFlag=0;
var coldFlag=0;
var highWater=0;

//the below is designed to show things if a certain checkbox is checked
$('.plantdiv').each(function(){
if($("#droughtTolerant").is(':checked')){
  droughtFlag=1;
} //end 'droughtTolerant' if
else if($("#heatTolerant").is(':checked')){
  heatFlag=1;
}//end 'heatTolerant' elseif
else if($("#coldTolerant").is(':checked')){
  coldFlag=1;
}; //end 'coldTolerant' elseif

}); //end 'each' function


//the below is designed to loop through all 'plantdivs' to see if they match certain criterion
$('.plantdiv').each(function(){
if( ($(this).hasClass(hardinessVal) &&
($(this).hasClass(soilDrainage)|| soilDrainage === 'Uncertain/Raised')))
{
  var showFlag = 0;
  var thisPlant = $(this);

  // are any flags set?
  if ($('.plantbox').is(':checked')) {
    // are any flags set?
       if(droughtFlag===1){
         if(thisPlant.hasClass('drought')){
           showFlag = 1;
         }
         else {
           showFlag = 0;
         }
       }
       if(heatFlag===1){
         if(thisPlant.hasClass('heat')){
           showFlag = 1;
         }
         else {
           showFlag = 0;
         }
       }
       if(coldFlag===1){
         if(thisPlant.hasClass('cold')){
           showFlag = 1;
         }
         else {
           showFlag = 0;
         }
       }

  }
  else {
    showFlag = 1;
  }



  if (showFlag === 1) {
    $(this).show();
    console.log('showing: ' + thisPlant);
  }
  else {
    console.log('NOT showing: ');
    console.log(thisPlant);
  };


}});
});
