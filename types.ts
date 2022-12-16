 export interface ITemplate {
    map(arg0: (burger: ITemplate) => JSX.Element): import("react").ReactNode;
    name:string,
    image:string,
    desc:string,
    price:number,
    id:number,
    count:number
  }

  export interface ICategories {
    link:string,
    title:string,
    image:string,
    id:string
  }