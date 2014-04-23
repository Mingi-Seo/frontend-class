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

/**
	https://github.com/niceaji/javascript-study/blob/gh-pages/doc/ajax.md
*/
function callAjax(url, callback){
	var xmlhttp;
	// compatible with IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			callback(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function getDom(id){
	return document.getElementById(id);
}

function callbackManyNewsAjax(responseText){

	// string 을 json 으로 변환
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	var manyNewsList = JSON.parse(responseText);
	var templateString = getDom('boxTemplate').innerHTML;
	var parseString = [];
	var manyNews = '';

	for(var i=0; i<manyNewsList.length; i++ ){
		manyNews = manyNewsList[i];
		parseString.push( template(templateString, {newsId: manyNews["News"][0].newsId, cateId: manyNews["News"][1].cateId, cpKorName: manyNews["News"][2].cpKorName, title: manyNews["News"][3].title, commentCnt: manyNews["News"][4].commentCnt}  ) );
	}

	getDom('mArticle').innerHTML = parseString.join("");

}

function start(){
	callAjax('manynews.js', callbackManyNewsAjax);
}


//시작 
start();