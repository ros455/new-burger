import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppContext } from 'next/app';
import { FC } from 'react';
import { ITemplate } from '../../types';
import DetailsInfo from '../../components/ItemDetailsInfo';

interface burgerIProps {
    burger: ITemplate
  }

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/burgers`);
    const data = await res.json();

    console.log('data',data);
  
    const paths = data.map((burger:any) => {
      return {
        params: { id: burger.id.toString() }
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
    
    const res = await fetch(`${process.env.API_HOST}/burgers/${id}`);
    const data = await res.json();
  
    return {
      props: { burger: data }
    }
  }


const Burger:FC<burgerIProps> = ({burger}) => {
    return (
          <DetailsInfo details={burger}/>
    );
};

export default Burger;