// option 1:
function drawTree(x) {

	for (var i = 0; i < x; i++) {
		var star = " ";
		for (var j = 0; j < i; j++) {
			star += "*";
		}
		console.log(star);
	}

}	

drawTree(10)

//option 2:

function drawTreeHTML(y)  { 
 

	for (var i = 0; i < y; i++) {

	   for (var j = y-1; j > i; j--) {
	      document.write("&nbsp&nbsp"); 
	   }

	   for (var k = 0; k<= (i*2); k++) {
	      document.write("*"); 
	   }

	   document.write("<br>");
	}
	
	
}

drawTreeHTML(10)

console.log("\n");
console.log("\n");
console.log("\n");


// option 3: 

function drawTreeConsoleCenter(z)  { 
 

	for (var i = 0; i < z; i++) {
		var star = " ";
	   for (var j = z-1; j > i; j--) {
	      star += " ";
	   }

	   for (var k = 0; k<= (i*2); k++) {
	      star += "*";
	   }

	  	console.log(star);
	}
	
	
}

drawTreeConsoleCenter(10)

