import React from 'react'

const CreateDelivery = () => {

	return (
		<>
			<div className='mb-3'>
				<input type="number" name="budget" className='form-control' placeholder='Budget'/>
			</div>
			<div className='mb-3'>
				<textarea name="notes" className='form-control' placeholder='Notes'/>
			</div>
			<button className='btn btn-primary'>Submit</button>
    </>
	)
}

export default CreateDelivery