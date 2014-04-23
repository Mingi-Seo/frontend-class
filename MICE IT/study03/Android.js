(function()
{
	var phoneNumber = '';

	function Android(userNumber)
	{
		phoneNumber = userNumber;
	}

	Android.prototype.sendSMS = function(name, msg)
	{
		
//		this.toPhone = toPhone;
		this.msg = msg;
		
		if (name == "영희")
			console.log("[영희]" + name + "에게 '" + msg + "' 메시지를 보냈습니다.");
		
		else if (name == "철수")
			console.log("[철수]" + name + "에게 '" + msg + "' 메시지를 보냈습니다.");
	}
	
	Android.prototype.getSMS = function(name)
	{
		if (name == "영희")
			console.log("[철수]" + name + "에게 '" + msg + "' 메시지를 받았습니다.");

		else if (name == "철수")
			console.log("[영희]" + name + "에게 '" + msg + "' 메시지를 받았습니다.");
	};
	
	Android.prototype.getNumber = function()
	{
		return phoneNumber;
	};
	
	
	Android.prototype.getNumber();
	
	window.Android = Android;
})();