import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My Meal App</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of Dellicious Food"></img>
      </div>
    </Fragment>
  );
}

export default Header;
