var phone = new person('����', new IPhone('010-1234-5678'));
var phone2 = new person('ö��', new Android('010-5678-1234'));

Android.prototype.sendSMS(phone.name, '�ȳ�? ö����.');
Android.prototype.sendSMS(phone2.name, '�ȳ�? �����.');
Android.prototype.getSMS(phone);
Android.prototype.getSMS(phone2);


/*
Android.prototype.sendSMS(phone.name, '�ȳ�? ö����.');
Android.prototype.sendSMS(phone2.name, '�ȳ�? �����.');
Android.prototype.getSMS(phone);
Android.prototype.getSMS(phone2);
*/