import React, { Component } from 'react';
import ProductShowPage from './components/ProductShowPage'
import ProductIndexPage from './components/ProductIndexPage'
import NewProductPage from './components/NewProductPage'
import Navbar from './components/Navbar';
import { User } from './requests'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import AuthRoute from './components/AuthRoute'
import NotFoundPage from './components/NotFoundPage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) {
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => {
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
           <Navbar currentUser={ this.state.user } onSignOut={ this.onSignOut }/>
           <Switch>
              <Route exact path='/sign_in' 
              render={(routeProps) => <SignInPage {...routeProps} onSignIn={ this.getCurrentUser } />}/>
              <Route exact path='/sign_up' 
              render={(routeProps) => <SignUpPage {...routeProps} onSignIn={ this.getCurrentUser } />}/>
              <Route exact path='/products' component={ProductIndexPage}/>

              <AuthRoute 
                isAuthenticated={!!this.state.user}
                exact path="/products/new"
                component={NewProductPage}
              />

              <Route path='/products/:id' component={ProductShowPage}/>
              <Route component={NotFoundPage}/>
           </Switch>
        </BrowserRouter>
      </div>
     );
  }
}

export default App;
