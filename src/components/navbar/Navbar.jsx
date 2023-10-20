import './Navbar.css'
import styled from 'styled-components'
import CartWidget from './cartwidget/CartWidget';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
         <NavContainer>
            <h2>venus</h2>
            <div>
                <NavLink className="navbar-link" to="/">new in</NavLink>
                <NavLink className="navbar-link" to="/products">shop all</NavLink>
                <NavLink className="navbar-link" to="/">Nosotros</NavLink>
            </div>

           {/*} <input type="checkbox" id="check"/>

<label for="check"><i class="material-icons" id="btn">menu</i>
    <i class="material-icons" id="cancel">close</i></label>*/}
        <CartWidget />
  
         </NavContainer>
          

      
        </>
    )
}

export default Navbar;


const NavContainer = styled.nav `

 h2{

font-family: 'Barlow Condensed', sans-serif;
 text-transform: uppercase;
font-size: 45px;
  letter-spacing: 1px;
 font-weight: 100;
 }

 background-color: #FFEAEA;

 `