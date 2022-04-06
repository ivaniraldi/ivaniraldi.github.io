import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import "./Contact.css"

function validate(input) {
    let errors = {}; //genero un objeto errores
    if (!input.name) {
      //input es mi estado local, si en mi estadolocal.name no hay nada,
      errors.name = "Name is required"; //entonces en mi objeto.name pongo un string que diga se requiere un nombre
    } else if (!input.email) {
      errors.email = "Email is required";
    } else if (!input.message) {
      errors.message = "Message is required"}
    return errors;
  }

export default function Contact() {
    const form = useRef();
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        //todos los inputs del formulario van a necesitar tener la prop handleChange
        e.preventDefault();
        setInput({
          //quiero ir guardando las cosas que el usuario escriba en el input en mi estado input
          ...input, //traé todo lo que ya tenías
          [e.target.name]: e.target.value, //y seteame el e.target.name en e.target.value (agregame el e.target.value de lo que esté
        }); //modificando, el target.name se lo fui pasando en el formulario, si esta modificando el
        //name, va a tomar el target.value de name, si esta modificando life span, va a tomar el target.value de name='life_span'
        //a medida que va modificando me va llenando ese estado
        setErrors(
          validate({
            //seteame mi estado errores, pasándole la función validate de más arriba,
            ...input, //con el estado input y el e.target.name en el e.target.value
            [e.target.name]: e.target.value,
          })
        );
      }

    
    const sendEmail = (e) => {
        e.preventDefault();    
        if (
            errors.name !== undefined ||
            errors.email !== undefined ||
            errors.message !== undefined
          ) {
            document.getElementById("DoNotSubmit"); //con docudntSubmit")
            return alert("Please complete the fields with valid data");
          }
          
        emailjs.sendForm('service_rountsm', 'template_4jfhbhf', form.current, '-4OVkyttlIm08uYsA')
          .then((result) => {
            Swal.fire(
                'Good job!',
                'You email was sended!',
                'success'
              )
              setInput({
                //seteo el input en cero otra vez
                name: "",
                lastName: "",
                email: "",
                message: "",

              });
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="py-20 bg-none" id='contact'>
        <div className="container max-w-6xl mx-auto">
        <form className="w-full max-w-lg" id="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-first-name" >
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-black-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" value={input.name}  onChange={(e) => handleChange(e)} placeholder="John" name="name"/>
                {errors.name && ( //si está mi estado errors.name renderizam un párrafo con ese error
                <p>{errors.name}</p>
              )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-black-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" onChange={(e) => handleChange(e)} value={input.lastName} name="lastName"/></div>
                    {errors.lastName && ( //si está mi estado errors.name renderizam un párrafo con ese error
                <p>{errors.lastName}</p>
              )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        E-mail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-black-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email"value={input.email} onChange={(e) => handleChange(e)} placeholder="email@example.com" />
                    {errors.email && ( //si está mi estado errors.name renderizam un párrafo con ese error
                <p>{errors.email}</p>
              )}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Message
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-black-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" onChange={(e) => handleChange(e)}value={input.message} placeholder="Enter your message..." name="message"></textarea>
                    {errors.message && ( //si está mi estado errors.name renderizam un párrafo con ese error
                <p>{errors.message}</p>
              )}
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" value="send" type='submit'>
                        Send
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
        </div></div>

    )
}
