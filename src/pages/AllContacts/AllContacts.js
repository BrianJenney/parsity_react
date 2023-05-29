import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CONSTANTS } from '../../constants';

function AllContacts({ contacts }) {
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const filterContacts = (e) => {
        const { value } = e.target;

        setFilteredContacts(
            contacts.filter((contact) => {
                const contactName = contact.name.toLowerCase();
                return contactName.includes(value.toLowerCase());
            }),
        );
    };
    return (
        <div className="container">
            <h1>All Contacts</h1>
            <Link to="/contacts/new">
                <button type="button" className="btn btn-primary">
                    {CONSTANTS.ADD_CONTACT}
                </button>
            </Link>
            <input
                type="text"
                placeholder="Search Contacts"
                className="form-control mt-3"
                onChange={filterContacts}
            />
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Profile Pic</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>
                                <img
                                    src={contact.image_url}
                                    alt={contact.name}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                    }}
                                />
                            </td>
                            <td>
                                <Link to={`/contacts/${contact.id}`}>
                                    {contact.name}
                                </Link>
                            </td>
                            <td>{contact.email}</td>
                            <td>{contact.phone_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

AllContacts.propTypes = {
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

export default AllContacts;
