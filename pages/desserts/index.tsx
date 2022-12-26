import {useState} from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { ITemplate } from '../../types';
import Template from '../../components/ItemTemplate';

interface dessertsIProps {
  desserts: ITemplate,
}

export const getServerSideProps:GetServerSideProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/desserts`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { desserts: data },
    }
  };


const Desserts:FC<dessertsIProps> = ({desserts}) => {
  const [title] = useState<string>('Десерти')
  const [link] = useState<string>('desserts')
    return (
      <>
        <Template props={desserts}
        title={title}
        link={link}/>
      </>
    );
};

export default Desserts;