import React, {Component} from 'react';

import { ApolloProvider } from 'react-apollo';

import UploadComponent from './components/UploadComponent';
import CreateSelectContainer from './components/CreateSelectContainer';

export class App extends Component {

  renderLoading = () => {
    return (
      <div>Loading...</div>
    );
  }

  renderAuthenticated = () => {
    const { client, handleLogout, username, uuid, uid, nid, mids } = this.props;

    return (
      <ApolloProvider client={client}>
        <div>
          <button style={{position:'absolute', top:'25px', right:'50px'}} onClick={handleLogout}>Logout</button>
          {
            !this.props.nid ?
              <CreateSelectContainer projectCreateSelectHandler={this.props.projectCreateSelectHandler}/>
            : 
              <UploadComponent username={username} uid={uid} uuid={uuid} nid={nid} mids={mids} />
          }

        </div>
      </ApolloProvider>
    );
  }

  renderAnonymous = () => {
    const {handleInputChange, handleLogin} = this.props;

    return (
      <div className="loginContainer">
        <h1>Login</h1>
        <form onSubmit={ handleLogin }>
          <input name="username" type='text' placeholder='username' onChange={handleInputChange} /><br />
          <input name="password" type='password' placeholder='password' onChange={handleInputChange} /><br />
          <input type='submit' value='Login' />
        </form>
        <p style={{color: 'red', display: this.props.isLoginFailed ? 'block' : 'none'}}> Credentials incorrect</p>
      </div>
    );
  }

  renderError = () => {
    return (
      <div>Sadly, there seems to have been an error. Contact someone super important to help facilitate forward progress.</div>
    )
  }

  render() {
    if (this.props.isLoading) {
      return this.renderLoading();
    } else if (this.props.isAuthenticated){
      return this.renderAuthenticated();
    } else if (!this.props.isAuthenticated && !this.props.isLoading) {
      return this.renderAnonymous();
    } else {
      return this.renderError();
    }
  }

}

export default App