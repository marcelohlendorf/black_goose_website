import * as React from 'react';

import Header from './header.js';
import TextLanding from './text-landing-page.js';
import GamesLanding from './games-landing-page.js';
import Footer from './footer.js';

export default function Home() {
  return (
    <div>
      <Header/>

      <main>
        <TextLanding/>
        <GamesLanding/>
      </main>

      <Footer/>
    </div>
  );
}
