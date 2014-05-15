var API_url = "http://apis.daum.net/search/web?q={query}&apikey=60e60c083243561e5656ec2cc724a5a6862312f4&output=json&callback={callback}";
var query = "";
var parseString = [];
var flag = "";
var newsMaxCount = 500;

//함수선언

/**
	https://gist.github.com/tkissing/1347239
*/
var template  = function(a,b) { // a: template string, b: Object or Array with values to fill in
    // coerce a to a string
    return(a+'').replace(
            // search for anything with a mustache around it
            /\{\{([^{}]+)}}/g,
            function(c,d) { // c will be the complete placeholder, d the part between the mustaches
                // b is optional (but if passed, must be a type that is a valid operand for "in"
                return d in (b||{})
                        // if d is a method of b, call it, otherwise return its value
                        ? (/^f/.test(typeof b[d]) ? b[d]() :b[d] )
                        // if d is not a member of b, don't replace anything to allow nested calls like
                        // mstc(mstc(tmpl, obj), anotherObj)
                        : c;
            }
    );
};

function start()
{
	flag = 1;

	callAjax();
}

function callAjax()
{
	$('#daumSearch').on("submit", function(event)
	{
		console.log('submit');

		query = $('#queryText').val();
		// jsonData = [];
		parseString = [];

		appendNews(API_url);

		return false;
	});
}

function appendNews(changeUrl)
{
	var url = changeUrl.replace('{query}', query).replace('{callback}', '?');

	$.ajax(url,
	{
		cache : true,
		dataType : 'jsonp',

		complete : function(jqXHR, status)
		{
			var data = jqXHR.responseJSON;
			var items = data.channel.item;

			// for (var i = 0; i < items.length; i++)
			// 	jsonData.push(items[i]);

			initList(items);
			// initList(getNewsData());
		},

		error : function(jqXHR, textStatus, errorThrown)
		{
			console.log(textStatus + ", " + errorThrown);
		}
	});
}

function initList(newsData, listCount)
{
	var templateString = getDom('boxTemplate').innerHTML;
	// var parseString = [];

	for(var i = 0; i < newsData.length; i++)
	{
		parseString.push(template(templateString, {link: newsData[i].link, title: newsData[i].title}));
	}

	getDom('newsList').innerHTML = parseString.join("");
};

function clickNewsTab()
{
	getDom("news").className = "fst on";
	getDom("btnWrap").className = "fold_news fold_close";

	flag = 1;
	// jsonData = [];
	parseString = [];

	appendNews(API_url);
};

function moreBtn()
{
	var newsData = "";

	console.log(flag);

	if (flag <= newsMaxCount)
	{
		flag++;

		appendNews(API_url + "&pageno=" + flag);
	}

	else
		getDom("btnWrap").className = "hide";
};

function getNewsData()
{
	return jsonData;
};

function getDom(id)
{
	return document.getElementById(id);
};

//시작 
start();