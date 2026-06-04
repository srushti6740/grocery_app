import { title } from 'node:process';
import react from 'react';        

export const metadata = {
    title: "PRODUCTS PAGE",
    description: "PRODUCTS",
};


const ProductPageLayout = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default ProductPageLayout
