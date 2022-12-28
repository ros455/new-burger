import {useState} from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import { ITemplate } from '../../types';
import Template from '../../components/ItemTemplate';

interface burgerIProps {
  burgers: ITemplate,
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/burgers`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { burgers: data },
    }
  };


const Burgers:FC<burgerIProps> = ({burgers}) => {
  const [title] = useState<string>('Бургери')
  const [link] = useState<string>('burgers')
  console.log('burgers',burgers);
    return (
      <>
        <Template props={burgers}
        title={title}
        link={link}/>
      </>
    );
};

export default Burgers;