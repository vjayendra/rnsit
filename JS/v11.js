var open = 0;
var myvalue = [0,0,0,0,0,0,0,0];

function showdpt(my)
{
	if (open==1) 
	{
		for (var i = 0; i < 8; i++) 
			{
				if (i == my) {continue;}
				else {myvalue[i] = 0;}
			}
		if (myvalue[my] == 1) 
			{
				hideDetail(my);open--;myvalue[my]=0;
			}
		else
			{
				showDetail(my);myvalue[my]=1;
			}
	}
	else
	{
		showDetail(my);
		open++;
		myvalue[my]=1;
	}

}
function showDetail(my)
{
	switch(my)
	{
		case 0:document.getElementById(civil-details).style.visibility = "visible";break;
		case 1:document.getElementById(cse-details).style.visibility = "visible";break;
		case 2:document.getElementById(ece-details).style.visibility = "visible";break;
		case 3:document.getElementById(ele-details).style.visibility = "visible";break;
		case 4:document.getElementById(ise-details).style.visibility = "visible";break;
		case 5:document.getElementById(ite-details).style.visibility = "visible";break;
		case 6:document.getElementById(me-details).style.visibility = "visible";break;
		case 7:document.getElementById(sciences-details).style.visibility = "visible";break;
	}
		
}
function hideDetail(my)
{
	switch(my)
	{
		case 0:document.getElementById(civil-details).style.visibility = "hidden";break;
		case 1:document.getElementById(cse-details).style.visibility = "hidden";break;
		case 2:document.getElementById(ece-details).style.visibility = "hidden";break;
		case 3:document.getElementById(ele-details).style.visibility = "hidden";break;
		case 4:document.getElementById(ise-details).style.visibility = "hidden";break;
		case 5:document.getElementById(ite-details).style.visibility = "hidden";break;
		case 6:document.getElementById(me-details).style.visibility = "hidden";break;
		case 7:document.getElementById(sciences-details).style.visibility = "hidden";break;
	}
		
}