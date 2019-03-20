import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Sidebar from "./components/Sidebar/index";
import Video from "./components/Video/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video/>
          <Sidebar/>
        </Provider>
      </div>
    );
  }
}

export default App;
