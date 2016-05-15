# JSRegexs

Useful validate method with JavaScript

# Method List

* 判断是否是手机号码

> isValidPhoneNum,

* 判断是否正确邮箱格式

>isValidEmail

* 判断是否正确网址格式

>isValidUrl

* 判断是否正确车牌号格式

>isValidCarNo

* 判断是否正确邮政编码格式

>isValidPostalCode

* 判断是否汉字

>isValidChinese

* 判断是否正确IP格式

>isValidIP

* 判断是否正确身份证格式

>isValidIdCardNum

* 判断是否正确工商税号格式

>isValidTaxNo

# Usage

These methods are all bind to global variable `V` or `validate`, just call like `V.isValidPhoneNum(phoneNum)` or `validate.isValidPhoneNum(phoneNum)`.

Also String or Number prototype methods all extended, use like this: `str.isValidPhoneNum()`.
 
Number prototype methods: `isValidPhoneNum` and `isValidPostalCode` are available.

# LICENSE

MIT