import React from 'react';
import style from '../styles/Footer.module.scss'
import Link from 'next/link';
import {GiHamburger} from 'react-icons/gi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
const Footer = () => {
    return (
        <footer className={style.footer_wrappper}>
            <div className={style.logotype_wrapper}>
                <Link href='/'>
                    <GiHamburger className={style.burber_icon} />
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
                    <BsFillTelephoneFill />
                    <p>0 (68) 823 00 07</p>
                </div>
                <div className={style.contacts_item_wrapper}>
                    <BsFillTelephoneFill />
                    <p>0 (68) 835 00 07</p>
                </div>
                <div className={style.contacts_item_wrapper}>
                    <BiTime />
                    <p>Щодня з 10:00 до 22:00</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;