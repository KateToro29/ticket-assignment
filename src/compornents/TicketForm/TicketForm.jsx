import React, { useState } from 'react';
import axios from 'axios';
import './TicketForm.css'


const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    priority: '',
    description: '',
    resolved: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/tickets', formData);
      alert('Ticket creado exitosamente');
    
      setFormData({
        title: '',
        priority: '',
        description: '',
        resolved: false
      });
    } catch (error) {
      console.error('Error al enviar el ticket:', error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='containerCampos'>
        <label className='DescritionCampo'>
          Títle:
        </label>
        <input
            type="text"
            className='campos'
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="6"
            maxLength="18"
            placeholder='Add the Ticket Title'
          />
      </div>
      <div className='containerCampos' >
        <label className='DescritionCampo'>
          Priority:
          
        </label>
        <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            className='campos'
          >
            <option value="">Seleccionar</option>
            <option value="1">Baja</option>
            <option value="2">Media</option>
            <option value="3">Alta</option>
          </select>
      </div>
      <div className='containerCampos'>
        <label className='DescritionCampo'>
          Description:
          
        </label>
        <textarea
            name="description"
            className='campos'
            value={formData.description}
            onChange={handleChange}
            maxLength="30"
            placeholder='Add the Ticket Description'
            rows="5"
          />
      </div>
      <div className='containerCampos'>
        <input
            type="checkbox"
            name="resolved"
            checked={formData.resolved}
            onChange={handleChange}
            className='checkbox'
          />
        <label className=''>
          Mark as resolved
        </label>
      </div>
      <div className="containerCampos">
        <button className='ButtonSubmit' type="submit">Submit</button>
      </div>
      
    </form>
  );
};

export default TicketForm;
