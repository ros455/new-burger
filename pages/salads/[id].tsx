import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppContext } from 'next/app';
import { FC } from 'react';
import { ITemplate } from '../../types';
import DetailsInfo from '../../components/ItemDetailsInfo';
interface saladIProps {
    salads: ITemplate
  }

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/salads`);
    const data = await res.json();

    console.log('data',data);
  
    const paths = data.map((salads:any) => {
      return {
        params: { id: salads.id.toString() }
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
    
    const res = await fetch(`${process.env.API_HOST}/salads/${id}`);
    const data = await res.json();
  
    return {
      props: { salads: data }
    }
  }


const Salad:FC<saladIProps> = ({salads}) => {
    return (
      <DetailsInfo details={salads}/>
    );
};

export default Salad;