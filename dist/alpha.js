var alpha = {
	
	
	//(1/15/15)	
	//===================================================================
	//======= Sending and Requesting Data
	//===================================================================
	post: function(url, array) {
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		}
		else {
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("POST",url,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(array);
		// alpha.post('http://google.com', 'name=john&email=john@gmail.com'); 
	},
	
	
	//(1/15/15)	
	//===================================================================
	//======= The URL
	//===================================================================
	thisurl: function() {
		return window.location.href;
		// alpha.thisurl(); 
	}, 
	
	openurl: function(url) {
		location.href=url;
		// alpha.openurl('http://'); 
	},
	
	
	//(1/15/15)	
	//===================================================================
	//======= Inputs 
	//===================================================================
	value: function(name) {
		if(name.indexOf("#") >= 0) {
			// By ID
			return document.getElementById(name).value;
		}
		else {
			// By Class Name
			return document.getElementsByClassName(name).value;
		}
		// alpha.value('name'); 
	}
}