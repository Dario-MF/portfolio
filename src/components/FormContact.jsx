import React, { useState } from 'react';


const FormContact = () => {
    const [form, setForm] = useState({
        name: "",
        telephone: "",
        subject: "",
        email: "",
        message: ""
    });

    const handleChange = e => {
        const {name , value} = e.target
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const resetForm = () => {
        setForm({name: "", telephone: "", subject: "", email: "", message: ""})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:3002/send-email', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then( (response) => (response.json()))
            .then((response)=> {
                console.log(response)
                if (response.resp.accepted) {
                    alert("Mensaje Enviado.");
                    resetForm();   
                } else {
                    alert("Fallo al enviar el mensaje.")
                }
            })
    };

    return (
        <section className="contact_box">
			<h2 className="contact_title">Contacto</h2>
            <form id="contactForm" onSubmit={e => handleSubmit(e)} method="POST">
                <div className="form_group">
                    <label htmlFor="name"><i className="bi bi-person"></i></label>
                    <input 
                        type="text"
                        required 
                        className="form_control"
                        placeholder="Nombre*" 
                        name='name' 
                        value={form.name} 
                        onChange={e => handleChange(e)} 
                    />
                </div> 
                <div className="form_group">
                    <label htmlFor="email"><i className="bi bi-envelope"></i></label>
                    <input 
                        type="email" 
                        required
                        className="form_control" 
                        placeholder="Email*"
                        name='email' 
                        value={form.email} 
                        onChange={e => handleChange(e)} 
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="subject"><i className="bi bi-chat-right-quote"></i></label>
                    <input 
                        type="text"
                        className="form_control"
                        required
                        placeholder="Asunto*" 
                        name='subject' 
                        value={form.subject} 
                        onChange={e => handleChange(e)} 
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="telephone"><i className="bi bi-telephone"></i></label>
                    <input 
                        type="telephone"
                        className="form_control"
                        placeholder="Telefono" 
                        name='telephone' 
                        value={form.telephone} 
                        onChange={e => handleChange(e)} 
                    />
                </div>   
                <div className="form_group">
                    <label htmlFor="message"><i className="bi bi-chat-right-text"></i></label>
                    <textarea 
                        className="form_control"
                        placeholder="Su mensaje..."
                        required 
                        rows="4" 
                        name='message' 
                        value={form.message} 
                        onChange={e => handleChange(e)} 
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn_submit"
                >Enviar
                </button>
            </form>
		</section>
    )
};

export default FormContact;
