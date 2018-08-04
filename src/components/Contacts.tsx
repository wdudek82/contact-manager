import * as React from 'react';
import Contact from './Contact';

// interface IProps {}

const Contacts = (props: any) => {
  return (
    <div>
      <Contact
        name="Jaś Fasola"
        email="jfasola@example.com"
        phone="555-555-5555"
      />
      <Contact
        name="Karen Smith"
        email="ksmith@example.com"
        phone="555-555-5555"
      />
    </div>
  );
};

export default Contacts;
