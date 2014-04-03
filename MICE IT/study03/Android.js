(function()
{
	var phoneNumber = '';

	function Android(userNumber)
	{
		phoneNumber = userNumber;
	}

	Android.prototype.sendSMS = function(toPhone, msg)
	{
		this.toPhone = toPhone;
		this.msg = msg;
		
		console.log()
	}
	
	Android.prototype.getSMS = function(fromPhone, msg)
	{
		if (phoneNumber === "")
			console.log("개통하세요!");

		else
			console.log("전화를 겁니다!");
	};
	
	Android.prototype.getNumber = function()
	{
		return phoneNumber;
	};
	
	getNumber();
	
	window.Android = Android;
})();