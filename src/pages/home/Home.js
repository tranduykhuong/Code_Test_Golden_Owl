import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Home.module.scss'
import Button from '../../components/button/Button';
import AppCard from '../../components/appCard/AppCard';
import ShopFrame from './shopFrame/ShopFrame';
import CartFrame from './cartFrame/CartFrame';


const Home = () => {
  const totalPrice = useSelector(state => state?.carts?.totalPrice);

  return (
    <>
      <AppCard title="Our Products">
        <ShopFrame />
      </AppCard>
      <AppCard title="Your cart" summary={`$${totalPrice.toFixed(2)}`}>
        <CartFrame />
      </AppCard>
    </>
  );
};

export default Home;
