import * as React from 'react';
import Contact from './Contact';

import styledComponents from 'styled-components';

// ------- styles
const Wrapper = styledComponents.div.attrs({
  className: 'container',
})``;

class Contacts extends React.Component<{}, {}> {
  public state = {
    contacts: [
      {
        id: 1,
        name: 'Jaś Fasola',
        email: 'jfasola@example.com',
        phone: '555-555-5555',
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@example.com',
        phone: '123-345-5678',
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'hjohnson@gmail.com',
        phone: '877-636-1353',
      },
    ],
  };

  public renderContacts() {
    return this.state.contacts.map(({ id, name, email, phone }) => (
      <Contact key={id} name={name} email={email} phone={phone} />
    ));
  }

  public render() {
    return <Wrapper>{this.renderContacts()}</Wrapper>;
  }
}

export default Contacts;
