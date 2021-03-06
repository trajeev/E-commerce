import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import CheckOut from './pages/checkout/checkout.component.jsx'
import {checkUserSession} from './redux/user/user.actions'

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  // unsubscribeFromAuth = null

  // componentWillUnmount () {
  //   this.unsubscribeFromAuth() 
  // }

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route exact path = '/checkout' component = {CheckOut} />
          <Route exact path = '/signin' render = {() => 
            (this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage />) )} />
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
