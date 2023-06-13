import React, { memo } from 'react';
import PropTypes, { object } from 'prop-types';
import classes from './CartProduct.module.scss';
import iconCheck from '../../assets/imgs/check.png';
import Button from '../button/Button';
import { updateProduct } from '../../store/reducers/productSlice';
import { addToCart } from '../../store/reducers/cartSlice';
import { useDispatch } from 'react-redux';


// PRODUCT CARD IN SHOP FRAME
const CardProduct = ({ item }) => {
  const {id, image, name, description, price, color, addedToCart} = item;
  
  const dispatch = useDispatch();

  // Add an item to cart
  const handleAddToCart = () => {
    // update an added item in product list
    dispatch(updateProduct({id: item?.id, status: true}));
    // add an item to cart
    dispatch(addToCart(item));
  }

  return (
    <div className={classes.cardProduct}>
      <div className={classes.cardProduct__img} style={{backgroundColor: color}}>
        <img src={image} alt="image" />
      </div>
      <h3 className={classes.cardProduct__name}>{name}</h3>
      <p className={classes.cardProduct__description}>{description}</p>
      <div className={classes.cardProduct__price}>
        <p>{`$${price}`}</p>
        {
          item.addedToCart ? (
            <Button primary large circleBtn disabled>
              <img width={16}  src={iconCheck} alt="check" />
            </Button>
          )
          : (
            <Button primary large borderRadius onClick={handleAddToCart}>
              Add to cart
            </Button>
          )
        }
      </div>
    </div>
  );
};


CardProduct.propTypes = {
  item: object
};


export default memo(CardProduct);
