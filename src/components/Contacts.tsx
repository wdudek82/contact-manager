import * as React from 'react';
import Contact from './Contact';

import styled from 'styled-components';

// styles
const Wrapper = styled.div.attrs({
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
    return this.state.contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} />
    ));
  }

  public render() {
    return <Wrapper>{this.renderContacts()}</Wrapper>;
  }
}

export default Contacts;
