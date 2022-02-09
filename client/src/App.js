//import { useState } from 'react';
import React, {Component} from 'react';
import Header from './components/Header';
import Menu from './components/MenuBar';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div >
          <Header />
          <Menu />
        </div>
      </Provider>
    );
  }
}


// function App() {

//   return (
//     <Provider store={store}>
//       <div >
//         <Header />
//         <Menu />
//       </div>
//     </Provider>
//   );
// }

export default App;
