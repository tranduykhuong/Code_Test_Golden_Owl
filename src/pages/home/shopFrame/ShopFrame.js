import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classes from './ShopFrame.module.scss';
import CardProduct from '../../../components/cardProduct/CardProduct';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initProducts, updateProduct } from '../../../store/reducers/productSlice';
import { LoadingDonut } from '../../../components/loading/Loading';
import { addToCart } from '../../../store/reducers/cartSlice';


const ShopFrame = () => {
  const shoes = useSelector(state => state.products);
  const dispatch = useDispatch();

  // GET data
  useEffect(() => {
    fetch('./data/shoes.json')
      .then((res) => res.json())
      .then((data) => {
        // Add product list to redux state
        dispatch(initProducts(data?.shoes))
      });
  }, []);

  return (
    <div className={classes.shop}>
      {
        shoes.length ?
          (shoes.map((item, idx) => (
            <div className={classes.shop__item} key={+idx}>
              <CardProduct 
                item={item}
              /> 
            </div>)
          )) 
          : <div className={classes.shop__loading}>
            <LoadingDonut />
          </div>
      }
    </div>
  );
};


ShopFrame.propTypes = {

};


export default ShopFrame;
