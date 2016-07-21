

var add = function(number1, number2) {
	return number1 * .10;
};

var subtract = function(number1, number2) {
	return number1 * .14;
};

var multiply = function(number1, number2) {
	return number1 * .18;
};

var divide = function(number1, number2) {
	return number1 * .30;
};

$(document).ready(function() {



 $("form#add").submit(function(event){

	var primary = $("input:radio[name=optradio]:checked").val();
	var number1 = parseInt($("#num1").val());
	var number2 = parseInt($("#num2").val());

	if (primary === "add") {
		var result = add(number1, number2);
		$("#addoutput").text(result);
} else if (primary === "subtract") {
		var result = subtract(number1, number2);
	 	$("#addoutput").text(result);
} else if (primary === "divide") {
		var result = divide(number1, number2);
		$("#addoutput").text(result);
} else if (primary === "multiply") {
		var result = multiply(number1, number2);
 		$("#addoutput").text(result);
}

	event.preventDefault();
});


});

