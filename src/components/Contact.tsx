import * as React from 'react';

interface IProps {
  name: string;
  email: string;
  phone: string;
}

const Contact = (props: IProps) => {
  const { name, email, phone } = props;

  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </div>
  );
};

export default Contact;
