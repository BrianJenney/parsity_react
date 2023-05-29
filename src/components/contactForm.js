import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './contactForm.css';
import { CONSTANTS } from '../constants';
import { generateId } from '../utils';

function ContactForm({ editContact, contact, btnLabel }) {
    const navigate = useNavigate();
    const [name, setName] = useState(contact?.name);
    const [email, setEmail] = useState(contact?.email);
    const [imageUrl, setImageUrl] = useState(contact?.image_url);
    const [phoneNumber, setPhoneNumber] = useState(contact?.phone_number);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (name && email && imageUrl && phoneNumber) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, email, imageUrl, phoneNumber]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: contact?.id || generateId(),
            name,
            image_url: imageUrl,
            email,
            phone_number: phoneNumber,
        };
        editContact(newContact);
        navigate('/');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="contact-form shadow">
                <div className="form-group mb-3">
                    <label htmlFor="name">{CONSTANTS.FORM_NAME}</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">{CONSTANTS.FORM_EMAIL}</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="image_url">
                        {CONSTANTS.FORM_IMAGE_URL}
                    </label>
                    <input
                        type="url"
                        id="image_url"
                        placeholder="Enter image url"
                        className="form-control"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone_number">
                        {CONSTANTS.FORM_PHONE_NUMBER}
                    </label>
                    <input
                        type="tel"
                        id="phone_number"
                        placeholder="Enter phone number"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isDisabled}
                >
                    {btnLabel}
                </button>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    editContact: PropTypes.func.isRequired,
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone_number: PropTypes.string.isRequired,
    }),
    btnLabel: PropTypes.string.isRequired,
};

export default ContactForm;
