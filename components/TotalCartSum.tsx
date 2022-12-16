import React from 'react';
import {useState} from 'react';
import style from '../styles/Cart.module.scss'
import { useAppSelector } from '../hook';

const TotalCartSum = ({ time = 3, step = 1}) => {
    const [ currVal, setCurrVal ] = useState(0);
    const product = useAppSelector((state) => state.cart.items);

    let totalSum = 0;

    product.forEach((el) => {
        totalSum += el.price * el.count
      })

      if(currVal != totalSum && currVal < totalSum) {
        setTimeout(setCurrVal, time, currVal + step);
      }

      if(currVal != totalSum && currVal > totalSum) {
        setTimeout(setCurrVal, time, currVal - step);
      }
    return (
        <div>
            <h1 className={style.total_sum}>Загальна сумма: {currVal} грн</h1>
        </div>
    );
};

export default TotalCartSum;