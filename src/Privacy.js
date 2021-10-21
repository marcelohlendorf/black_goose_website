import * as React from 'react';

import Header from './header.js';
import Footer from './footer.js';

export default function Privacy() {
  return (
    <div>
      <Header/>
      <div style={{marginTop: '10%'}}>
        <h1>PRIVACY POLICY</h1>
        <h5>Effective Date: November 1, 2021</h5>
        <h5>
        Thank you for playing our games! This Privacy Policy describes: <br/>
          - The ways we collect personal data about you and why we do so <br/>
          - How we use your personal data, and <br/>
          - The choices you have about your personal data. <br/>
This Privacy Policy applies to Black Goose games, store, sites and related services, which we here collectively call the Service. We may periodically update this Privacy Policy by posting a new version on bgg.com. If we make any material changes, we will notify you as required under applicable law, including by posting a notice in the Service prior to the change becoming effective. Your continued use of the Service after the effective date will be subject to the new Privacy Policy.
        </h5>
      </div>
      <Footer/>
    </div>
  );
}
