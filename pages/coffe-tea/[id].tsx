import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppContext } from 'next/app';
import { FC } from 'react';
import { ITemplate } from '../../types';
import DetailsInfo from '../../components/ItemDetailsInfo';
interface mainDishesIProps {
    coffe_tea: ITemplate
  }

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/coffe-tea`);
    const data = await res.json();

    console.log('data',data);
  
    const paths = data.map((coffe_tea:any) => {
      return {
        params: { id: coffe_tea.id.toString() }
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
    
    const res = await fetch(`${process.env.API_HOST}/coffe-tea/${id}`);
    const data = await res.json();
  
    return {
      props: { coffe_tea: data }
    }
  }


const CoffeTea:FC<mainDishesIProps> = ({coffe_tea}) => {
    return (
      <DetailsInfo details={coffe_tea}/>
    );
};

export default CoffeTea;