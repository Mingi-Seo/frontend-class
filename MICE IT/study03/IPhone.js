(function()
{
	var phoneNumber = '';
	
	function IPhone(userNumber)
	{
		phoneNumber = userNumber;
	}
	
	IPhone.prototype = new Android();
	IPhone.prototype.constructor = IPhone;
	
	window.IPhone = IPhone;
})();