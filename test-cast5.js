function test1() {

	// 16 byte key in hex
	
	var key = [0x01, 0x23, 0x45, 0x67, 0x12, 0x34, 0x56, 0x78, 
			   0x23, 0x45, 0x67, 0x89, 0x34, 0x56, 0x78,  0x9a];
	
	var plainText = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef];
	
	var expectedCryptText = [0x23, 0x8b, 0x4f, 0xe5, 0x84, 0x7e, 0x44, 0xb2];
	
	// construct js object
	
	var c = new cast5(key);
	var i = 0;
	
	if (c) {
		var cryptText = c.Encrypt(plainText);
		
		for(i = 0; i < 8; i++) {
			if(cryptText[i] != expectedCryptText[i]) {
				alert("CAST5 - encrypt Test Failed. " + cryptText + " != " + expectedCryptText);
				break;
			}
		}
		if(i == 8) {
			alert("CAST5 - encryt Test Passed. " + cryptText + " == " + expectedCryptText);
		}
		
		var verifyPlain = c.Decrypt(cryptText);
		
		for(i = 0; i < 8; i++) {
			if( verifyPlain[i] != plainText[i]) {
				alert("CAST5 - decrypt Test Failed. " + verifyPlain + " != " + plainText);
				break;
			}
		}
		if(i == 8) {
			alert("CAST5 - decrypt Test Passed. " + verifyPlain + " == " + plainText);
		}
	}
}

//test1();
