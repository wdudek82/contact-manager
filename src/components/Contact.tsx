import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface IContact {
  name: string;
  email: string;
  phone: string;
}

interface IProps {
  contact: IContact;
}

const Contact = (props: IProps) => {
  const { name, email, phone } = props.contact;

  return (
    <div className="card card-body mb-3">
      <h4>
        {name} <FontAwesomeIcon icon="plus" />
      </h4>
      <ul className="list-group">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
    </div>
  );
};

export default Contact;
