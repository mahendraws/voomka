import React from 'react'
import './Aboutus.css'
import { MessageCircle, Phone, Mail, ChevronRight } from 'lucide-react';
function Contact() {

    const sendWhatsApp = () => {
        const phone = "917887769868";


        const message = `Hello, I would like to get in touch with Vookma`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const makeCall = () => {
        window.location.href = "tel:+917887769868";
    };

    return (
        <div >
            <div style={{ textAlign: "center" }}>
                <h4>Contact Us</h4>
                <p>Choose your preferred way to contact us</p>
            </div>

            <div className='contactmain' onClick={sendWhatsApp}>
                <div className='box'>
                    <div className="rs">
                        <MessageCircle className='contacticon' strokeWidth={2} />
                        <div >
                            <h6>WhatsApp</h6>
                            <p>Chat with us on whatsapp</p>
                        </div>
                    </div>
                    <ChevronRight className="contacticon" strokeWidth={2} />
                </div>

            </div>

            <div className='contactmain' onClick={makeCall} >
                <div className='box'>
                    <div className="rs">
                        <Phone className='contacticon' strokeWidth={2} />
                        <div >
                            <h6>Phone Call</h6>
                            <p>Call us directly for fast response</p>
                        </div>
                    </div>
                    <ChevronRight className="contacticon" strokeWidth={2} />
                </div>

            </div>

            <div className='contactmain' >
                <div className='box'>
                    <div className="rs">
                        <Mail className='contacticon' strokeWidth={2} />
                        <div >
                            <h6>Email</h6>
                            <p>Send us and email for detail enquiries</p>
                        </div>
                    </div>
                    <ChevronRight className="contacticon" strokeWidth={2} />
                </div>

            </div>

        </div>
    )
}

export default Contact