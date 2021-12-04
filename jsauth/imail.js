
$(document).ready(function() {
	var $form = $('#imail_form');
	$form.on("submit", function(event){
		event.preventDefault();
				
		
		let $formMessages = $('#form_messages');

	  $.ajax({
	  	method 	 	: 'POST',
	  	url   	 	: 'imailer.php',
	  	data  	 	: $(this).serialize(),
	  	beforeSend: function(){	
					$formMessages.fadeOut();
					setTimeout(
					$("#submit").html('<i class="bi bi-box-arrow-in-right"></i> &nbsp; Checking...'), 3000);
					  },
	  	}).then(function(data){
			  let response = JSON.parse(data);

			  if (response.stat == 0){
				$formMessages.fadeIn().html('<p class="alert alert-success"> <i class="fa fa-check-square-o" aria-hidden="true"></i> &nbsp; '+ response.msg +'!</p>');
				  $("#submit").html('<i class="bi bi-check-square"></i> &nbsp; Submit Another');
				  $form.trigger('reset');	   
					}
					
				else if(response.stat == 1){									
				  $formMessages.fadeIn(1000, function(){						
					  $formMessages.html('<div class="alert alert-danger"> <i class="bi bi-lock-fill"></i> &nbsp; '+ response.msg +'!</div>');
					  $("#submit").html('<i class="bi bi-box-arrow-in-right"></i> &nbsp; Try Again');
					  $form.trigger('reset');
						});
					}
		
		  }).fail(function(data){
			$formMessages.fadeIn(1000, function(){						
				$formMessages.html('<div class="alert alert-danger"> <i class="bi bi-lock-fill"></i> &nbsp; Error sending message. Kindly try again later!</div>');
				$("#submit").html('<i class="bi bi-box-arrow-in-right"></i> &nbsp; Try Again');
				$form.trigger('reset');
				  });
			
		  });	
	});
});