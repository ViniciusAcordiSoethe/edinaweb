"use client";

import { env } from 'process';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import { BsWhatsapp } from 'react-icons/bs'

const WhatsAppContact = () => {
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };


  const handleVerify = (token: string | null) => {
    if (token) {
      setIsVerified(true);
    }
  };

  const handleSubmit = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CELLPHONE_NUMBER}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    // if (isVerified) {
    //   const whatsappURL = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CELLPHONE_NUMBER}&text=${encodeURIComponent(message)}`;
    //   window.open(whatsappURL, '_blank');
    // } else {
    //   alert("Por favor, verifique que você não é um robô.");
    // }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mb-4">Entre em Contato pelo WhatsApp</h1>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Digite sua mensagem aqui..."
        rows={4}
        cols={50}
        className="mb-4 p-4 border border-green-500 bg-green-100 rounded-lg shadow-lg resize-none"
        style={{ borderTopRightRadius: '0' }}
      />
      <div className="mb-4">
        {/* <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={handleVerify}
        /> */}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        Enviar pelo WhatsApp <BsWhatsapp className="ml-2" />
      </button>
    </div>
  );

};

export default WhatsAppContact;
