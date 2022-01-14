import React, { useRef } from 'react';
//import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Label from '../../components/Label';
import ListCard from '../../components/ListCards';
import data from '../../items.json';
//import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  //const history = useHistory();
  const sectionRef = useRef(null);
  //const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }
  return (
    <div>
      <Header />
      <section ref={sectionRef}>
        <Label className="fs-1">Welcome to the Challenge!</Label>
        <ListCard items={data.items} />
        {/* {authenticated ? (
        <>
        <h2>Good to have you back</h2>
        <span>
        <Link to="/" onClick={deAuthenticate}>
        ← logout
        </Link>
        <span className="separator" />
        <Link to="/secret">show me something cool →</Link>
        </span>
        </>
        ) : (
          <Link to="/login">let me in →</Link>
        )} */}
      </section>
    </div>
  );
}

export default HomePage;
