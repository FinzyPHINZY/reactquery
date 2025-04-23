import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center px-2 py-4 ">
        <nav className="">
          <ul className="flex gap-4 *:text-md *:hover:underline *:hover:font-bold *:hover:text-green-500 *:hover:transition-all *:hover:duration-800 *:hover:ease-in-out">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/posts'}>Posts</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
