import React, { useState } from 'react';


const FormContact = () => {
    const [form, setForm] = useState({
        name: "",
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
        setForm({name: "", email: "", message: ""})
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
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text"
                        required 
                        className="form_control" 
                        name='name' 
                        value={form.name} 
                        onChange={e => handleChange(e)} 
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        required
                        className="form_control" 
                        name='email' 
                        value={form.email} 
                        onChange={e => handleChange(e)} 
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea 
                        className="form_control"
                        required 
                        rows="8" 
                        name='message' 
                        value={form.message} 
                        onChange={e => handleChange(e)} 
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn_submit"
                >Submit
                </button>
            </form>
		</section>
    )
};

export default FormContact;
