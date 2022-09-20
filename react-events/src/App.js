import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Delivery from './components/Delivery';

function App() {

  const [id, setId] = useState('')

  const submit = async (e) => {
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
      {id === '' ? <div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
        <div className='card'>
          <div className='card-header'>
            Create Delivery
          </div>
          <form className='card-body' onSubmit={submit}>
            <div className='mb-3'>
              <input type="number" name="budget" className='form-control' placeholder='Budget'/>
            </div>
            <div className='mb-3'>
              <textarea name="notes" className='form-control' placeholder='Notes'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div> : <Delivery id={id}/>}
    </div>
  );
}

export default App;
