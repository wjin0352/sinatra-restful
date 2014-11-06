
var myurl = 'http://localhost:4567/song/ajax/';

var getId = function(id){
		alert(id);
		var myid = id;


	
	// var id = $(this).data("id");
	// $('#ajax').onclick(function(){
$('#ajax').onreadystatechange(function(){
		$.ajax({
			url: myurl + myid.toString(),
			type: 'GET',
			success: function(data){
				// $('#ajaxdata').append('<p>data</p>');
				console.log('success', data);
			},
		// });
		// error: function(XMLHttpRequest, textStatus, errorThrown){
		// 	console.log('error', errorThrown);
		// }
	});

});


}




var myurl = 'http://localhost:4567/song/ajax/';

var getId = function(id){
		alert(id);
		var myid = id;


	
	// var id = $(this).data("id");
	// $('#ajax').onclick(function(){
$('#ajax').onreadystatechange(function(){
		$.ajax({
			url: myurl + myid.toString(),
			type: 'GET',
			success: function(data){
				// $('#ajaxdata').append('<p>data</p>');
				console.log('success', data);
			},
		// });
		// error: function(XMLHttpRequest, textStatus, errorThrown){
		// 	console.log('error', errorThrown);
		// }
	});

});


}




// var url = "http://localhost:4567/songs";



// function setHtml(id,title,lyrics,length) {
//     document.getElementById('id').innerText = id;
//     document.getElementById('title').innerText = title;
//     document.getElementById('lyrics').innerHTML = lyrics;
//     document.getElementById('length').innerHTML = length;

//     //document.getElementById('selectedTodo').innerText = id;
//     // var oop = document.getElementById('operations');
//     // oop.setAttribute('style','display:block');
// }


// function doit(){

// 	var httpRequest;

// 	if (window.XMLHttpRequest){
// 		httpRequest = new XMLHttpRequest();
// 		console.log('successful XMLHttprequest')
// 	} else {
// 		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
// 		console.log('successful microsoft xmlhttp');
// 	}
// 	httpRequest.onreadystatechange = function(){
// 		if (httpRequest.readyState == 4){
// 			console.log('readystate is good 4');
// 			document.getElementById("val").innerHTML = httpRequest.responseText;

// 				title = song.title;
// 				lyrics = song.lyrics;
// 				length = song.length;
// 				id = song.id;

// 				setHtml(id,title,lyrics,length);
// 				alert("you deleted #{song.title}")
			
// 		}else {
// 		alert('broken');
// 	}
// 			httpRequest.open("GET", url, true);
// 			httpRequest.send();

		
// }
// 	} 





// Step 1 – How to make an HTTP request
// making a ajax httprequest, first checking version of browser so i can make the instance of the httprequest method
// var httpRequest;
// 	if(window.XMLHttpRequest){
// 		// mozilla firefox safari IE7+
// 		httpRequest = new XMLHttpRequest();
// 	} else if(window.ActiceXObject){
// 		// IE6 and older versions
// 		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
// 	}

// Next I decide what to do once I received a response back from the server from my request
// At this stage, you just need to tell the HTTP request object which JavaScript function will 
// handle processing the response. This is done by setting the onreadystatechange property of 
// the object to the name of the JavaScript function that should be called when the state of the 
// request changes

// httpRequest.onreadystatechange = nameoffunction;

	// Note: above that there are no parentheses after the function name and no parameters passed,
	 // because you're simply assigning a reference to the function, rather than actually calling 
	 // it. Also, instead of giving a function name, you can use the JavaScript technique of defining 
	 // functions on the fly (called "anonymous functions") and define the actions that will process
	 //  the response right away, like this:

// httpRequest.onreadystatechange = function(){
	// process the server response
// };

	// Next, after you've declared what will happen as soon as you receive the response, 
	// you need to actually make the request. You need to call the open() and send() methods of the 
	// HTTP request class, like this:

// httpRequest.open('GET','http://www.example.org/some.file', true);
	// The first parameter of the call to open() is the HTTP request method – GET, POST, 
	// HEAD or any other method you want to use and that is supported by your server

	// The second parameter is the URL of the page you're requesting. As a security feature, you cannot call 
	// pages on 3rd-party domains. Be sure to use the exact domain name on all of your pages or you will get a 
	// "permission denied" error when you call open(). A common pitfall is accessing your site by domain.tld, 
	// but attempting to call pages with www.domain.tld. 

	// The optional third parameter sets whether the request is asynchronous. If TRUE (the default),
	//  the execution of the JavaScript function will continue while the response of the server has not 
	//  yet arrived. This is the A in AJAX.

// httpRequest.send(null);

	// The parameter to the send() method can be any data you want to send to the server
	//  if POST-ing the request. Form data should be sent in a format that the server can parse easily.
	//   This can be as a query string, like:

	// "name=value&anothername="+encodeURIComponent(myVar)+"&so=on"  or JSON , SOAP formats etc

	// Note that if you want to POST data, you may have to set the MIME type of the request. 
	// For example, use the following line before calling send() for form data sent as a query string:
	// httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


// Step 2 – Handling the server response
  // when we sent the request to server, we made a function that would handle the response
  // First, the function needs to check for the state of the request. If the state has the value of 4, 
  // that means that the full server response has been received and it's OK for you to continue processing it.

// if(httpRequest.readyState	=== 4){
	// all is well, response received
// } else {
	//  still not ready
// }
			// readyState values
			// 0 (uninitialized)
			// 1 (loading)
			// 2 (loaded)
			// 3 (interactive)
			// 4 (complete)

			// then check response codes 

// if(httpRequest.status == 200){
// 	// good to go
// } else {
// 	// problem with request
// }


 // after this, you can do whatever you want with the data the server has sent to you
 // YOU HAVE TWO OPTIONS TO ACCESS THE DATA

// httpRequest.responseText – returns the server response as a string of text
// httpRequest.responseXML – returns the response as an XMLDocument object you can traverse using the JavaScript DOM functions

























