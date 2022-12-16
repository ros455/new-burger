import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppContext } from 'next/app';
import { FC } from 'react';
import { ITemplate } from '../../types';
import DetailsInfo from '../../components/ItemDetailsInfo';
interface dessertIProps {
  desserts: ITemplate
  }

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/desserts`);
    const data = await res.json();

    console.log('data',data);
  
    const paths = data.map((desserts:any) => {
      return {
        params: { id: desserts.id.toString() }
      }
    });
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps:GetStaticProps = async (context:any) => {
    debugger;
    const {id} = context.params;
    
    const res = await fetch(`${process.env.API_HOST}/desserts/${id}`);
    const data = await res.json();
  
    return {
      props: { desserts: data }
    }
  }


const Dessert:FC<dessertIProps> = ({desserts}) => {
    return (
      <DetailsInfo details={desserts}/>
    );
};

export default Dessert;