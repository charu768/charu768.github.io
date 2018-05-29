function myFunction()
{
    var w=window.prompt("Enter the caption");
    window.alert(w);
    var x=window.prompt ("add an image");
    window.alert(x);
    var y=window.prompt("enter the name");
    window.alert(y);
    var z=window.prompt("add a logo");
    window.alert(z);

       
       var c =  $("#pic").clone().prependTo("#mypic")
       console.log(c)   
       $('#caption').text(w);
       $('#source').attr('src', x);
       $("#name").text(y);
       $('#logo').attr('style', 'background-image: url("' + z + '")');
       
         


    

    
    

}



