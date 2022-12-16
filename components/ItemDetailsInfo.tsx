import React from 'react';
import { FC } from 'react';
import { ITemplate } from '../types';
import Image from 'next/legacy/image';
import { BsFillCartPlusFill } from 'react-icons/bs'
import style from '../styles/Details-Info.module.scss'
import { addCart, incrementCart } from '../store/cart';
import { useAppDispatch, useAppSelector } from '../hook';
import Head from 'next/head';
interface detailsInfoProps {
    details: ITemplate,
}
const DetailsInfo: FC<detailsInfoProps> = ({ details }) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.items);
    const addToCart = (el:ITemplate) => {
        let isCart = false
        cart.forEach((item) => {
          if(item.id == el.id) {
            isCart = true;
            dispatch(incrementCart(item.id))
          }
        })
    
        if(!isCart) {
          dispatch(addCart(el))
        }
      }
    return (
        <>
      <Head>
        <title>{details.name}</title>
        <meta name="title" content={details.name}/>
      </Head>
      <div className={style.main_block}>
            <div className={style.image_wrapper}>
                <Image
                    src={`${details.image}`}
                    alt={`${details.name}`}
                    width='100'
                    height='100'
                    layout="responsive"
                    objectFit="cover"
                    className={style.image}
                />
            </div>
            <h1 className={style.title}>{details.name}</h1>
            <div className={style.description_wrapper}>
            <p>Опис:</p>
            <p className={style.description}>{details.desc}</p>
            </div>
            <div className={style.salling_block}>
                <div className={style.price_wrapper}>
                    <p>Ціна:</p>
                    <p>{details.price} грн</p>
                </div>
                <div className={style.cart_wrapper}>
                    <p>Додати у кошик</p>
                    <BsFillCartPlusFill 
                    className={style.cart_icon}
                    onClick={() => addToCart(details)}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default DetailsInfo;