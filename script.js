//To calculate the Amount
function compute(){
    var principal = parseFloat(document.getElementById("principal").value);
	var rate = parseFloat(document.getElementById("rate").value);
	var years = parseInt(document.getElementById("years").value);
	var interest = principal * years * rate/100 ;// converting the values in simple interest
	var year = new Date().getFullYear()+parseInt(years); //to convert the 'No of Years' into the actual year in future.
	var amount = principal + interest; //Total amount as sum of principal and interest
	if( principal >0 ){
		document.getElementById("result").innerHTML="If you deposit <kbr>"+principal+"</kbr>,\<br\>at an interest rate of <kbr>"+rate+"%</kbr>\<br\>You will receive an amount of <kbr>"+amount+"</kbr>,\<br\>in the year <kbr>"+year+"</kbr>\<br\>";
	}else {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}
}
//To display and select range 
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        