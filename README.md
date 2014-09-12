#JavaScript QRCode reader for HTML5 enabled browser.
2011 Lazar Laszlo  http://lazarsoft.info

Try it online: http://webqr.com

This is a port of ZXing qrcode scanner, http://code.google.com/p/zxing.

##Usage:

```html
<script src="build/qrcode.min.js"></script>
```

Decode image with: `qrcode.decode(source, callback)`.

* __source__: url or DataURL string, canvas element, image element
* __callback__: callback with one argument containing data string from the QRCode

###Example: 

```javascript
    qrcode.decode("image_url", function (result) {
        console.log(result);
    });
```