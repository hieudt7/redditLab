import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const PageLayout = ({ location, children }) => {
  return (
    <>
      <Header />
      <main id="main" className={``}>
        <>
          {children}
        </>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
