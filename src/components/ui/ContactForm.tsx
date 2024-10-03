"use client";
import React, { useState } from "react";

const ContactForm = ({ setSuccessMessage }: any) => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [errMessage, setErrMessage] = useState("");

  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ============== Error message end here ================
  const handleSendDetails = (e: any) => {
    e.preventDefault();
    if (username === "") {
      setErrMessage("Your name is required!");
    } else if (email === "") {
      setErrMessage("Please give your Email");
    } else if (!emailValidation(email)) {
      setErrMessage("Give a Valid Email");
    } else if (message === "") {
      setErrMessage("Enter your Messages");
    } else {
      setUsername("");
      setEmail("");
      setMessage("");
      setSuccessMessage(
        `Olá querido ${username}. Recebemos sua mensagem com sucesso. Detalhes adicionais serão enviados a você por e-mail em ${email} e nosso pessoal responsável entrará em contato com você em breve. Obrigado pelo seu tempo.`,
      );
    }
  };
  return (
    <>
      <div className="flex justify-between gap-1">
        <h4 className="text-sky-400 text-lg mdl:text-xl mb-2">
          Preencha o Formulários
        </h4>
      </div>
      <div className="flex flex-col gap-1 text-base text-gray-100 font-titleFont">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-lime-600 placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
          type="text"
          placeholder="Qual seu Nome"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-lime-600 placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
          type="email"
          placeholder="Qual seu E-mail"
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-lime-600 placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 resize-none placeholder:uppercase"
          id=""
          cols={30}
          rows={5}
          placeholder="Descreva sua duvida"
        />
      </div>
      {errMessage && (
        <h4 className="text-lime-600 text-base text-center mt-10 py-1 rounded-sm bg-white px-4 font-semibold">
          {errMessage} !
        </h4>
      )}
      <button
        onClick={handleSendDetails}
        className="relative w-full text-lg font-semibold uppercase font-titleFont active:bg-sky-400 tracking-[4px] border p-2 border-gray-800 mt-8 overflow-hidden group"
      >
        Enviar
        <span className="absolute w-full h-[1px] bg-sky-400 left-0 top-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="absolute w-full h-[1px] bg-sky-400 left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="absolute w-[1px] h-full bg-sky-400 left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
        <span className="absolute w-[1px] h-full bg-sky-400 right-0 bottom-0 -translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
      </button>
    </>
  );
};

export default ContactForm;
