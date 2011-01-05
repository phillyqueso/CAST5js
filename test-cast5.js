function test1() {

	// 16 byte key string
	//var key = "0123456712345678234567893456789A";
	
	// 16 byte key in hex
	var key = [0x01, 0x23, 0x45, 0x67, 0x12, 0x34, 0x56, 0x78, 0x23, 0x45, 0x67, 0x89, 0x34, 0x56, 0x78, 0x9A];
	
	// construct js object
	var c = new cast5(key);
	if (c) {	
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
	}
}