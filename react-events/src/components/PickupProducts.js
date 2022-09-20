import React from 'react'

const PickupProducts = () => {

	return (
		<>
			<div className='input-group mb-3'>
				<input type="number" name="purchase_price" className="form-control"
					placeholder='Purchase Price' />
				<input type="number" name="quantity" className="form-control"
					placeholder='Quantity' />
			</div>
			<button className='btn btn-primary'>Submit</button>
    </>
	)
}

export default PickupProducts