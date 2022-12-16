import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppContext } from 'next/app';
import { FC } from 'react';
import { ITemplate } from '../../types';
import DetailsInfo from '../../components/ItemDetailsInfo';
interface mainDishesIProps {
    main_dishes: ITemplate
  }

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/main-dishes`);
    const data = await res.json();

    console.log('data',data);
  
    const paths = data.map((main_dishes:any) => {
      return {
        params: { id: main_dishes.id.toString() }
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
    
    const res = await fetch(`${process.env.API_HOST}/main-dishes/${id}`);
    const data = await res.json();
  
    return {
      props: { main_dishes: data }
    }
  }


const MainDishess:FC<mainDishesIProps> = ({main_dishes}) => {
    return (
      <DetailsInfo details={main_dishes}/>
    );
};

export default MainDishess;