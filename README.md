# Rolodex App

---

Welcome to the Rolodex App! This app allows you to manage and filter your contacts. Follow the instructions below to set up and start using the app.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

```shell
npm install
```

## Getting Started

To launch the Rolodex App, follow these steps:

Run the following command:

```shell
npm start
```

Open your browser and visit http://localhost:3000 to access the app.

# Features

---

## Add New Contact

To add a new contact:

On the home page, click the "Add New Contact" button.

Fill out the contact form with the required information, including the name, email, image URL, and phone number.

Click the "Add Contact" button to save the contact.

## Filter Contacts

To filter contacts by name:

On the home page, enter the name you want to filter by in the search input field.

The contacts list will be filtered dynamically based on the entered name.

Contacts matching the search query will be displayed, while non-matching contacts will be hidden.

## Edit Contact

To edit an existing contact:

On the home page, find the contact you want to edit in the contacts table.

Click on the contact's name to navigate to the edit page.

On the edit page, modify the contact's details as desired.

Click the "Save Changes" button to save the updated contact information.

## Testing

The Rolodex App comes with a test suite to ensure its functionality. To run the tests, use the following command:

```shell
npm test
```

The tests cover various scenarios, including rendering the add new contact button, rendering the all contacts table, adding a contact, filtering contacts by name, and editing a contact.

**You do NOT need to create the app to perfectly make the test pass** and if you decide to add some of the extensions then they may not work. These tests make some assumptions and will require you to follow certain naming conventions that are in the `constants.js` file.

For example, if you name the `Add New Contact` button to `Add Another Contact` you will need to update the tests in order for them to pass by changing

```js
const addButton = screen.getByText(CONSTANTS.ADD_NEW_CONTACT);
```

to

```js
const addButton = screen.getByText('Add Another Contact');
```

Make sure to implement the necessary components and functionality to pass the provided tests associated with the app.

Good luck!
