import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    const {
        content,

        disabled,
        block,
        large,
        medium,
        small,

        circleBtn,
        borderRadius,

        primary,
        gray,

        className,

        ...passProps
    } = props;

    const classProps = Object.keys(props)
        .map((el) => (classes[el] && props[el] === true ? classes[el] : ''))
        .join(' ');

    return (
      <button
        className={`
          ${classes['my-btn']}
          ${classProps}
          ${className}
        `}
            {...passProps}
        >
          <span className={classes['my-btn__content']}>{props.children || content}</span>
        </button>
    );
};

export default Button;
