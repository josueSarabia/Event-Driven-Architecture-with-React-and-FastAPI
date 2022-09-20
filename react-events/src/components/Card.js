import React from 'react'

const Card = ({ title, onSubmit, event, child}) => {


	return (
		<div className='col-3'>
			<div className='card'>
				<div className='card-header'>
					{title}
				</div>
				<form className='card-body' onSubmit={e => onSubmit(e, event)}>
					{child}
				</form>
			</div>
		</div>
	)
}

export default Card