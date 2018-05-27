import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/header/header.component';
import List from '../../components/list/list.component';
import './App.css';

class App extends PureComponent {
    state={
        userName: '',
        userList: []
    };

    userOnChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    };

    addUser = () => {
        this.setState({
            userList: [...this.state.userList, this.state.userName],
            userName: '',
        })
    };

render() {
    return (
      <Fragment>
        <input className="input_class"
              value={this.state.userName}
              onChange={this.userOnChange}
        />
          <button onClick={this.addUser}>DODAJ</button>
          <Header inputValue={this.state.userName}/>
          <List usersList={this.state.userList}/>
      </Fragment>
    )
  }
}

export default App;
