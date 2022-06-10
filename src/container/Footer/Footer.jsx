import React from 'react';

import { FooterOverlay , Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <>
    <section className="section__padding">
      <Newsletter/>
      <FooterOverlay/>
    </section>
  </>
);

export default Footer;
