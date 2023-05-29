import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AllContacts from './pages/AllContacts/AllContacts';
import AddNewContact from './pages/AddNewContact/AddNewContact';
import ContactInfo from './pages/ContacInfo/ContactInfo';
import EditContact from './pages/EditContact/EditContact';
import { generateId } from './utils';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([
        {
            id: generateId(),
            name: 'Albert Einstein',
            image_url:
                'https://cdn.pixabay.com/photo/2016/12/27/06/38/albert-einstein-1933340_1280.jpg',
            email: 'aeinstein@example.com',
            phone_number: '15555555555',
        },
    ]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const editContact = (contact) => {
        const newContacts = contacts.map((c) => {
            if (c.id === contact.id) {
                return contact;
            }
            return c;
        });
        setContacts(newContacts);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<AllContacts contacts={contacts} />}
                    />
                    <Route
                        path="contacts/new"
                        element={<AddNewContact addContact={addContact} />}
                    />
                    <Route
                        exact
                        path="contacts/:id/edit"
                        element={
                            <EditContact
                                contacts={contacts}
                                editContact={editContact}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/contacts/:id"
                        element={<ContactInfo contacts={contacts} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
