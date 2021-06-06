import './App.css';
import {Switch,Route} from 'react-router-dom';
import Homepage from './page-component/homepage/homepage';
import ProductPage from './page-component/product-page/poductpage'
import SingIn from './page-component/sign-in-and-out/sign-in-and-out';
import SingUp from './page-component/sign-up/sign-up';
import Header from './components/header/header';
import React from 'react';
import {auth,userProfileData} from './firebase/firebase';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromGAuth = null;

  componentDidMount(){
    this.unsubscribeFromGAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef = await userProfileData(user)
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromGAuth();
  }


  render(){  
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/product' component={ProductPage}></Route>
          <Route exact path='/signin' component={SingIn}></Route>
          <Route exact path='/signup' component={SingUp}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
