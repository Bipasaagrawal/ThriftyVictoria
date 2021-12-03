let current=0;

let firstImg = "w61.jpg";
let conDescription = "<body><ul type=\"square\"><li><h3>Printed Basic Casual Clothing</h3></li><li><h3> 9.99 CAD$</h3></li><li><h3> Available Sizes: S  M</h3></li><br><br><Br><br><br><Br><br><Br><br><Br><br><Br><br><br><br><Br><br><Br><Br><h5>To buy this product , call us at 250-509-3434 or email us at thriftyVictoria@gmail.com</h5></Body>";
let secondImg = "w62.jpg";


	$("#myImage").attr("src", firstImg);
	
	$("#description").html(conDescription);
	

function  switchCharacter()
{
if(current==0)
{
	$("#myImage").attr("src", firstImg);
	current=1;
}
else if(current==1)
{

	$("#myImage").attr("src", secondImg);
	
	current=0;
}

}
switchCharacter();

