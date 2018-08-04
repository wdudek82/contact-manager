import * as React from 'react';
import Contact from './Contact';

import styledComponents from 'styled-components';

const Wrapper = styledComponents.div.attrs({
  className: 'container',
})``;

const Contacts = (props: any) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Contacts;
