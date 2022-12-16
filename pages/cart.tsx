import Image from 'next/legacy/image';
import {RiDeleteBin5Line} from 'react-icons/ri'
import {MdDeleteSweep} from 'react-icons/md'
import style from '../styles/Cart.module.scss'
import { useAppSelector, useAppDispatch } from '../hook';
import { incrementCart, decrementCart, removeCart, removeAll } from '../store/cart';
import { ITemplate } from '../types';
import Head from 'next/head';
import TotalCartSum from '../components/TotalCartSum';
import SelectDeliveryInCart from '../components/SelectDeliveryInCart';

const Cart = () => {
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.cart.items);

    const remove = (id:number) => {
        dispatch(removeCart(id));
      };

      const increment = (id:number) => {
        dispatch(incrementCart(id));
      };
    
      const decrement = (el:ITemplate) => {
        dispatch(decrementCart(el.id));
      };

      const removeAllItem = () => {
        dispatch(removeAll())
      }

    return (
      <>
            <Head>
        <title>Корзина</title>
        <meta name="title" content="Корзина"/>
      </Head>
      <div className={style.cart_wrapper}>
            {product.length != 0 ?
            <>
            <TotalCartSum/>
            <div className={style.delete_all}>
              <button className={style.delete_all_button} onClick={removeAllItem}>
                <p>Видалити всі товари</p>
                <MdDeleteSweep className={style.delete_all_icon} />
              </button>
            </div>
            { product.map((el) => (
                <div key={el.id} className={style.item_wrapper}>
                    <div className={style.image_wrapper}>
                    <Image 
                  src={`${el.image}`} 
                  alt={`${el.name}`} 
                  width='100'
                  height='100'
                  layout="responsive" 
                  objectFit="cover"
                  className={style.image}
                />
                    </div>
                    <div className={style.title_wrapper}>
                        <p>{el.name}</p>
                    </div>
                    <div className={style.price_wrapper}>
                        <p>{el.price}</p>
                    </div>
                    <div className={style.button_wrapper}>
                        <div>
                        <button onClick={() => increment(el.id)}>+</button>
                        </div>
                        <p>{el.count}</p>
                        <div>
                        <button onClick={() => decrement(el)}>-</button>
                        </div>
                        <RiDeleteBin5Line 
                        className={style.delete_icon}
                        onClick={() => remove(el.id)}/>
                    </div>
                </div>
            ))}
            <SelectDeliveryInCart/>
            </>
        :
        <h1>Поки що в корзині нічого немає</h1>}
        </div>
      </>
    )
};

export default Cart;