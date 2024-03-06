import { useState } from 'react';
import './App.css'
import TicketForm from './compornents/TicketForm/TicketForm';

function App() {
  
  return (
    <>
      <div className='ContainerForm'>
        <h1>Add Ticket</h1>
        <TicketForm></TicketForm>
      </div>
    </>
  )
}

export default App
