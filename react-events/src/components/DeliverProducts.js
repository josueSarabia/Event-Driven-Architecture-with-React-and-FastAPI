import React from 'react'

const DeliverProducts = () => {

	return (
		<>
			<div className='input-group mb-3'>
				<input type="number" name="sell_price" className="form-control"
					placeholder='Sell Price' />
				<input type="number" name="quantity" className="form-control"
					placeholder='Quantity' />
			</div>
			<button className='btn btn-primary'>Submit</button>
    </>
	)
}

export default DeliverProducts