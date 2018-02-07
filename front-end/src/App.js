import React, {Component} from 'react';

import { ApolloProvider } from 'react-apollo';

import {UploadComponent} from './components/index';

import CreateSelect from './components/CreateSelect';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';

import { connect } from 'react-redux';

export class App extends Component {

  renderLoading = () => {
    return (
      <div>Loading...</div>
    );
  }

  renderAuthenticated = () => {

    const {handleLogout, username, uuid, uid, nid, mids, apolloclient,activeNode } = this.props;

    return (
      <div>
        {apolloclient ?
          <ApolloProvider client={apolloclient}>
            <div className="container authenticated">
                <Navbar handleLogout={handleLogout} />
                {
                  !this.props.activeNode ?
                    <CreateSelect projectCreateSelectHandler={this.props.projectCreateSelectHandler}/>
                  :
                    <UploadComponent username={username} uid={uid} activeNode={activeNode} />
                }
            </div>
          </ApolloProvider> : ''
        }
      </div>

    );
  }

  renderAnonymous = () => {
    const {handleInputChange, handleLogin, isLoginFailed} = this.props;
    return <SignIn handleInputChange={handleInputChange} handleLogin={handleLogin} isLoginFailed={isLoginFailed} />;
  }

  renderError = () => {
    return (
      <div>Sadly, there seems to have been an error. Contact someone super important to help facilitate forward progress.</div>
    )
  }

  render() {
    if (this.props.isLoading) {
      return this.renderLoading();
    } else if (this.props.authenticated){
      return this.renderAuthenticated();
    } else if (!this.props.authenticated && !this.props.isLoading) {
      return this.renderAnonymous();
    } else {
      return this.renderError();
    }
  }

}
const mapStateToProps = (state, ownProps) => ({
  authenticated: state.oauth.authenticated,
  apolloclient: state.apollo.apolloClient
})

export default connect(mapStateToProps)(App);
