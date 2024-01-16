import React from 'react';

interface NavLinksProps {
  onSelectButton: (buttonName: string | null) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onSelectButton }) => {
  // Your component logic here
  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
};

export default NavLinks;