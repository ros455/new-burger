import {useState} from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import { ITemplate } from '../../types';
import Template from '../../components/ItemTemplate';

interface coffeTeaIProps {
    coffe_tea: ITemplate,
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/coffe-tea`);
    const data = await response.json();
    
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { coffe_tea: data },
    }
  };


const CoffeTeas:FC<coffeTeaIProps> = ({coffe_tea}) => {
  const [title] = useState<string>('Кава та чай')
  const [link] = useState<string>('coffe-tea')
  console.log('coffe_tea',coffe_tea);
  
    return (
      <>
        <Template props={coffe_tea}
        title={title}
        link={link}/>
      </>
    );
};

export default CoffeTeas;