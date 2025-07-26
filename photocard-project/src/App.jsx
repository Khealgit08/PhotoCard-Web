import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <img className="photo" src="/Kheal.png" alt="my photo" />
        <h2>Michael B. Castil</h2>
        <h4>2nd Year IT Student</h4>
        <h4>USTP-CDO</h4>
        <hr />
        <div className="flex space-x-6 text-2xl plat">
          <a href="https://github.com/Khealgit08" className="hover:text-gray-300"><FaGithub /></a>
          <a href="https://www.facebook.com/kheal.zen.maverick" className="hover:text-gray-300"><FaFacebook /></a>
          <a href="https://www.instagram.com/kerszaku?igsh=MTE2NnlpN2NjZ2Iyag==" className="hover:text-gray-300"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
