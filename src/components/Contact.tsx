import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

// styles
const Anchor = styled.a`
  text-decoration: none;
  color: #000;

  > i {
    color: #ffffff;
  }
`;

interface IContact {
  name: string;
  email: string;
  phone: string;
}

interface IProps {
  contact: IContact;
}

class Contact extends React.Component<IProps, {}> {
  public onShowClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(e.target);
  }

  public render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <Anchor href="/" onClick={this.onShowClicked}>
            <FontAwesomeIcon icon="sort-down" />
          </Anchor>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
