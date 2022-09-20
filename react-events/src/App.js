import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Delivery from './components/Delivery';
import Card from './components/Card';
import CreateDelivery from './components/CreateDelivery';

function App() {

  const [id, setId] = useState('')

  const submit = async (e, event="") => {
    e.preventDefault()

    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const response = await fetch('http://localhost:8000/deliveries/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type: "CREATE_DELIVERY",
        data
      })
    })
    const content = await response.json()
    setId(content.id)
  }

  return (
    <div className="py-5">
      {id === '' ? 
        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
          <Card title={'Create Delivery'} onSubmit={submit} event={""} child={<CreateDelivery />}/>
        </div> 
        : <Delivery id={id}/>}
    </div>
  );
}

export default App;
