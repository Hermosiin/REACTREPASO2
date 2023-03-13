import  React  from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
      <nav className="navegador">
        <div className="left">

        </div>
        <div className="center">
          <Link to="/todosreducer">Todos Reducer</Link>
          <Link to="/todosredux">Todos Redux</Link>
        </div>
        <div className="right">
          
        </div>
      </nav>
    </>
  );
}