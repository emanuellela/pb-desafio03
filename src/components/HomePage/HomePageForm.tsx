import React from 'react';
import './HomePageForm.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';

interface HomePageFormProps {}

const HomePageForm: React.FC<HomePageFormProps> = () => {
  return (
    <div>
      <header className="homep-header">
        <Logo />
        <BarraPesquisa />
      </header>

      <div className="homep-container">
        <div className="form-group-text">
            {[
                { text: 'Premium', className: 'tx1' },
                { text: 'quality', className: 'tx2' },
                { text: 'Food for your', className: 'tx3' },
                { text: 'healthy', className: 'tx4' },
                { text: '& Daily Life', className: 'tx5' }
            ].map((item, index) => (
                <h1 key={index} className={item.className}>
                {item.text}
                </h1>
            ))}
          </div>
          <p className='ptext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br />
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br />
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageForm;