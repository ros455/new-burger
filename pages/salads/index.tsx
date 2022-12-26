import {useState} from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { ITemplate } from '../../types';
import Template from '../../components/ItemTemplate';

interface saladsIProps {
    salads: ITemplate,
}

export const getServerSideProps:GetServerSideProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/salads`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { salads: data },
    }
  };


const Salads:FC<saladsIProps> = ({salads}) => {
  const [title] = useState<string>('Салати')
  const [link] = useState<string>('salads')
    return (
      <>
        <Template props={salads}
        title={title}
        link={link}/>
      </>
    );
};

export default Salads;