/*
 * Hooks into payment methods radio buttons
 *
 * depends on woocommerce.js
 */
jQuery(function($)
{
	if( $('body').hasClass( 'woocommerce-order-pay' ) )
	{
		const pay_order_page = $('#add_fee_info_pay');

		if( pay_order_page.length > 0 )
		{
				//	bugfix in WC core - ensure, that the payment gateway for the order is selected - not the first one as in core
			var gateway = pay_order_page.attr('add_fee_paymethod');
			var gateway_sel = $('#payment').find("input[name='payment_method']:checked").attr('value');

			if( gateway !== gateway_sel )
			{
				$(".payment_methods input[name='payment_method'][value='" + gateway + "']").attr( "checked", true );
			}

			var fixed_gateway = pay_order_page.attr('add_fee_fixed_gateway');
			if( fixed_gateway === 'yes' )
			{
				$('body').find('form#order_review .payment_methods li').each(function ()
				{
					var radio = $(this).find('input.input-radio');
					if( ( radio.length > 0 ) && ( ! radio.is(':checked') ) )
					{
						$(this).remove();
					}
					return;
				});
			}

			$( '.payment_methods input.input-radio' ).on( 'change', function()
			{
				$('#addfeeerror').remove();

				var selector = '.woocommerce';
				$(selector).block( {
							message: null,
							overlayCSS: {
									background: '#fff url(' + add_fee_vars.add_fee_loader + ') no-repeat center',
									backgroundSize: '16px 16px',
									opacity: 0.6
									}
						} );

				var senddata = {
					action: pay_order_page.attr('add_fee_action'),
					add_fee_order: pay_order_page.attr('add_fee_order'),
					add_fee_pay: pay_order_page.attr('add_fee_pay'),
					add_fee_paymethod: $(this).attr('value'),
					add_fee_key: pay_order_page.attr('add_fee_key'),
					add_fee_nonce: add_fee_vars.add_fee_nonce
				};

				$.ajax({
						type: "POST",
						url: add_fee_vars.add_fee_ajaxurl,
						dataType: 'json',
						cache: false,
						data: senddata,
						success	: function(response, textStatus, jqXHR){
								if(response.success)
								{
									if(response.recalc)
									{
										$('.shop_table').replaceWith(response.message);
										$('#payment .form-row').show();
									}
								}
								else
								{
									$('#payment .form-row').hide();
									alert(response.alert);
									$('#order_review').before(response.message);
								};
							},
						error: function(testObj){
								$('#payment .form-row').hide();
								alert(add_fee_vars.alert_ajax_error);
							},
						complete: function(test){
								$(selector).unblock();
							}
					});

			});

			//	@since 3.2.3: fixes problem with payment method N/A for new created orders in backend
			setTimeout( function()
			{
				$( '#payment' ).find( "input[name='payment_method']:checked" ).trigger( 'change' );
			}, 100 );

			return false;
		}
	}

	/**
	 * These 2 variables are a try for a core fix that resets the payment gateway to the preselected
	 *
	 */
	var wc_add_fees_payment_selected_id = null;
	var wc_add_fees_payment_ignore_change = false;

		//	standard checkout page
	$('.woocommerce').on('change', '.payment_methods .input-radio', function()
	{
		if( wc_add_fees_payment_ignore_change )
		{
			return;
		}

		wc_add_fees_payment_selected_id = $(this).attr('id');

		$('body').trigger('update_checkout');
	});

	/**
	 * This is a try for a fix in wc core - can be removed completely when core is fixed
	 *
	 * added with
	 */
	$( document.body ).on( 'updated_checkout', function()
	{
		if( wc_add_fees_payment_selected_id === null )
		{
			return;
		}

		var new_selected = $( '.payment_methods .input-radio:checked');

		if( wc_add_fees_payment_selected_id === new_selected.attr('id') )
		{
			return;
		}

		wc_add_fees_payment_ignore_change = true;

		$( '.payment_methods #' + wc_add_fees_payment_selected_id ).prop("checked", true );

		wc_add_fees_payment_ignore_change = false;
		wc_add_fees_payment_selected_id = null;
	});

});
