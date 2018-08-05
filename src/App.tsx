import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

library.add(faPlus);

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
