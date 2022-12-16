import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppContext } from 'next/app';
import { FC } from 'react';
import { ITemplate } from '../../types';
import DetailsInfo from '../../components/ItemDetailsInfo';

interface breakfastIProps {
  breakfasts: ITemplate,
}

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/breakfast`);
    const data = await res.json();

    console.log('data',data);
  
    const paths = data.map((breakfasts:any) => {
      return {
        params: { id: breakfasts.id.toString() }
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
    
    const res = await fetch(`${process.env.API_HOST}/breakfast/${id}`);
    const data = await res.json();
  
    return {
      props: { breakfasts: data }
    }
  }


const Breakfast:FC<breakfastIProps> = ({breakfasts}) => {
    return (
          <DetailsInfo details={breakfasts}/>
    );
};

export default Breakfast;