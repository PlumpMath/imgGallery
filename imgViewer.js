$(document).ready(function(){
    imgContainer = $(".imgContainer");
    numberOfImages = imgContainer.size();
    
    a(imgContainer.index(0));
    a(imgContainer.index(1));
    a(imgContainer.index(3));
    a(imgContainer.index(2));
    a(imgContainer.index(4));
    a(imgContainer.index(7));

    function a(o){
	o.animate(
	    opacity: 0.5 , 2000 );}
});