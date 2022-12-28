import React from 'react';
import { FC, useState } from 'react';
import { ITemplate } from '../types';
import Image from 'next/legacy/image';
import Link from 'next/link';
import {BsFillCartPlusFill} from 'react-icons/bs'
import style from '../styles/Template.module.scss'
import { addCart, incrementCart } from '../store/cart';
import { useAppDispatch, useAppSelector } from '../hook';
import SidePanel from './SidePanel';
import Head from 'next/head';

interface templateIProps {
    props: ITemplate,
    title:string,
    link:string
  }

const Template:FC<templateIProps> = ({props, title,link}) => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

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
        <title>{title}</title>
        <meta name="title" content={title}/>
      </Head>
      <div className={style.template_wrapper}>
          <SidePanel/>
          <div className={style.main_block_wrapper}>
          <div className={style.title_wrapper}>
        <p>{title}</p>
        </div>
                <div className={style.main_block}>
        {props && props.map((el:ITemplate) => (
          <div key={el.id} className={style.template_item}>

              <Link href={`/${link}/${el.id}`} className={style.photo_wrapper}>
                <Image 
                  src={`${el.image}`} 
                  alt={`${el.name}`} 
                  width='100'
                  height='100'
                  layout="responsive" 
                  objectFit="cover"
                  className={style.photo_item }
                />
                <div className={style.template_desc}>
                <p>{ el.desc }</p>
                </div>
              </Link>
              <Link href={`/${link}/${el.id}`} className={style.header_wrapper}>
                <p>{ el.name }</p>
              </Link>
              
              <div className={style.template_selling}>
                <p className={style.price}>{el.price} ₴</p>
                <div className={style.add_to_cart__wrapper}>
                  <p className={style.add_to_cart_text }>Додати у кошик</p>
                  <BsFillCartPlusFill 
                  className={style.cart_icon}
                  onClick={() => addToCart(el)}/>
                </div>
              </div>
          </div>
        ))}
      </div>
          </div>
        </div>
      </>
    );
};

export default Template;