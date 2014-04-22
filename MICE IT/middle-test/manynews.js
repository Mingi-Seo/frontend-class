(function ()
{
	var jsonData = "";
	var aElement = "";
	var aElementId = "";

	function Manynews()
	{	
		//this.ulElement = document.getElementsByTagName("ul")[1];

		jsonData = [
		   {
		      "news":[
		         {
		            "newsId":"20140417081105507",
		            "cateId":"politics",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� \"�대��듬졊 �щ늿 諛ㅼ깉��"..�� 鍮꾩긽洹쇰Т�쒖꽭",
		            "commentCnt":"1873"
		         },
		         {
		            "newsId":"20140417010005450",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� 臾쇰퀝 留욌뒗 �뺥솉��珥앸━",
		            "commentCnt":"862"
		         },
		         {
		            "newsId":"20140417063504297",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼��移⑤ぐ>�ш컼��湲곌���\"9�쒓퍡 �덉텧��寃�媛숇떎\"",
		            "commentCnt":"788"
		         },
		         {
		            "newsId":"20140417081305527",
		            "cateId":"economic",
		            "cpKorName":"�댁뒪�좊쭏��,
		            "title":"移⑤ぐ �ш컼���щ쭩���좎썝 異붽��뺤씤..18��諛뺤꽦鍮���,
		            "commentCnt":"649"
		         },
		         {
		            "newsId":"20140417074505092",
		            "cateId":"foreign",
		            "cpKorName":"�몄뻔�댁뒪",
		            "title":"\"移⑤ぐ�섎뒗��'��쭅�댁� 留먮씪'怨�.\" �몄떊��吏묒쨷 蹂대룄",
		            "commentCnt":"534"
		         },
		         {
		            "newsId":"20140417030212967",
		            "cateId":"society",
		            "cpKorName":"議곗꽑�쇰낫",
		            "title":"移⑤ぐ源뚯� 140��. �덈쑉怨��꾩씠���껊뒗 �섎씪",
		            "commentCnt":"473"
		         },
		         {
		            "newsId":"20140417060307096",
		            "cateId":"society",
		            "cpKorName":"�몄뻔�댁뒪",
		            "title":"[�ш컼��移⑤ぐ]\"�붿큹 媛�뒫�깅낫��湲됱꽑���몃갑寃쎌궗..\"",
		            "commentCnt":"421"
		         },
		         {
		            "newsId":"20140417030915168",
		            "cateId":"society",
		            "cpKorName":"�숈븘�쇰낫",
		            "title":"媛�뒾源뚯� 臾�李⑥삱�쇰룄 �숈깮���щ옒硫��덉텧 �뺣떎 �앸궡..",
		            "commentCnt":"267"
		         },
		         {
		            "newsId":"20140417011006513",
		            "cateId":"society",
		            "cpKorName":"�댁떆��,
		            "title":"[吏꾨룄 �ш컼�좎묠紐�\"援�쉶�섏썝���섍퀬 媛�”���덈뤌\" 遺꾪넻",
		            "commentCnt":"252"
		         },
		         {
		            "newsId":"20140417035004518",
		            "cateId":"society",
		            "cpKorName":"援���쇰낫",
		            "title":"[吏꾨룄 �ш컼��移⑤ぐ] \"�꾨쭏, 諛곌� 諛섏� 湲곗슱�덈뒗��援щ챸議곕겮 紐��낆뿀�댁슂\".. 移⑤ぐ�섎뒗 諛곗뿉��嫄몃젮���꾪솕",
		            "commentCnt":"221"
		         },
		         {
		            "newsId":"20140417055205994",
		            "cateId":"society",
		            "cpKorName":"�댁떆��,
		            "title":"[吏꾨룄 �ш컼�좎묠紐�諛ㅼ깦援ъ“ �깃낵 �놁뼱..�좎껜 吏꾩엯 �쒕룄以�,
		            "commentCnt":"159"
		         },
		         {
		            "newsId":"20140417061104147",
		            "cateId":"economic",
		            "cpKorName":"�대뜲�쇰━",
		            "title":"[�곌툑媛쒗쁺]'留뚯떊李쎌씠' 怨듭쟻�곌툑..\"媛쒗쁺 ��텛硫��몃�媛��꾩웳\"",
		            "commentCnt":"149"
		         },
		         {
		            "newsId":"20140417072907904",
		            "cateId":"society",
		            "cpKorName":"�뚯씠�몄뀥�댁뒪",
		            "title":"[�ш컼��移⑤ぐ] �좎껜�섏깋 �ш컻, �щ쭩���좎썝 �뺤씤.. �⑥썝怨�援먯궗 理쒗삙�뺤뵪",
		            "commentCnt":"148"
		         },
		         {
		            "newsId":"20140417060109036",
		            "cateId":"society",
		            "cpKorName":"寃쏀뼢�좊Ц",
		            "title":"'援щ챸 �뤿ぉ' 46媛�以�2媛쒕쭔 �묐룞",
		            "commentCnt":"139"
		         },
		         {
		            "newsId":"20140417090508665",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"吏꾨룄 移⑤ぐ �ш컼���щ쭩��8紐낆쑝濡��섏뼱(�띾낫)",
		            "commentCnt":"139"
		         },
		         {
		            "newsId":"20140417031022236",
		            "cateId":"society",
		            "cpKorName":"�숈븘�쇰낫",
		            "title":"[�⑤룆]�좎옣 \"�붿큹異⑸룎 �꾨땲��. �먯씤 紐곕씪\"",
		            "commentCnt":"121"
		         },
		         {
		            "newsId":"20140417082906888",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� �ш퀬�꾩옣��諛쒓껄���ы븰��媛�갑",
		            "commentCnt":"99"
		         },
		         {
		            "newsId":"20140417062304220",
		            "cateId":"sports",
		            "cpKorName":"OSEN",
		            "title":"�쇱뿉��湲곗씠���뚮컻 �됰룞, �대뼸寃�遊먯빞 �섎굹",
		            "commentCnt":"94"
		         },
		         {
		            "newsId":"20140417034306501",
		            "cateId":"society",
		            "cpKorName":"�쒓뎅寃쎌젣",
		            "title":"'濡쒖뒪荑��좎엫 寃�궗' �쒖슱��11紐�理쒕떎",
		            "commentCnt":"85"
		         },
		         {
		            "newsId":"20140417033705420",
		            "cateId":"politics",
		            "cpKorName":"�쒓뎅�쇰낫",
		            "title":"[媛꾩꺽 利앷굅議곗옉 �꾪룺�� \"援�젙�먯쓽 珥덈쾿�곸씤 留뚮뒫�댁뇿\".. ��났�섏궗沅��쇰� �ъ젏��,
		            "commentCnt":"72"
		         },
		         {
		            "newsId":"20140417034107477",
		            "cateId":"foreign",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� 獰롮뼵濡�\"��� 理쒖븙���ш퀬����"(醫낇빀)",
		            "commentCnt":"69"
		         },
		         {
		            "newsId":"20140417044904801",
		            "cateId":"society",
		            "cpKorName":"�꾩떆�꾧꼍��,
		            "title":"[�몄썡��移⑤ぐ]�댁엫 援먯궗 1紐��ы븿 �ъ꽦 �쒖떊 2援�異붽� �몄뼇",
		            "commentCnt":"66"
		         },
		         {
		            "newsId":"20140417050206843",
		            "cateId":"sports",
		            "cpKorName":"留덉씠�곗씪由�,
		            "title":"'ERA 2.05' �ㅻ굹移� 22�대떇 28K 2蹂쇰꽬 '愿대젰'",
		            "commentCnt":"59"
		         },
		         {
		            "newsId":"20140417071904797",
		            "cateId":"entertain",
		            "cpKorName":"�댁뒪��,
		            "title":"�댁긽誘�\"理쒗씗, 蹂쇱닔濡�愿쒖갖���ъ옄\"(�곗뼱�섏슦��",
		            "commentCnt":"58"
		         },
		         {
		            "newsId":"20140416224009215",
		            "cateId":"society",
		            "cpKorName":"�쒓꺼��,
		            "title":"\"�대쾲 �뺢텒�먯꽑 ��삎 �ш퀬 �덈굹\"..�좎젙蹂��먮떖 ��'�낅갑�� �꾨쭏��,
		            "commentCnt":"58"
		         },
		         {
		            "newsId":"20140417072808891",
		            "cateId":"entertain",
		            "cpKorName":"留덉씠�곗씪由�,
		            "title":"�먰샇�� 1�꾨쭔��蹂듦� �대븷�� \"留덉쓬 移섏쑀�먯쑝硫�.\"",
		            "commentCnt":"54"
		         },
		         {
		            "newsId":"20140417082008721",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� �섏깋�섎뒗 �닿꼍",
		            "commentCnt":"53"
		         },
		         {
		            "newsId":"20140417073502962",
		            "cateId":"society",
		            "cpKorName":"�ㅽ룷痢좎꽌��,
		            "title":"'�몄썡��移⑤ぐ' �앹〈��異붿젙 臾몄옄 硫붿떆吏�\"諛��덉뿉 �щ엺 �덈떎\"",
		            "commentCnt":"49"
		         },
		         {
		            "newsId":"20140417030214970",
		            "cateId":"society",
		            "cpKorName":"議곗꽑�쇰낫",
		            "title":"�ㅽ럺(spec쨌媛곸쥌 寃쎈젰怨��먭꺽) 吏묒갑 留먮씪硫� �좎씡(TOEIC쨌�ㅼ슜�곸뼱�됯�) �먯닔 臾삳뒗 湲곗뾽��,
		            "commentCnt":"45"
		         },
		         {
		            "newsId":"20140417075305220",
		            "cateId":"entertain",
		            "cpKorName":"�댁뒪��,
		            "title":"源�쁽以�\"怨듦컻�곗븷 �ъ옄留��쇰갑���쇳빐, �덈� �덊빐\"(�명꽣酉�",
		            "commentCnt":"44"
		         },
		         {
		            "newsId":"20140417034406511",
		            "cateId":"economic",
		            "cpKorName":"�쒓뎅寃쎌젣",
		            "title":"'洹몃옖��룹젣�ㅼ떆���ъ씠' ��삎�좎감 AG 6��異쒖떆..�꾨�李� �먯쑀���ъ닔 '�좏삎蹂묎린' �щ떎",
		            "commentCnt":"43"
		         },
		         {
		            "newsId":"20140417074406082",
		            "cateId":"society",
		            "cpKorName":"�멸퀎�쇰낫",
		            "title":"[吏꾨룄 �ш컼��移⑤ぐ] �몄썡��援ъ“��紐낅떒(17���ㅼ쟾 7��湲곗�)",
		            "commentCnt":"42"
		         },
		         {
		            "newsId":"20140417085614419",
		            "cateId":"economic",
		            "cpKorName":"癒몃땲�щ뜲��,
		            "title":"[�뱀랬�뚯씪]移⑥닔 5遺꾨룄 �덈뤌 \"諛��섏뼱媛꾨떎, �대룞 遺덇�\"",
		            "commentCnt":"40"
		         },
		         {
		            "newsId":"20140417010206461",
		            "cateId":"entertain",
		            "cpKorName":"�쒖슱�좊Ц",
		            "title":"�먯꽍��移⑤У, \"�앹〈 媛�뒫���щ컯�섎떎\" ��떟��10珥덇컙.. 留먮낫��源딆� 怨듦컧",
		            "commentCnt":"38"
		         },
		         {
		            "newsId":"20140417064905414",
		            "cateId":"sports",
		            "cpKorName":"�뗫낵由ъ뒪��,
		            "title":"[�⑤룆] �볧띁�� \"�밴꺽PO 吏꾩텧��諛뺤＜��蹂듦� �쇱쓽\"",
		            "commentCnt":"38"
		         },
		         {
		            "newsId":"20140417065905490",
		            "cateId":"entertain",
		            "cpKorName":"�ㅽ룷痢좊룞��,
		            "title":"�≪��⑤룄 �쒕쪟濡��먰봽 以묎뎅�닿텒���щ옉 �щ퓤",
		            "commentCnt":"35"
		         },
		         {
		            "newsId":"20140417061704181",
		            "cateId":"economic",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"�꾨�李��묐뀈 �곌뎄媛쒕컻鍮�1議�泥쒖뼲��.留ㅼ텧 2.1%",
		            "commentCnt":"35"
		         },
		         {
		            "newsId":"20140416221009828",
		            "cateId":"entertain",
		            "cpKorName":"�곕툕�대뜲�쇰━",
		            "title":"泥쒖씠�� �묒긽援�낵 怨듦컻 �곗븷 �꾪쉶 \"��몴�섏씠 �レ뼱��.�쒖빟 留롫떎\"",
		            "commentCnt":"34"
		         },
		         {
		            "newsId":"20140416235306908",
		            "cateId":"society",
		            "cpKorName":"寃쏀뼢�좊Ц",
		            "title":"�ш퀬 �좊컯 �좎썝�ㅼ씠 媛�옣 癒쇱� �덉텧",
		            "commentCnt":"34"
		         },
		         {
		            "newsId":"20140417031207285",
		            "cateId":"economic",
		            "cpKorName":"議곗꽑鍮꾩쫰",
		            "title":"遺�룞��遺덉뵪 �대━��. �뚰삎二쇳깮 �섎Т鍮꾩쑉���먯�",
		            "commentCnt":"33"
		         },
		         {
		            "newsId":"20140417060308103",
		            "cateId":"society",
		            "cpKorName":"�몄뻔�댁뒪",
		            "title":"[�ш컼��移⑤ぐ] \"諛�湲곗슫�� �낆쓣���덉쑝硫��덉쟾議곕겮 �낆쑝��"",
		            "commentCnt":"32"
		         },
		         {
		            "newsId":"20140417040808674",
		            "cateId":"economic",
		            "cpKorName":"�쒖슱�좊Ц",
		            "title":"�곗쑀 �⑥븘�꾨뒗��. �먯쑀媛��곕룞����媛�꺽 �붿�遺�룞",
		            "commentCnt":"32"
		         },
		         {
		            "newsId":"20140417023906891",
		            "cateId":"entertain",
		            "cpKorName":"TV由ы룷��,
		            "title":"�쒓텒誘몃� �쒕�, '�곕━�숇꽕 �덉껜�� �쒓텒���몄씠 �녹� �좎씪���ㅽ�",
		            "commentCnt":"31"
		         },
		         {
		            "newsId":"20140417070408633",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� �앹〈���곗뿉 �뱀쓬��'�댁씠�녿뒗' �좊궡諛⑹넚",
		            "commentCnt":"31"
		         },
		         {
		            "newsId":"20140417082005704",
		            "cateId":"politics",
		            "cpKorName":"援���쇰낫",
		            "title":"[吏꾨룄 �ш컼��移⑤ぐ] \"諛뺢렐����넻�����덉쑝濡�諛ㅼ깉��".. 泥����鍮꾩긽洹쇰Т�쒖꽭",
		            "commentCnt":"31"
		         },
		         {
		            "newsId":"20140416210807454",
		            "cateId":"society",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"<�ш컼�좎묠紐� �앹〈 �밸Т��\"���ш린���쒓컙 寃⑥슦 援ъ“\"",
		            "commentCnt":"31"
		         },
		         {
		            "newsId":"20140417060205056",
		            "cateId":"economic",
		            "cpKorName":"�고빀�댁뒪",
		            "title":"�앹궛�먮Ъ媛�18媛쒖썡吏��섎씫..\"泥닿컧臾쇨���愿대━\"",
		            "commentCnt":"30"
		         },
		         {
		            "newsId":"20140416211509585",
		            "cateId":"entertain",
		            "cpKorName":"�곕툕�대뜲�쇰━",
		            "title":"�먯꽍���ш낵, JTBC �댁뒪9 �ㅽ봽��\"�꾨같 諛뺤쭊洹쒖뿉 異⑸텇���뚮젮二쇱� 紐삵븳 ����"",
		            "commentCnt":"30"
		         },
		         {
		            "newsId":"20140417073505966",
		            "cateId":"society",
		            "cpKorName":"�쒓뎅寃쎌젣TV",
		            "title":"吏꾨룄 諛⑸Ц �뺥솉��珥앸━ 臾쇰퀝 留욊퀬 遊됰�..�몄썡���ㅼ쥌��媛�” 嫄곗꽱 ��쓽",
		            "commentCnt":"28"
		         },
		         {
		            "newsId":"20140417000604999",
		            "cateId":"entertain",
		            "cpKorName":"�댁뒪��,
		            "title":"�덉씠�붿젣��\"�꾨궓移��덈뵒��寃고샎源뚯� 怨좊��덉�留�.\"(濡쒕뜑��",
		            "commentCnt":"27"
		         }
		      ]
		   },
		   {
		      "enter":[
		         {
		            "newsId":"20140417071904797",
		            "cpKorName":"�댁뒪��,
		            "title":"�댁긽誘�\"理쒗씗, 蹂쇱닔濡�愿쒖갖���ъ옄\"(�곗뼱�섏슦��",
		            "commentCnt":"58"
		         },
		         {
		            "newsId":"20140417072808891",
		            "cpKorName":"留덉씠�곗씪由�,
		            "title":"�먰샇�� 1�꾨쭔��蹂듦� �대븷�� \"留덉쓬 移섏쑀�먯쑝硫�.\"",
		            "commentCnt":"54"
		         },
		         {
		            "newsId":"20140417075305220",
		            "cpKorName":"�댁뒪��,
		            "title":"源�쁽以�\"怨듦컻�곗븷 �ъ옄留��쇰갑���쇳빐, �덈� �덊빐\"(�명꽣酉�",
		            "commentCnt":"44"
		         },
		         {
		            "newsId":"20140417010206461",
		            "cpKorName":"�쒖슱�좊Ц",
		            "title":"�먯꽍��移⑤У, \"�앹〈 媛�뒫���щ컯�섎떎\" ��떟��10珥덇컙.. 留먮낫��源딆� 怨듦컧",
		            "commentCnt":"38"
		         },
		         {
		            "newsId":"20140417065905490",
		            "cpKorName":"�ㅽ룷痢좊룞��,
		            "title":"�≪��⑤룄 �쒕쪟濡��먰봽 以묎뎅�닿텒���щ옉 �щ퓤",
		            "commentCnt":"35"
		         },
		         {
		            "newsId":"20140416221009828",
		            "cpKorName":"�곕툕�대뜲�쇰━",
		            "title":"泥쒖씠�� �묒긽援�낵 怨듦컻 �곗븷 �꾪쉶 \"��몴�섏씠 �レ뼱��.�쒖빟 留롫떎\"",
		            "commentCnt":"34"
		         },
		         {
		            "newsId":"20140417023906891",
		            "cpKorName":"TV由ы룷��,
		            "title":"�쒓텒誘몃� �쒕�, '�곕━�숇꽕 �덉껜�� �쒓텒���몄씠 �녹� �좎씪���ㅽ�",
		            "commentCnt":"31"
		         },
		         {
		            "newsId":"20140416211509585",
		            "cpKorName":"�곕툕�대뜲�쇰━",
		            "title":"�먯꽍���ш낵, JTBC �댁뒪9 �ㅽ봽��\"�꾨같 諛뺤쭊洹쒖뿉 異⑸텇���뚮젮二쇱� 紐삵븳 ����"",
		            "commentCnt":"30"
		         },
		         {
		            "newsId":"20140417000604999",
		            "cpKorName":"�댁뒪��,
		            "title":"�덉씠�붿젣��\"�꾨궓移��덈뵒��寃고샎源뚯� 怨좊��덉�留�.\"(濡쒕뜑��",
		            "commentCnt":"27"
		         },
		         {
		            "newsId":"20140417031033245",
		            "cpKorName":"�숈븘�쇰낫",
		            "title":"�뚮��쒕� ��Ъ硫��뚮��ㅼ� �대뵒濡�,
		            "commentCnt":"21"
		         },
		         {
		            "newsId":"20140417080105335",
		            "cpKorName":"�쇨컙�ㅽ룷痢�,
		            "title":"'諛�쉶'瑜�蹂대뒗 �⑤� �쒖꽑李�.�쇱웳 遺덈텤���쒖껌瑜���,
		            "commentCnt":"21"
		         },
		         {
		            "newsId":"20140417074404074",
		            "cpKorName":"OSEN",
		            "title":"�곹솕怨� 18�쇨퉴吏�紐⑤뱺 �됱궗 痍⑥냼..\"�ъ깮�먯� �좎”���좊룄瑜�"",
		            "commentCnt":"20"
		         },
		         {
		            "newsId":"20140417080906485",
		            "cpKorName":"OSEN",
		            "title":"�ㅻ뒛 �쒕씪留댟룹삁���댁컡 �섎굹..諛⑹넚 遺덊솗��\"�쇱쓽以�"",
		            "commentCnt":"19"
		         },
		         {
		            "newsId":"20140416212405790",
		            "cpKorName":"�댁뒪��,
		            "title":"�먰샇��蹂듦� \"10媛쒖썡吏��쇰せ�섍퀬 �좊쭔 �섏뿀��"(�곗뼱�섏슦��",
		            "commentCnt":"18"
		         },
		         {
		            "newsId":"20140417065106432",
		            "cpKorName":"留덉씠�곗씪由�,
		            "title":"'濡쒕뜑�� 諛뺤��� \"�щ같�곕뱾��紐⑥쑀�섏쑀 �ㅼ씠�댄듃��嫄곗쭞留�"",
		            "commentCnt":"18"
		         },
		         {
		            "newsId":"20140416223105117",
		            "cpKorName":"�댁뒪��,
		            "title":"�좎슦�⑸�, 怨쇨굅 �뱀뭅�꾨뱾 180���뺣컮���몃え���쒖닲(�붾걟�쒓�議�",
		            "commentCnt":"14"
		         },
		         {
		            "newsId":"20140417071102687",
		            "cpKorName":"�ㅽ룷痢좎꽌��,
		            "title":"'源�씗�좊� �≪븘��..湲고쉷�щ뱾 �뉖뵶 �щ툕肄쒖뿉 ���μ� 李얠쓣源�",
		            "commentCnt":"14"
		         },
		         {
		            "newsId":"20140417030319013",
		            "cpKorName":"議곗꽑�쇰낫",
		            "title":"[�쇰궓�먯쓽 TV Up&Down] �섏궗臾쇱씠吏�쭔 沅곴툑�섏� �딆� '媛묐룞��",
		            "commentCnt":"12"
		         },
		         {
		            "newsId":"20140417065906492",
		            "cpKorName":"�ㅽ룷痢좊룞��,
		            "title":"[洹멸쾬���뚭퀬�띕떎] �ㅻ젋吏�벵�쇰찞 癒몃━ ���뚯떇臾�.�쇨컖源�갈쨌�ㅻ젋吏�＜�ㅻ뒗 吏꾩쭨",
		            "commentCnt":"12"
		         },
		         {
		            "newsId":"20140417074207050",
		            "cpKorName":"TV由ы룷��,
		            "title":"[肄뷪V] '�덉뒪�곕뜲�� 紐낇뭹 �뚯븙 諛⑹넚, �먯� 諛뽰뿉 ���녿굹?",
		            "commentCnt":"11"
		         }
		      ]
		   },
		   {
		      "sports":[
		         {
		            "newsId":"20140417062304220",
		            "cpKorName":"OSEN",
		            "title":"�쇱뿉��湲곗씠���뚮컻 �됰룞, �대뼸寃�遊먯빞 �섎굹",
		            "commentCnt":"94"
		         },
		         {
		            "newsId":"20140417050206843",
		            "cpKorName":"留덉씠�곗씪由�,
		            "title":"'ERA 2.05' �ㅻ굹移� 22�대떇 28K 2蹂쇰꽬 '愿대젰'",
		            "commentCnt":"59"
		         },
		         {
		            "newsId":"20140417064905414",
		            "cpKorName":"�뗫낵由ъ뒪��,
		            "title":"[�⑤룆] �볧띁�� \"�밴꺽PO 吏꾩텧��諛뺤＜��蹂듦� �쇱쓽\"",
		            "commentCnt":"38"
		         },
		         {
		            "newsId":"20140417082204754",
		            "cpKorName":"OSEN",
		            "title":"���몃줎, \"湲곗꽦�� 嫄댁뿼�쇰줈 2二�媛�웾 寃곗옣\".. �좊뜙�쒕뱶 �낆옱",
		            "commentCnt":"24"
		         },
		         {
		            "newsId":"20140417072503842",
		            "cpKorName":"�ㅽ룷痢좎꽌��,
		            "title":"[�곸긽] '�곗긽' �몃궇�먮룄 �λ텇��踰좎씪��'50m 臾댄븳 吏덉＜' �섏긽 怨�,
		            "commentCnt":"24"
		         },
		         {
		            "newsId":"20140417070904673",
		            "cpKorName":"OSEN",
		            "title":"�꾧뎄���덉긽移�紐삵븳 �대���諛섏쟾 湲곕줉 ��媛��",
		            "commentCnt":"18"
		         },
		         {
		            "newsId":"20140417062103194",
		            "cpKorName":"�뗫낵由ъ뒪��,
		            "title":"'踰좎씪 寃곗듅怨� �덉븣, 諛붾Ⅴ��爰얘퀬 肄뷀뙆�몃젅���곗듅",
		            "commentCnt":"18"
		         },
		         {
		            "newsId":"20140417064506357",
		            "cpKorName":"�ㅽ룷痢좊룞��,
		            "title":"�ъ옄�띻뎄 ��FA �ы띁留��섑샊",
		            "commentCnt":"17"
		         },
		         {
		            "newsId":"20140416203507564",
		            "cpKorName":"�쒖슱寃쎌젣",
		            "title":"ISU 源�뿰���쒖냼�� 蹂멸꺽 議곗궗 李⑹닔.. ISU �꾩썝��'3二����먭껐 ��寃�",
		            "commentCnt":"16"
		         },
		         {
		            "newsId":"20140417073306953",
		            "cpKorName":"MK�ㅽ룷痢�,
		            "title":"癒밸㉨��LG, 6�고뙣 ���ㅼ쥌��'利먭린���쇨뎄'",
		            "commentCnt":"14"
		         },
		         {
		            "newsId":"20140417062204211",
		            "cpKorName":"OSEN",
		            "title":"諛��ㅼ펲-濡쒗떚�� 臾쇱쓬�쒕� �먮굦�쒕줈 諛붽씔 諛고꽣由�,
		            "commentCnt":"13"
		         },
		         {
		            "newsId":"20140417070605648",
		            "cpKorName":"OSEN",
		            "title":"'6�고뙣 �� LG, 誘몄�洹쇳븳 �댄럹�댁뒪 �ㅻ뵒��,
		            "commentCnt":"13"
		         },
		         {
		            "newsId":"20140417080504407",
		            "cpKorName":"�댁뒪��,
		            "title":"'21�몄쓽 �뚮�' WWE 癲곷젅�щ윭 �섏씠吏�\"�섏씠�곗쐢 �곴��놁뼱\"",
		            "commentCnt":"12"
		         },
		         {
		            "newsId":"20140417084106105",
		            "cpKorName":"留덉씠�곗씪由�,
		            "title":"'諛뺤슜��39異쒕（ 9�앹젏' LG���꾩떎 �쒕윭��泥숇룄",
		            "commentCnt":"12"
		         },
		         {
		            "newsId":"20140417080705441",
		            "cpKorName":"OSEN",
		            "title":"'201�� �먰씎誘� 由щ쾭��씠 �몃━���좊쭩二�3紐�以���紐�,
		            "commentCnt":"12"
		         },
		         {
		            "newsId":"20140417074903145",
		            "cpKorName":"�ㅽ룷痢좎꽌��,
		            "title":"[源�쁽湲곗쓽 鍮��댁뼱]由щ쾭�� �앸궇 �뚭퉴吏��앸궃 寃��꾨땲��,
		            "commentCnt":"11"
		         },
		         {
		            "newsId":"20140417064511373",
		            "cpKorName":"�ㅽ룷痢좊룞��,
		            "title":"�섏��� �쇱빱猷몄뿉 �낆쁺�듭���遺숈씤 �댁쑀",
		            "commentCnt":"11"
		         },
		         {
		            "newsId":"20140417075503251",
		            "cpKorName":"OSEN",
		            "title":"[�명꽣酉�] �쒗슚�� \"泥��쒓레留덊겕 ����異⑷꺽, ���쇳빐 二쇨린 �レ뼱\"",
		            "commentCnt":"10"
		         },
		         {
		            "newsId":"20140417070305595",
		            "cpKorName":"�쇨컙�ㅽ룷痢�,
		            "title":"[湲곗옄���� �좉퀎瑜�諛곕뱶誘쇳꽩�묓쉶�μ쓽 遺덊렪���깆옣",
		            "commentCnt":"9"
		         },
		         {
		            "newsId":"20140417060312112",
		            "cpKorName":"MK�ㅽ룷痢�,
		            "title":"'梨뷀봽' �ы빆��ACL 吏덉＜媛�怨좊쭥怨��먮옉�ㅻ윭���댁쑀",
		            "commentCnt":"8"
		         }
		      ]
		   }
		]
	}
	/*
	Manynews.prototype.getJsonData = function()
	{
		var newsData = this.jsonData[0];
		var enterData = this.jsonData[1];
		var sportsData = this.jsonData[2];
	}
	*/

	Manynews.prototype.start = function()
	{
		var news = this.getNewsData();
		var enter = this.getEnterData();
		var sports = this.getSportsData();

		for (var i = 0; ; i++)
		{
			aElementId = "news" + i;

			aElement = document.getElementById(aElementId);

			if (aElement == null)
				break;

			aElement.innerHTML = "<a href = 'http://media.daum.net/v/" + news.news[i].newsId + "' class = 'tit'>" + news.news[i].title + "</a>";
		}
	};
/*	Manynews.prototype.moreBtn = function()
	{
		var news = this.getNewsData();

		var newsList = document.getElementById("newsList");

		for (var i = 5; i < news.news.length; i++)
		{
			aElementId = "news" + i;

			newsList.innerHTML += "<li class = 'fst'>
										<div id = '" + aElementId + "' class = 'cont'>
											<a href = 'http://media.daum.net/v/" + news.news[i].newsId + "' class = 'tit'>" + news.news[i].title + "</a>
										</div>
									</li>";
		}
	}
*/
	Manynews.prototype.getNewsData = function()
	{
		return jsonData[0];
	};

	Manynews.prototype.getEnterData = function()
	{
		return jsonData[1];
	};

	Manynews.prototype.getSportsData = function()
	{
		return jsonData[2];
	};

	Manynews.prototype.getNewsId = function()
	{
		
	};

	Manynews.prototype.getNewsTitle = function()
	{
		
	};

	Manynews.prototype.setElementByLiTag = function()
	{
	//	var newsData = this.getNewsData();

	//	for (var i = 0; i < liElement.length; i++)
	//		liElement[i].childNodes[i].firstChild.nodeValue = "<a href = 'http://media.daum.net/v/{{'" + newsData[i].newsId + "'}}' class = 'tit'>" + newsData[i].title + "</a>";

		// var i = 0;

		// while (this.liElement.firstChild.firstChild.firstChild)
		// 	this.liElement.remove(this.liElement.firstChild.firstChild.firstChild);

		// this.liElement.firstChild.firstChild.appendChild(document.createTextNode("<a href = 'http://media.daum.net/v/{{'" + this.jsonData["news"][i].newsId + "'}}' class = 'tit'>" + this.jsonData["news"][i].title + "</a>"));

	//	console.log(this.liElement.length);
	//	
	//	for (var i = 0; i < this.liElement.length; i++)
	//		liElement[i].childNodes[i].firstChild.nodeValue = "<a href = 'http://media.daum.net/v/{{'" + newsData[i].newsId + "'}}' class = 'tit'>" + newsData[i].title + "</a>";
	};

	window.Manynews = Manynews;

})();