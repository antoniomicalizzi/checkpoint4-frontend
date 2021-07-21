import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
}

export default BurgerMenu;
