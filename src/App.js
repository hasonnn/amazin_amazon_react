import React, { Component } from 'react';
import ProductShowPage from './components/ProductShowPage'
import ProductIndexPage from './components/ProductIndexPage'
import NewProductPage from './components/NewProductPage'
import Navbar from './components/Navbar';
import { Session } from './requests'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
           <Navbar/>
           <Switch>
              <Route exact path='/products' component={ProductIndexPage}/>
              <Route path='/products/new' component={NewProductPage}/>
              <Route path='/products/:id' component={ProductShowPage}/>
           </Switch>
        </BrowserRouter>
      </div>
     );
  }
}

export default App;
