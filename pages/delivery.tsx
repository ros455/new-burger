import React from 'react';
import style from '../styles/Delevery.module.scss'
import Head from 'next/head';
const Delivery = () => {
    return (
        <>
    <Head>
        <title>Доставка і оплата</title>
        <meta name="title" content="Доставка і оплата"/>
      </Head>
      <div>
            <div className={style.title_wrapper}>
                <p>Доставка і оплата</p>
            </div>
            <div className={style.main_block}>
                <p className={style.free_delivery}>Доставка від 600 грн безкоштовна</p>
                <div>
                    <p>Працюємо з такими курєрськими службами:</p>
                    <ul className={style.list_ul}>
                        <li>Наш власний курєр</li>
                        <li>Glovo</li>
                        <li>Bolt Food</li>
                        <li>Довезунчик</li>
                        <li>Кабанчик</li>
                    </ul>
                </div>
                <div>
                    <p>Можна забрати на самовивіз з адресси:</p>
                    <p className={style.address}>Місто Київ вулиця миргородська 36</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Delivery;