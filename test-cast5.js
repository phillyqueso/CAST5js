// 16 byte key
var key = "0123456712345678234567893456789A";

// construct js object
var c = new cast5(key);

var plainText = "0123456789ABCDEF";
var expectedCryptText = "238b4fe5847e44b2";

var cryptText = c.Encrypt(plainText);

if ( cryptText == expectedCryptText ) {
	print("CAST5js - Test Passed. " + cryptText + " == " + expectedCryptText);
} else {
	print("CAST5js - Test Failed. " + cryptText + " != " + expectedCryptText);
}

/*

var verifyPlain = c.Decrypt(cryptText);

if ( verifyPlain == plainText ) {
	print("CAST5js - Test Passed. " + verifyPlain + " == " + plainText);
} else {
	print("CAST5js - Test Failed. " + verifyPlain + " != " + plainText);
}

*/