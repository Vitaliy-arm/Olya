/*$(document).ready(function() {

	$("#submitRegFormButton").on("click", function() {
  		if (checkRegForm()){
  		$("#RegForm").submit();
  		}
  	});
});


function checkRegForm() {
var checkResult;
	$(".required").each(function(){
	
	
	
		if($(this).val() == ''){
			$(this).addClass('error');
			console.log("false");
			checkResult = false;
		} else {
			console.log("true");
			checkResult = true;
		}
	
		
		
	});
	return checkResult;
}

	;


*/

function reg (a){
	for(i=0; i<9; i++){
			if(a.elements[i].value==''){
				alert ("Вы не заполнили все обязательные поля");
				a.elements[i].focus();
				return false;				
				}
				
			if(a.password.value != a.repeadpassword.value){
				alert ("Пароли не совпадают");
				a.password.focus();
				return false;				
				}
			document.form.submit();		
	}
	
}

/*function check(){
				var chbox;
				chbox=document.getElementById('rulles');
				if (chbox.checked){
				document.form.submit();
				}
				else{
				alert("Вы не согласились с правилами сайта")
				}
			
			
				}
*/

