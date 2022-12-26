import {useState} from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { ITemplate } from '../../types';
import Template from '../../components/ItemTemplate';

interface mainDishesIProps {
    main_dishes: ITemplate,
}

export const getServerSideProps:GetServerSideProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/main-dishes`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { main_dishes: data },
    }
  };


const MainDishes:FC<mainDishesIProps> = ({main_dishes}) => {
  const [title] = useState<string>('Основні страви')
  const [link] = useState<string>('main-dishes')
    return (
      <>
        <Template props={main_dishes}
        title={title}
        link={link}/>
      </>
    );
};

export default MainDishes;