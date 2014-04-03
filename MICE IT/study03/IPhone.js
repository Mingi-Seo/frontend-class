(function()
{
	var phoneNumber = '';
	
	function IPhone(userNumber)
	{
		phoneNumber = userNumber;
	}
	
	IPhone.prototype = new Phone();
	IPhone.prototype.constructor = IPhone;
	
	window.IPhone = IPhone;
})();