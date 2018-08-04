import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contacts />
      </div>
    );
  }
}

export default App;
