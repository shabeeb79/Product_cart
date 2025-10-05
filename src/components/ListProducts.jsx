import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProducts } from './ProductFetch';
import { AddCart } from './Cart';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ListProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center mt-10 text-lg font-semibold animate-pulse">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div>
    <Navbar/>
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((itm) => (
          <div
            key={itm.id}
            className="border rounded-xl shadow-lg p-5 flex flex-col justify-between bg-gradient-to-br from-blue-100 via-purple-100 to-pink-50 hover:scale-105 transform transition duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{itm.title}</h3>
              <p className="text-gray-700 mb-4 font-semibold">Price: <span className="text-green-600">${itm.price}</span></p>
              <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-indigo-500 rounded-full">
                New
              </span>
            </div>
            <button
              onClick={() => dispatch(AddCart(itm))}
              className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:from-green-500 hover:to-blue-600 shadow-lg transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/cart')}
          className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-red-600 shadow-xl transition"
        >
          Go to Cart
        </button>
      </div>
    </div>
 </div>
  );
};

export default ListProducts;
