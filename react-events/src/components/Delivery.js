import React, { useEffect, useState } from 'react'
import Card from './Card'
import DeliverProducts from './DeliverProducts'
import IncreaseBudget from './IncreaseBudget'
import PickupProducts from './PickupProducts'
import ProgressBar from './ProgressBar'
import StartDelivery from './StartDelivery'

const Delivery = ({ id }) => {

	const [state, setState] = useState({})
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:8000/deliveries/${id}/status`)
			const data = await response.json()
			setState(data)
		})()
	}, [refresh])

	const submit = async (e, type) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const response = await fetch('http://localhost:8000/event', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type,
        data,
				delivery_id: state.id
      })
    })

		if(!response.ok) {
			const {detail} = await response.json()
			alert(detail)
			return
		}

		setRefresh(!refresh)

  }

	return (
		<div className='row w-100'>
			<div className='col-12 mb-4'>
				<h4 className='fw-bold text-white'> Delivery {state.id}</h4>
			</div>

			<ProgressBar status={state.status}/>

			<Card title={'Start Delivery'} onSubmit={submit} event={"START_DELIVERY"} child={<StartDelivery />}/>

			<Card title={'Increase Budget'} onSubmit={submit} event={"INCREASE_BUDGET"} child={<IncreaseBudget/>}/>

			<Card title={'Pickup Products'} onSubmit={submit} event={"PICKUP_PRODUCTS"} child={<PickupProducts/>}/>

			<Card title={'Deliver Products'} onSubmit={submit} event={"DELIVER_PRODUCTS"} child={<DeliverProducts/>}/>

			<div className='col-12 mt-4'>
				{JSON.stringify(state)}
			</div>
		</div>
	)
}

export default Delivery