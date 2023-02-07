import React from 'react';
import OrderCard from '../components/OrderCard';
import {Products} from '../components/Products';
import './Orderpage.css';

function Orderpage() {
	return (
		<div className="card_container">
		    <div className="card_heading">
		        <h1>My Cart</h1>
		    </div>
			<div className="cardlist">
				<OrderCard product={Products}/>
			</div>
		</div>
	)
}

export default Orderpage;