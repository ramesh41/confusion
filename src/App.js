import { NavbarBrand, Navbar } from "reactstrap";
import { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  
  render() {
    return (
      <div className="App">
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">
                <img
                  alt="logo"
                  src="./logo192.png"
                  style={{
                    height: 40,
                    width: 50,
                    paddingRight: 10,
                  }}
                />
                Ristorante Con Fusion
              </NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
        </div>
      </div>
    );
  }
}

export default App;
