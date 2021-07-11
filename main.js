$(document).ready(function () {

			// Prepend //

			$('#btn1').click(function () {
				$('#prepend').prepend('<b>Hello Furkan Yeasin!</b> ');
			});

			// Append //

			$('#btn2').click(function () {
				$('#append').append(' <b>Hello Tuba Mama!</b>');
			});

			// Before //
			$('#btn3').click(function () {
				$('#before').before('Ashrafi Islam Tuba ')
			});

			// After //
			$('#btn4').click(function () {
					$('#after').after(' 
						Furkan Yeasin ')
					});


			});
