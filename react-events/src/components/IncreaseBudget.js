import React from 'react'

const IncreaseBudget = () => {

	return (
		<>
			<div className='mb-3'>
				<input type="number" name="budget" className='form-control' placeholder='Budget'/>
			</div>
			<button className='btn btn-primary'>Submit</button>
    </>
	)
}

export default IncreaseBudget