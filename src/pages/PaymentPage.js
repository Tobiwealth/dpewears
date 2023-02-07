import React from 'react';
import './PaymentPage.css';
function PaymentPage() {
	return (
		<div className="form_container">
		    <h2 className="formtitle">Payment Details</h2>
			<form className="form_wrapper">
				<div>
			        <label htmlFor="email">Email Address</label>
			        <input type="text" name="email" placeholder="Enter an email address for your receipt" id="emailaddress" />
			    </div>
			    <div>
			        <label htmlFor="Pnumber">Phone Number</label>
			        <input type="text" name="number" placeholder="Enter your phone number" id="number" />
			    </div>
			    <div>
			    	<label htmlFor="pay">Payment Mehod</label>
			    	<select name="paymentMethod" id="pay">
			    		<option name='mastercard' value="mastercard">Master Card</option>
			    		<option name='visacard' value="visacard">Visa Card</option>
			    		<option name='verve' value="verve">Verve Card</option>
			    	</select>
		        </div>
		        <div className='form__btn-wrapper'>
				    <button className="btn" type="submit" className='form-btn'>Proceed</button>
			    </div> 
			</form>
		</div>
	)
}

export default PaymentPage;