import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import style from '../styles/Header.module.scss'
import {GiHamburger} from 'react-icons/gi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
import {BsCart4} from 'react-icons/bs'
import { useAppSelector } from '../hook';
const Header = () => {
    const [cartLength, setCartLength] = useState(0);
    const cart = useAppSelector((state) => state.cart.items);

    useEffect(() => {
        console.log('efect');
        
        setCartLength(0)
        cart.forEach((el) => {
            setCartLength(cartLength => cartLength + el.count)
            console.log('cartLength',cartLength);
        })
    },[cart])
    

    return (
        <header className={style.header_wrapper}>
            <div className={style.logotype_wrapper}>
                <Link href='/'>
                <GiHamburger className={style.burber_icon}/>
                </Link>
                <Link href='/'>
                <p className={style.logotype_text}>BURGERS</p>
                </Link>
            </div>
            <div className={style.pay_and_delivery}>
                <Link href='delivery'>Доставка і оплата</Link>
            </div>
            <div className={style.contacts}>
                <div className={style.contacts_item_wrapper}>
                    <BsFillTelephoneFill/>
                    <p>0 (68) 823 00 07</p>
                </div>
                <div className={style.contacts_item_wrapper}>
                <BsFillTelephoneFill/>
                    <p>0 (68) 835 00 07</p>
                </div>
                <div className={style.contacts_item_wrapper}>
                    <BiTime/>
                    <p>Щодня з 10:00 до 22:00</p>
                </div>
            </div>
            <div >
                <Link href='/cart' className={style.cart_wrapper}>
                <BsCart4 className={style.cart_icon}/>
                <div className={style.count_item_wrapper}>
                    <p>{cartLength}</p>
                </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;