import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../AddNewContact/AddNewContact.css';
import { CONSTANTS } from '../../constants';

function EditContact({ contacts = [], editContact }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const contact = contacts.find((person) => person.id === Number(id)) || {};
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [imageUrl, setImageUrl] = useState(contact.image_url);
    const [phoneNumber, setPhoneNumber] = useState(contact.phone_number);
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
            id: contact.id,
            name,
            image_url: imageUrl,
            email,
            phone_number: phoneNumber,
        };
        editContact(newContact);
        navigate('/');
    };

    if (!contact) return <h1>Contact not found</h1>;

    return (
        <div className="container">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit} className="contact-form shadow">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="image_url">Image URL</label>
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
                    <label htmlFor="phone_number">Phone Number</label>
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
                    {CONSTANTS.SAVE_CHANGES}
                </button>
            </form>
        </div>
    );
}

EditContact.propTypes = {
    editContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone_number: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default EditContact;
