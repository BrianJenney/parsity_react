import { generateId } from './utils';
import './App.css';

// this is the initial user for the app, please do NOT modify this object
const initialUser = {
    id: generateId(),
    name: 'Albert Einstein',
    image_url:
        'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
    email: 'aeinstein@example.com',
    phone_number: '15555555555',
};

function App() {
    /**
     * TODO: Add state to store the contacts
     * add routes for the following pages:
     * - /contacts/new
     * - /contacts/:id/edit
     * - /contacts/:id
     */

    return (
        <div className="App">
            <h1>Contact List</h1>
        </div>
    );
}

export default App;
