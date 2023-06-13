import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartFrame.module.scss';
import CardCart from '../../../components/cardCart/CardCart';
import { useSelector } from 'react-redux';


const CartFrame = () => {
  const carts = useSelector(state => state.carts.list);

  return (
    <div className={classes.cart}>
      {
        carts.length ? (
          carts.map((item, idx) => (
            <div key={+idx}>
              <CardCart item={item}/>
            </div>
          ))
        ) 
        : (
          <p className={classes.cart__empty}>Your cart is empty.</p>
        )
      }
    </div>
  );
};


CartFrame.propTypes = {

};


export default CartFrame;
