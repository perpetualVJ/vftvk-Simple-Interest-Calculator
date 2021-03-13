//function to compute interest
function compute()
{
    var p = document.getElementById("principal").value;
    if (p == "" || p <= 0)
    {
	alert("Enter a positive number");
	p.focus();
	return;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    var i = (p * r * y) / 100;

    var d = new Date().getFullYear();
    var cy = parseInt(y) + parseInt(d);

    document.getElementById("result").innerHTML = "If you deposit <mark> " + p +
                                                    "</mark>,<br> at an interest rate of <mark> " +
                                                    r + "%</mark>. <br> You will receive an amount of <mark>" +
                                                    i + "</mark>,<br> in the year <mark>" + cy;
    
}

//function to display rate as slider change
function displayRate(){
    var r = document.getElementById("rate").value;
    document.getElementById("selectedRate").innerHTML = r;
}