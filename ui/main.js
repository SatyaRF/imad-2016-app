// console.log('Loaded!');

// // Change text if div

// // var element = document.getElementById('main-text');
// // element.innerHTML = 'New Value';	

// //move the image
// var img = document.getElementById("madi");
// var marginLeft = 0;

// function moveRight(){
// 	marginLeft = marginLeft + 10;
// 	img.style.marginLeft = marginLeft + 'px';
// }

// img.onclick = function(){
// 	var interval = setInterval(moveRight, 100); // for every 100 miliseconds moveright function will be called
// 	//img.style.marginLeft = '100px';
// };

var button = document.getElementById('counter');

//var counter = 0;

button.onclick = function(){

	//Create a request object
	var request = new XMLHttpRequest();

	//Capture the response and store it in a variable
	request.onreadystatechange = function(){
		if (request.readyState === XMLHttpRequest.DONE) {
			//Take some ction
			if(request.status == 200){
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	};

	//Make req to counter endpoint
	request.open('GET', 'http://satyarf.imad.hasura-app.io/counter', true);
    request.send(null);


	// //Render it in correct span
	// counter = counter + 1;
	// var span = document.getElementById('count');
	// span.innerHTML = counter.toString();

}