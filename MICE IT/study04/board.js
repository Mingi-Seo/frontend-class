var temp = document.getElementById("board");
var blackView = true;

for (var i = 0; i < 4; i++)
{
	for (var j = 0; j < 4; j++)
	{
		console.log(blackView);
		
		if (blackView == true)
		{
			temp.innerHTML += "<span class = 'black'></span>";
			
			blackView = false;
		}
		
		else
		{
			temp.innerHTML += "<span class = 'white'></span>";
			
			blackView = true;
		}
	}
	
	if(blackView)
		blackView = false;
	
	else
		blackView = true;
}