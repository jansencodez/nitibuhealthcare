import Product from "@/types/Product";

const getProductImage = (product: Product) => {
  return (
    `/images/products/${product.name}.jpg` 
  );
};

export default getProductImage;
