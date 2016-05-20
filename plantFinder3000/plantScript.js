
$('#Go').click(function(){

var hardinessVal =$('#climateZone').val();
var soilDrainage = $('#soilDrainage').val();
var plantboxCheck = $('.plantbox').val();
console.log(hardinessVal);
console.log(soilDrainage);


$('.plantdiv').each(function(){
if ( ($(this).hasClass(hardinessVal) &&
($(this).hasClass(soilDrainage)|| soilDrainage === 'Uncertain/Raised'))) &&
//added this in to try to make the loop cycle through the checkboxes as well
($("#droughtTolerant").is(':checked'))
{
  $(this).show();

}
//so if it doesnt return anything for 'droughtTolerant' it should run again and see if it finds a checked box for the other variables
//if it doesn't find any checked boxes at all, it should just run a vanilla function without any checkbox search methods
else if ( ($(this).hasClass(hardinessVal) &&
($(this).hasClass(soilDrainage)|| soilDrainage === 'Uncertain/Raised')))&&
($("#heatTolerant").is(':checked'))
{
  $(this).show();

}

else if ( ($(this).hasClass(hardinessVal) &&
($(this).hasClass(soilDrainage)|| soilDrainage === 'Uncertain/Raised')))&&
($("#coldTolerant").is(':checked'))
{
  $(this).show();

}
else ( ($(this).hasClass(hardinessVal) &&
($(this).hasClass(soilDrainage)|| soilDrainage === 'Uncertain/Raised')))
{
  $(this).show();

};
});
});
