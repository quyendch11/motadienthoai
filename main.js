let iphone = new Mobile(true, 50, [], [], []);
let samsung = new Mobile(true, 80, [], [], []);
if (iphone.checkMobileStatus()) {
    document.write('Điện thoại đang bật<br>');
} else {
    document.write('Điện thoại đang tắt<br>');
}
document.write('Pin trước khi sạc: ' + iphone.battery + '<br>')
iphone.chargeBattery();
document.write('Pin sau khi sạc: ' + iphone.battery + '<br>')
iphone.textMessage('Hello điện thoại Samsung<br>');
iphone.textMessage('IPhone hello Samsung<br>');
document.write(`Hộp thư nháp của iphone: ${iphone.draft}<br>`)
iphone.sentMessage(samsung);
document.write(`Hộp thư nháp của iphone sau khi gửi: ${iphone.draft}<br>`)
document.write(`Hộp thư đi của iphone: ${iphone.sentBox}<br>`)
document.write(`Hộp thư đến của samsung: ${samsung.inbox}<br>`)