import React,{ useState } from 'react';
import Modal from './Modal';
import './OrderCard.css';

function OrderCard({product}) {
	const [openModal, setOpenModal] = useState(false);
	const [key, setKey] = useState(1);
	return (
		<>
		    {
		    	product.map((items,i) =>{
		    		return(
			    		<div className="cards_wrapper">
						    <div className='card__wrapper'>
								<img className="cardImage" src={product[i].link} alt="Card" />
								<p className="card_words">{product[i].type}</p>
								<div className='label'>
									<button onClick = {()=>{setOpenModal(true); setKey(i)}}className='card-button'>Order</button>
									{openModal && 
								    <Modal type={product[key].type} price={product[key].price} color={product[key].color} src={product[key].link} closeModal={setOpenModal}/>
								    }
								</div>
						    </div>
					   </div>
					);
		    	})
		    }
		</>
	)
}

export default OrderCard;