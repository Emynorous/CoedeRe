import React from 'react';
import './MainPage.css'; // Importing the CSS file

function MainPage() {
  const imageSrc = 'https://static.vecteezy.com/system/resources/previews/024/850/844/original/red-dazzling-diamonds-on-transparent-background-png.png';

  return (
    <div className="main-page">
      <main className="main-content">
        <h1>Vítejte</h1>
        <p>toto je stránka kde můžete podávat hlášení, zobrazovat si je, filtrovat a stáhnout vybrané</p>
       <img src={imageSrc} alt="Your Image" className='CustomImage' />
       </main>
     </div>
     
  );
}

export default MainPage;
