import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import classes from './styles.module.scss';

// LAYOUT BACKGROUND BEHIND THE CARDS
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Outlet />
    </div>
  );
};

Layout.propTypes = {

};

export default Layout;
