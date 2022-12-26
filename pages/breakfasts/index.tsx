import {useState} from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { ITemplate } from '../../types';
import Template from '../../components/ItemTemplate'

interface breakfastIProps {
  breakfasts: ITemplate,
}

export const getServerSideProps:GetServerSideProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/breakfast`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { breakfasts: data },
    }
  };


const Breakfasts:FC<breakfastIProps> = ({breakfasts}) => {
  const [title] = useState<string>('Сніданки')
  const [link] = useState<string>('breakfasts')


    return (
      <>
        <Template 
        props={breakfasts}
        title={title}
        link={link}/>
      </>
    );
};

export default Breakfasts;