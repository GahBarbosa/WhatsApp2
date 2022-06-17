import React from 'react';
import './ChatIntro.css';
import WhatsIntro from './../images/WhatsIntro.jpg';

export default () => {
  return (
    <div className="chatIntro">
      <img src={WhatsIntro} alt="aa" />
      <h1>Mantenha seu celular conectado</h1>
      <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br />Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
    </div>
  )
};