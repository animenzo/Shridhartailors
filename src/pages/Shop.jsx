import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Classic Wool Suit',
    price: '$899',
    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg'
  },
  {
    id: 2,
    name: 'Traditional Wedding Sherwani',
    price: '$1299',
    image: 'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg'
  },
  {
    id: 3,
    name: 'Business Casual Blazer',
    price: '$599',
    image: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg'
  },
  {
    id: 4,
    name: 'Designer Kurta Set',
    price: '$499',
    image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg'
  }
]

const Shop = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-10"
        >
          Shop Our Collection
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-800 rounded-lg overflow-hidden"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-zinc-400">{product.price}</p>
                <button className="mt-4 w-full py-2 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop