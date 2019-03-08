import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {ReactComponent as CaretDown} from '../../assets/back-arrow.svg';
interface IProps {}

const Header = (props: IProps) => {
  const [hasNotification, setHasNotification] = React.useState<boolean>(true);
  const [menuActive, setMenuActive] = React.useState<boolean>(false);

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Navbar__Wrapper">
          <div className="Navbar__Left">
            <div className="Navbar__Brand">
              <h1>
                <Link to="/">Handzap</Link>
              </h1>
            </div>
            <div className="Navbar__Links">
              <NavLink
                to="/page/1"
                activeClassName="active"
                className="Navbar__Link"
              >
                Title 1
              </NavLink>
              <NavLink
                to="/page/2"
                activeClassName="active"
                className="Navbar__Link"
              >
                Title 2
              </NavLink>
            </div>
          </div>
          <div className="Navbar__Right">
            <div className="Navbar__Links">
              <NavLink
                to="/"
                className="Navbar__Link"
                style={{
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                  fontWeight: 'normal',
                }}
              >
                My rewards
              </NavLink>
              <div
                className="Navbar__Dropdown"
                onMouseOver={() => setMenuActive(true)}
                onMouseLeave={() => setMenuActive(false)}
                onFocus={() => setMenuActive(true)}
              >
                <button className="Navbar__Dropdown-Toggler">
                  <span>
                    <img src="http://www.fillmurray.com/120/120" alt="lady" />
                    {hasNotification && <span className="hasNotification" />}
                  </span>
                  <span>
                    <CaretDown />
                  </span>
                </button>
                <div
                  className={
                    'Navbar__Dropdown-Menu' + (menuActive ? ' active' : '')
                  }
                >
                  <Link
                    to="/"
                    className="Navbar__Dropdown-Option Navbar__Dropdown-Option--Header"
                  >
                    <div>
                      <img src="http://www.fillmurray.com/100/100" alt="" />
                    </div>
                    <div>
                      <h5>Rebecca Williams</h5>
                      <p>+91 88888 99999</p>
                      <p>rebecca.will@gmail.com</p>
                    </div>
                  </Link>

                  <Link
                    to="/"
                    className="Navbar__Dropdown-Option Navbar__Dropdown-Option--Info"
                  >
                    <div>
                      <h5>Invitations</h5>
                      <p>rebecca.will@gmail.com</p>
                    </div>
                    <div>
                      <span>23</span>
                      <CaretDown />
                    </div>
                  </Link>

                  <Link
                    to="/"
                    className="Navbar__Dropdown-Option has-separator"
                  >
                    My Account
                  </Link>
                  <Link to="/" className="Navbar__Dropdown-Option">
                    Settings
                  </Link>
                  <Link
                    to="/"
                    className="Navbar__Dropdown-Option has-separator"
                  >
                    Wallet
                  </Link>

                  <Link to="/" className="Navbar__Dropdown-Option">
                    Help
                  </Link>
                  <button className="Navbar__Dropdown-Option">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
