var timeout = null;
var oldval = "";
var cardIndex = 5;

function debtPayOffCalculator() {

	// $('#debtPayOffCalculator').submit(function (event) { //say green
	//var BoolError = 1;
	let patt = /^[0-9]*\.?[0-9]+$/;
	let TotalDebt = $('#TotalDebt').val();
	//let TotalDebtResult = patt.test(TotalDebt);
	let MonthlyPaymentVal = $('#totalMonthlyPayment').val();
	//let  MonthlyPaymentResult = patt.test(MonthlyPaymentVal);

	if (TotalDebt != "") {
		if (MonthlyPaymentVal != '') {
			var formData = {
				'totalDebtAmount': $('input[name=totalDebtAmount]').val(),
				'monthlyPayment': $('input[name=monthlyPayment]').val(),
			};
			$.ajax({
				type: 'POST',
				url: 'https://www.ovlg.com/calc/debt-payoff-calculator',
				data: formData,
				crossDomain: true,
				dataType: 'html',
				encode: true,
				success: function (data) {
					if (data.error) {
						$('#getData').html(data);
					} else {
						/*window.history.pushState({
							path: calcBase+'/debt-payoff.html.html'
						}, '', calcBase+'/debt-payoff.html?step=2');*/
						$('#details_you_need_to_give').hide();
						$('#intro_text').hide();
						$('#First_Step').removeAttr('disabled', 'disabled');
						$('#Second_Step').removeAttr('disabled', 'disabled');
						$('#Third_Step').removeAttr('disabled', 'disabled');
						/*$('#First_Step').removeClass('active');*/
						$('#Second_Step').addClass('active');
						$('#Third_Step').removeClass('active');
						$('#FirstStep').hide();
						$('#SecondStep').show();
						$("#backbutton").css("display", "block");
						$('#getData').html(data);
						initDebtPayOffCalculatorStep2();
						console.log(data);
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					$('#getData').html(data);
				}
			});
		} else {
			alert('Please enter valid Monthly Payment');
			$('#totalMonthlyPayment').val('').focus();
		}
	} else {
		alert('Enter a Valid Debt Amount');
		$('#TotalDebt').val('').focus();
	}
	return false;
	//event.preventDefault();
	// });
}

function initDebtPayOffCalculatorStep2() {

	$('#backbutton').on('click', function () {
		$('#FirstStep').addClass('active');
		$('#Second_Step').removeClass('active');

		$('#SecondStep').hide();
		$('#FirstStep').show();
		$('#backbutton').hide();

		$("#First_Step").removeAttr("disabled", "disabled");
		$("#Second_Step").attr("disabled", "disabled");
		$("#Third_Step").attr("disabled", "disabled");


		/*window.history.pushState({
			path: calcBase+'/debt-payoff-new.html'
		}, '', calcBase+'/debt-payoff-new.html?step=1');*/
	});
	$('#gotostep3').on('click', function () {
		$("#First_Step").removeAttr("disabled", "disabled");
		$("#Second_Step").removeAttr("disabled", "disabled");
		$("#Third_Step").removeAttr("disabled", "disabled");

		/*$('#First_Step').removeClass('active');
		 $('#Second_Step').removeClass('active');*/
		$('#Third_Step').addClass('active');

		$('#SecondStep').hide();
		window.history.pushState({
			path: calcBase + '/debt-payoff.html.html'
		}, '', calcBase + '/debt-payoff.html?step=3');
		$('#ThirdStep').show();
		get_the_form();
	});
}

window.onload = function () {
	$('#debtPayOffCalculator').submit(function (e) {
		e.preventDefault();
		debtPayOffCalculator();
	});
}