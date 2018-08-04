import * as React from 'react';

interface IProps {
  name: string;
  email: string;
  phone: string;
}

const Contact = (props: IProps) => {
  const { name, email, phone } = props;

  return (
    <div className="card card-body mb-3">
      <h4>{name}</h4>
      <ul className="list-group">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
    </div>
  );
};

export default Contact;
