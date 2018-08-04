import * as React from 'react';

interface IProps {
  branding?: string;
}

class Header extends React.Component<IProps, {}> {
  public static defaultProps: Partial<IProps> = {
    branding: 'My App',
  };

  public render() {
    const { branding } = this.props;

    return (
      <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
