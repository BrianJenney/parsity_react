import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../../constants';
import ContactForm from '../../components/contactForm';

function EditContact({ contacts = [], editContact }) {
    const { id } = useParams();
    const contact = contacts.find((person) => person.id === Number(id)) || {};

    return (
        <div>
            <h1>Edit Contact</h1>
            <ContactForm
                contact={contact}
                editContact={editContact}
                contacts={contacts}
                btnLabel={CONSTANTS.SAVE_CHANGES}
            />
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
