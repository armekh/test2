function render (){
	console.log('clicked');

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'my.json');

	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData[0]);
	}

	ourRequest.send();

}