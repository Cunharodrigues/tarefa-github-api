import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home-text-container'>
      <h3 className="text-secondary">Desafio Github API</h3>
      <p className="text-tertiary">Bootcamp Spring React - DevSupeior</p>
      </div>
      <Link to="/gitsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
