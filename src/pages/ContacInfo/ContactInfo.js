import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ContactInfo({ contacts }) {
    const params = useParams();
    const { id } = params;

    const contact = contacts.find((person) => person.id === Number(id));

    if (!contact) return <h1>Contact not found</h1>;

    return (
        <div>
            <h1>Contact Info</h1>
            <h2>{contact.name}</h2>
            <img src={contact.image_url} alt={contact.name} />
            <p>{contact.email}</p>
            <p>{contact.phone_number}</p>
            <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
        </div>
    );
}

ContactInfo.propTypes = {
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

export default ContactInfo;
