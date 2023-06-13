import React, { memo } from 'react';
import PropTypes, { object } from 'prop-types';
import classes from './CardCart.module.scss';
import iconPlus from '../../assets/imgs/plus.png';
import iconMinus from '../../assets/imgs/minus.png';
import iconTrash from '../../assets/imgs/trash.png';
import Button from './../button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../../store/reducers/cartSlice';
import { updateProduct } from '../../store/reducers/productSlice';


// ITEM CARD IN CART FREAM
const CardCart = ({ item }) => {
  const [actionLive, setActionLive] = useState(false);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // update an item in cart
    dispatch(updateCart({ id: item?.id, count: item?.count + 1 }))
  }

  const handleDecrease = () => {
    if (item?.count === 1) {
      // remove an item in cart in case amount = 0
      handleRemove();
    } else {
      // update an item in cart in case amount > 0
      dispatch(updateCart({ id: item?.id, count: item?.count - 1 }))
    }
  }

  // Remove a item from cart
  const handleRemove = () => {
    setActionLive(true);
    const interval = setInterval(() => {
      // update product list
      dispatch(updateProduct({id: item?.id, status: false}));
      // remove from cart
      dispatch(removeFromCart(item?.id));

      clearInterval(interval);
      setActionLive(false)
    }, 500);
  }

  return (
    <div className={`${classes.cardCart} ${actionLive && classes['cardCart-leave']}`}>
      <div className={classes.cardCart__img}>
        <div className={classes['cardCart__img-circle']} style={{backgroundColor: item?.color}}>
          <div className='cardCart-block'>
            <img src={item.image} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.cardCart__body}>
        <h4>{item?.name}</h4>
        <h3>{`$${item?.price}`}</h3>
        <div className={classes['cardCart__body-action']}>
          <div className={classes['cardCart__body-action-count']}>
            <Button gray small circleBtn
              onClick={handleDecrease}
            >
              <img width={10} src={iconMinus} alt="plus" />
            </Button>
            <span>{item?.count}</span>
            <Button gray small circleBtn
              onClick={handleIncrease}
            >
              <img width={10} src={iconPlus} alt="plus" />
            </Button>
          </div>
          <Button primary small circleBtn
            onClick={handleRemove}
          >
            <img width={16} src={iconTrash} alt="trash" />
          </Button>
        </div>
      </div>
    </div>
  );
};


CardCart.propTypes = {
  item: object
};


export default memo(CardCart);
