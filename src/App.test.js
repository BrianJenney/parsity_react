import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { CONSTANTS } from './constants';

describe('App', () => {
    describe('home page', () => {
        it('should render the all contacts table', () => {
            render(<App />);
            const linkElement = screen.getByText(/All Contacts/i);
            expect(linkElement).toBeInTheDocument();
        });

        it('should add a contact and filter contacts by name', () => {
            // navigate to add new contact page
            render(<App />);

            const linkElement = screen.getByText(CONSTANTS.ADD_CONTACT);
            fireEvent.click(linkElement);

            expect(
                screen.getByText(CONSTANTS.ADD_NEW_CONTACT),
            ).toBeInTheDocument();

            // fill out the form
            const nameInput = screen.getByLabelText('Name');
            fireEvent.change(nameInput, { target: { value: 'John Doe' } });

            const emailInput = screen.getByLabelText('Email');
            fireEvent.change(emailInput, {
                target: { value: 'john@example.com' },
            });

            const imageUrlInput = screen.getByLabelText('Image URL');
            fireEvent.change(imageUrlInput, {
                target: { value: 'https://example.com/image.jpg' },
            });

            const phoneNumberInput = screen.getByLabelText('Phone Number');
            fireEvent.change(phoneNumberInput, {
                target: { value: '1234567890' },
            });

            // Submit the form
            const addButton = screen.getByText(CONSTANTS.ADD_NEW_CONTACT);
            fireEvent.click(addButton);

            // filter by name
            const searchInput = screen.getByPlaceholderText('Search Contacts');
            fireEvent.change(searchInput, { target: { value: 'John' } });

            // Check if the filtered contact is displayed
            const filteredContactName = screen.getByText('John Doe');
            expect(filteredContactName).toBeInTheDocument();

            const filteredContactEmail = screen.getByText('john@example.com');
            expect(filteredContactEmail).toBeInTheDocument();

            // Check that the non-matching contact is not displayed
            const nonMatchingContactName = screen.queryByText('Jane Smith');
            expect(nonMatchingContactName).not.toBeInTheDocument();

            const nonMatchingContactEmail =
                screen.queryByText('jane@example.com');
            expect(nonMatchingContactEmail).not.toBeInTheDocument();
        });
    });
    describe('edit contact page', () => {
        it('should edit a contact', () => {
            // navigate to add new contact page
            render(<App />);

            // click on the edit button
            const userLink = screen.getByText(/Albert Einstein/i);

            fireEvent.click(userLink);

            const editButton = screen.getByText(/Edit/i);
            fireEvent.click(editButton);

            // it disables the save button if the form is invalid
            const saveChanges = screen.getByText(CONSTANTS.SAVE_CHANGES);
            const nameInput = screen.getByLabelText('Name');

            fireEvent.change(nameInput, {
                target: { value: '' },
            });

            expect(saveChanges).toBeDisabled();

            fireEvent.change(nameInput, {
                target: { value: 'Albert Kindastein' },
            });

            // Submit the form
            fireEvent.click(saveChanges);

            const editedContact = screen.getByText('Albert Kindastein');
            expect(editedContact).toBeInTheDocument();

            expect(
                screen.queryByText('aeinstein@example.com'),
            ).toBeInTheDocument();
        });
    });
});
