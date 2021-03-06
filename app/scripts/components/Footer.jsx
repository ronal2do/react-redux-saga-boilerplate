import React from 'react';
import { shouldComponentUpdate } from 'utils/helpers';

const date = new Date();
const Footer = () => (
  <footer className="app__footer">
    <div className="app__container">
      <div>
        <i className="i-creative-commons" />
        <span>{`${date.getFullYear()} RRS-B`}</span>
      </div>
    </div>
  </footer>
);

Footer.shouldComponentUpdate = shouldComponentUpdate;

export default Footer;
