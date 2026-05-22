import { title } from 'node:process';
import react from 'react';        

export const metadata = {
    title: "PRODUCT DETAIL PAGE",
    description: "PRODUCT",
};


const ProductPageLayout = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default ProductPageLayout
