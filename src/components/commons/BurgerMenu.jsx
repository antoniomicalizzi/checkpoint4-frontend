import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import Navigation from '../layout/Navigation';

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav">
      const = toggled={isOpen} toggle={setOpen};
      <Hamburger
        onToggle={() => {
          if (isOpen) {
            <Navigation />;
          }
        }}
      />
    </div>
  );
}

export default BurgerMenu;
