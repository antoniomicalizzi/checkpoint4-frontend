import Footer from './Footer';
import Navigation from './Navigation';

// eslint-disable-next-line react/prop-types
function Mainlayout({ children }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Mainlayout;
