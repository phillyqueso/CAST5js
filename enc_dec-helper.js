//thanks to @Borgar: http://stackoverflow.com/questions/1240408/reading-bytes-from-javascript-string
function Str2Bytes(str) {
  var ch, st, re = [];
  for (var i = 0; i < str.length; i++ ) {
    ch = str.charCodeAt(i);  // get char 
    st = [];                 // set up "stack"
    do {
      st.push( ch & 0xFF );  // push byte to stack
      ch = ch >> 8;          // shift value down by 1 byte
    }  
    while (ch);
    // add stack contents to result
    // done because chars have "wrong" endianness
    re = re.concat( st.reverse() );
  }
  // return an array of bytes
  return re;
}


// String to hex conversion
function Str2Hex(s) {
	var hex = "0123456789abcdef";
	var r = '';

	for(var i=0; i < s.length; i++) {
		b = s.charCodeAt(i);
		r += hex.charAt((b>>>4)&0xf) + hex.charAt(b&0xf);
	}
	return r;
}

// Hex to string conversion
function Hex2Str(h) {
	var s = '';
	for(var i=0; i<h.length; i+=2)
		s+= String.fromCharCode(parseInt(h.slice(i, i+2), 16));
	return s;
}
