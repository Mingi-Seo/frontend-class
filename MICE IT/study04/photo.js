var todayPhoto = [
        {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;�߸� ����&quot; �ְ� ������� ������ ����","id":"20120516082207657"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;���ø�&#39; �ʸ��� ���� 5������ ���� ��ģ��","id":"20120516091011626"}
        ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[���� ��ȥ�� ǳ��] �Ŷ����ź� &quot;�ູ�մϴ�&quot;","id":"20120516092605081"}
        ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;���� �� ����&#39; �ĺ�GK ��� ������ ����","id":"20120516100608409"}
        ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"�絿���� ����ű�� Ÿ�ٷ��� &#39;����&#39;","id":"20120516093313331"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"�̽�ö �Ƴ��� �� ���� ���� &quot;���ֿ�. .&quot;","id":"20120516093918544"}
        ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"���� 6������ �������� �Ծ�ƴ� ���̰�..","id":"20120516030614331"}
        ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;����&#39; �迬��, �����ǳ����� �α�����","id":"20120516092003892"}
];

var wrap = document.getElementById('wrap');
var str = '';
var imgs = [];

document.getElementById("title").innerHTML = "������ ����";

for(var i=0; i < todayPhoto.length; i++)
{
		//	1,3 / 2,4 ¦���� ��� ��
		//imgs.push( '<div class = "size"><div><img src="' + todayPhoto[i].img + '"> ' + '<span>' + todayPhoto[i].title + '</span></div>' + '<div><img src="' + todayPhoto[i + 1].img + '"> ' + '<span>' + todayPhoto[i + 1].title + '</span>' + '</div></div>');
	
		//	�ϳ��� ��� ��
		imgs.push( '<div class = "size"><img src="' + todayPhoto[i].img + '"> ' + todayPhoto[i].title + '</div>');
	
	//imgs.push('<div class = "size"><img src="' + todayPhoto[i].img + '"> ' + '<span>' + todayPhoto[i].title + '</span></div>' + '<div class = "size2"><img src="' + todayPhoto[i + 1].img + '"> ' + '<span>' + todayPhoto[i + 1].title + '</span>' + '</div>');
}

var imgs1 = imgs.splice(0,4);
var img1String = imgs1.join("");
var img2String = imgs.join("");

wrap.innerHTML = "<div class = 'scene'> <div id = 'd1'>" + img1String + "</div> </div> " + "<div class = 'scene'> <div id = 'd2' class = 'hide'>" + img2String + "</div> </div>";

/*
wrap.innerHTML = "<div id='d1'>" + img1String + "</div> "
                 + "<div id='d2' class='hide'>" + img2String + "</div>";
*/

var nextBtn = document.getElementById("nextBtn");
var preBtn = document.getElementById("preBtn");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");

nextBtn.addEventListener("click", next);
preBtn.addEventListener("click", pre);

function next()
{
//	if(d1.className==="hide")
//	{
//		d1.className = "";
//		d2.className = "hide";
//	}
	
//	else
	if (d2.className === "hide")
	{
		d1.className = "hide";
		d2.className = "";
	}
}

function pre()
{
	if (d1.className === "hide")
	{
		d1.className = "";
		d2.className = "hide";
	}
}