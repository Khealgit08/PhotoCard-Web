import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <img className="photo" src="/Kheal.png" alt="my photo" />
        <h2>Jomari F. Arsula</h2>
        <h4>2nd Year IT Student</h4>
        <h4>USTP-CDO</h4>
        <hr />
        <div className="flex space-x-6 text-2xl plat">
          <a href="#" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
