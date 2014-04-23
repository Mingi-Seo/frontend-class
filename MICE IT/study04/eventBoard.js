var temp = document.getElementById("board");
var blackView = true;
var	id = 0;

for (var i = 0; i < 4; i++)
{
	for (var j = 0; j < 4; j++)
	{
		console.log(blackView);
		
		if (blackView == true)
		{
			temp.innerHTML += "<span id = " + id + " class = 'black' onclick = changeColor(" + id + "); changeBlack(" + id + ");></span>";
			
			blackView = false;
		}
		
		else
		{
			temp.innerHTML += "<span id = " + id + " class = 'white' onclick = changeColor(" + id + "); changeWhite(" + id + ");></span>";
			
			blackView = true;
		}
		
		id++;
	}
	
	if(blackView)
		blackView = false;
	
	else
		blackView = true;
}

function changeColor(id)
{
	document.getElementById(id).className = "red";
}

function changeBlack(id)
{
	document.getElementById(id).className = "black";
}

function changeWhite(id)
{
	document.getElementById(id).className = "white";
}