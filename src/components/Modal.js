import React from 'react';
import {Link} from 'react-router-dom';
import './Modal.css';

function Modal({closeModal,type, price, color, src}) {
	return (
		<div className="modalBackground">	
		    <div className="modalContainer">
		        <div className="titleCloseBtn">
		        	<button onClick={() => closeModal(false)}><i className='fas fa-times nav-close'></i></button>
		        </div>
		    	<div className="title">
		    		<h3>{type}</h3>
		    		<img src={src} alt="card" />
		    	</div>
		    	<div className="body">
	    	    	<p>Quantity:  1</p>
	    		    <p>price:  {price}</p>
	    		    <p>colour:  {color}</p>
		    	</div>
		    	<div className="label">
		    		<h3>Order Successful<i class="fa fa-check-circle-o"></i></h3>
		    	</div>
		    	<div className="footer">
		    		<button id="cancelBtn"
		    		 onClick={() => closeModal(false)}>Cancel</button>
		    		<Link to='paymentpage'><button>Pay Now</button></Link>
		    	</div>
		    </div>
	    </div>
	)
}

export default Modal;