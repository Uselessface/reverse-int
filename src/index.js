module.exports = function reverse (n) {
 	if (n < 1) n = n*-1;
	n = n + "";
	return n.split("").reverse().join("");
} 

