import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import './index.css'


const App = () => {
 
    return(
        <>
            <Router>

                <Navigation/>

                {/* <Link to='/'> Home </Link>
                <Link to='/about'>About </Link>
                <Link to='/contact'>Contact </Link> */}

                {/* <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact us</a> */}

                <Switch>
 
                    <Route  path = '/' component = {Home} exact></Route>
                    <Route  path = '/About' exact component = {About}></Route>
                    <Route  path = '/contact'  exact component = {Contact}></Route>


                </Switch>
                
                
            </Router> 

        </>

    )

}

export default App;