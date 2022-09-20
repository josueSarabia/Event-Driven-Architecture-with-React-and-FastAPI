import React from 'react'

const ProgressBar = ({status}) => {

	return (
		<div className='col-12 mb-5'>
			<div className='progress'>
				{status !== 'ready' ? <div
					className={status === 'active' ? 'progress-bar bg-success progress-bar-striped progress-bar-animated' : 'progress-bar bg-success'}
					role='progressbar' style={{width: '50%'}}
				></div> : ''}
				{status === 'collected' || status === 'completed' ? <div
					className={status === 'collected' ? 'progress-bar bg-success progress-bar-striped progress-bar-animated' : 'progress-bar bg-success'}
					role='progressbar' style={{width: '50%'}}
				></div> : ''}
			</div>
		</div>
	)
}

export default ProgressBar