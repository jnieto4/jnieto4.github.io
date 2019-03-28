function myFunction()
{
    document.getElementById("demo").innerHTML = "Thank you so much!";
}
var timeDisplayed = false;

function myTimeFunction()
{
    if(timeDisplayed == false)
    {
        document.getElementById("time").innerHTML = Date();
        document.getElementById("timeButton").innerHTML = "Click to remove time!"; 
        timeDisplayed = true;
    }
    else
    {
        document.getElementById("time").innerHTML = "";
        document.getElementById("timeButton").innerHTML = "Click to see!";
        timeDisplayed = false;
    }  
}

function secondsPassedFunction()
{
    
}