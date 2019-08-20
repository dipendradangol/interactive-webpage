import React from 'react';
import logo from './logo.png';
import './App.css';
import './animate.css';
import Car from './components/Car';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      loading: true,
      spinLogo: true,
      cars: [
        {
          id: 0
      },
        {
          id: 1
      },
        {
          id: 2
      },
        {
          id: 3
      }
    ]

    }
    // this is done so that the value of 'this'
    // would be accessible within toggleSpin method
    this.toggleSpin = this.toggleSpin.bind(this);
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        loading: false
      })
    }, 3000);

  }

  toggleSpin=(e)=>{
    this.setState(prevState => ({
      spinLogo: !prevState.spinLogo
    }));
    console.log(this.state.spinLogo)
  }

  showNavigator (){
    document.getElementById('nav-sidebar')
    .style.display = 'block';
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">

            <img 
            src={logo} 
              className={this.state.spinLogo ? "App-logo-static" : "App-logo-static animated rubberBand"}
              alt="logo" 
              onMouseEnter={this.toggleSpin}
              onMouseLeave={this.toggleSpin}
              onClick={this.showNavigator}
            />
            <Switch>
              <Route exact path="/" component={Home}></Route>

              <Route exact path="/loader" component={Loader}></Route>

              <Route
                exact 
                path="/carlist"
                render={props =>
                  this.state.loading ?  <Loader />  : (
                  <div className="car-list">
                    {
                      this.state.cars.map(car => (
                        <Car key ={car.id}></Car>
                      ))
                    }
                  </div>
                  )
                }
              >
              </Route>
            </Switch>
            {
              
            }
          
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
