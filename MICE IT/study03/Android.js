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
		
		if (name == "����")
			console.log("[����]" + name + "���� '" + msg + "' �޽����� ���½��ϴ�.");
		
		else if (name == "ö��")
			console.log("[ö��]" + name + "���� '" + msg + "' �޽����� ���½��ϴ�.");
	}
	
	Android.prototype.getSMS = function(name)
	{
		if (name == "����")
			console.log("[ö��]" + name + "���� '" + msg + "' �޽����� �޾ҽ��ϴ�.");

		else if (name == "ö��")
			console.log("[����]" + name + "���� '" + msg + "' �޽����� �޾ҽ��ϴ�.");
	};
	
	Android.prototype.getNumber = function()
	{
		return phoneNumber;
	};
	
	
	Android.prototype.getNumber();
	
	window.Android = Android;
})();