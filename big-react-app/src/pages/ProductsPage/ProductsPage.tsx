import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IProduct } from '../../models/ProductTypes';
import { useCart } from '../../contexts/CartContext';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  // subscribing to the CartContext
  const cartContext  = useCart();
  console.log(cartContext);

  // REST API URL: https://fakestoreapi.com/products
  // Http Method: GET
  // REST API Client: axios

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products`
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product: IProduct) => {
    console.log(product);
    cartContext.addToCart(product);
  }

  return (
    <div>
      <h1>Products</h1>

      <div className="row">
        {products && products.map( (product) => {
          return (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height={280}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  {/* <p className="card-text">{product.description}</p> */}
                  <p className="card-text">sample description should come here</p>
                  <p>$ {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
       
      </div>
    </div>
  );
}

export default ProductsPage