import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = [];
    Object.keys(props.ingredients).forEach((data) => {
        for (let i = 0; i < props.ingredients[data]; i++) {
            transformedIngredients.push(<BurgerIngredient key={data + i} type = {data}/>)
        }
    });
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding some ingredients</p>}

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );  
};

export default burger;