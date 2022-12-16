import Head from 'next/head'
import Image from 'next/legacy/image';
import Link from 'next/link'
import { useState } from 'react'
import { ICategories } from '../types'
import style from '../styles/Home-Page.module.scss'
import global from '../styles/Global.module.scss'

export default function Home() {

  const [categories] = useState<ICategories[]>([
    {
      link: "burgers",
      title: "БУРГЕРИ",
      image: "/images/БУРГЕРИ.png",
      id: "001"
    },
    {
      link: "breakfasts",
      title: "СНІДАНКИ",
      image: "/images/СНІДАНКИ.png",
      id: "002"
    },
    {
      link: "main-dishes",
      title: "ОСНОВНІ СТРАВИ",
      image: "/images/ОСНОВНІ СТРАВИ.png",
      id: "003"
    },
    {
      link: "salads",
      title: "САЛАТИ",
      image: "/images/САЛАТИ.png",
      id: "004"
    },
    {
      link: "desserts",
      title: "ДЕСЕРТИ",
      image: "/images/ДЕСЕРТИ.png",
      id: "005"
    },
    {
      link: "coffe-tea",
      title: "КАВА ТА ЧАЙ",
      image: "/images/КАВА ТА ЧАЙ.png",
      id: "006"
    },
  ])

  return (
    <>
      <Head>
        <title>Головна</title>
        <meta name="title" content="Головна" />
      </Head>
      <div className={global.container}>
        <div className={style.categories}>
          {categories.map((el) => (
            <div key={el.id} className={style.categories_item}>
              <Link href={el.link} className={style.image_wrapper}>
                <Image
                  src={`${el.image}`}
                  alt={`${el.title}`}
                  width='100'
                  height='100'
                  layout="responsive"
                  objectFit="cover"
                  className={style.image} />
              </Link>
              <Link href={el.link}>
                <p>{el.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
