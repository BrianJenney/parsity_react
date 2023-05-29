import PropTypes from 'prop-types';
import ContactForm from '../../components/contactForm';
import { CONSTANTS } from '../../constants';

function AddNewContact({ addContact }) {
    return (
        <div className="container">
            <h1>Add New Contact</h1>
            <ContactForm
                editContact={addContact}
                btnLabel={CONSTANTS.ADD_NEW_CONTACT}
            />
        </div>
    );
}

AddNewContact.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default AddNewContact;
