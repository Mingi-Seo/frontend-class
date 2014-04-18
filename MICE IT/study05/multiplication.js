function Multiplication()
{
	this.number = document.getElementById("number");
	this.bnt = document.getElementById("bnt");
	this.contents = document.getElementById("contents");
}

Multiplication.prototype.bntEvent = function()
{
	bnt.onclick = this.handleButtonClick;
}

Multiplication.prototype.handleButtonClick = function(e)
{	
	var op1 = number.value;
	var str = "";
	
	contents.innerHTML = "";
	
	if (op1 >= 1 && op1 <= 9)
		for (var op2 = 1; op2 <= 9; op2++)
			contents.innerHTML += "" + op1 + " * " + op2 + " = " + (op1 * op2) + "<br />";

	else
		alert("구구단은 1 ~ 9단까지 입니다.");
}