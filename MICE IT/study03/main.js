var phone = new person('¿µÈñ', new IPhone('010-1234-5678'));
var phone2 = new person('Ã¶¼ö', new Android('010-5678-1234'));

Android.prototype.sendSMS(phone.name, '¾È³ç? Ã¶¼ö¾ß.');
Android.prototype.sendSMS(phone2.name, '¾È³ç? ¿µÈñ¾ß.');
Android.prototype.getSMS(phone);
Android.prototype.getSMS(phone2);


/*
Android.prototype.sendSMS(phone.name, '¾È³ç? Ã¶¼ö¾ß.');
Android.prototype.sendSMS(phone2.name, '¾È³ç? ¿µÈñ¾ß.');
Android.prototype.getSMS(phone);
Android.prototype.getSMS(phone2);
*/