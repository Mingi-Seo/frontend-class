var phone = new person('����', new IPhone('010-1234-5678'));
var phone2 = new person('ö��', new Android('010-5678-1234'));

console.log(myPhone.color);
console.log(myPhone.model);

myPhone.setNumber('010-1234-5678');
myPhone.call();

window.close();