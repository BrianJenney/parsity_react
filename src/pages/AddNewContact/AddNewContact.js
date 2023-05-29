import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { generateId } from '../../utils';
import './AddNewContact.css';
import { CONSTANTS } from '../../constants';

function AddNewContact({ addContact }) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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
        const contact = {
            id: generateId(),
            name,
            image_url: imageUrl,
            email,
            phone_number: phoneNumber,
        };

        addContact(contact);
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Add New Contact</h1>
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
                        placeholder="https://example.com"
                        id="image_url"
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
                        placeholder="123-456-7890"
                        id="phone_number"
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
                    {CONSTANTS.ADD_NEW_CONTACT}
                </button>
            </form>
        </div>
    );
}

AddNewContact.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default AddNewContact;
