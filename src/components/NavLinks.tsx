import React from 'react';

interface NavLinksProps {
  about: boolean;
  setAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ about, setAbout }) => {
  const handleAboutClick = () => {
    setAbout(!about);
  };

  const handleBuyClick = () => {
    // Add functionality for the "buy.jpeg" button if needed
    // Example: 
    console.log("Buy button clicked");
  };

  const handleListenClick = () => {
    // Add functionality for the "listen.jpeg" button if needed
    // Example: 
    console.log("Listen button clicked");
  };

  const handleExcitedClick = () => {
    // Add functionality for the "excited.jpeg" button if needed
    // Example: 
    console.log("Excited button clicked");
  };

  const handleMagnumOpusClick = () => {
    // Add functionality for the "magnum-opus.jpeg" button if needed
    // Example: 
    console.log("Magnum Opus button clicked");
  };

  return (
    <div className="flex-col flex p-3 m-3">
      <button onClick={handleAboutClick}>wave.jpeg</button>
      <button onClick={handleBuyClick}>buy.jpeg</button>
      <button onClick={handleListenClick}>listen.jpeg</button>
      <button onClick={handleExcitedClick}>excited.jpeg</button>
      <button onClick={handleMagnumOpusClick}>magnum-opus.jpeg</button>
    </div>
  );
};

export default NavLinks;
