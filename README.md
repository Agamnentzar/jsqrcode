#JavaScript QRCode reader for HTML5 enabled browser.
2011 Lazar Laszlo  http://lazarsoft.info

Try it online: http://webqr.com

This is a port of ZXing qrcode scanner, http://code.google.com/p/zxing.

##Usage:

```html
<script src="build/qrcode.min.js"></script>
```
```javascript
require(['qrcode'], function (qrcode) { // AMD
	// ...
});
```
```javascript
var qrcode = require('qrcode'); // CommonJS
```

Decode image with: `qrcode.decode(source, callback)`

* __source__: url, DataURL string, canvas element or image element
* __callback__: callback with one argument containing data string decoded from the QRCode image

###Example:

```javascript
// from URL
qrcode.decode("qr_code.png", function (result) {
    console.log(result);
});

// from DOM element
qrcode.decode(document.getElementById('myCanvas'), function (result) {
	console.log(result);
});
```