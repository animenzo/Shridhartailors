import React from 'react'
import { motion } from 'framer-motion'

const workItems = [
  {
    id: 1,
    category: 'Formal',
    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg',
    title: 'Business Suits'
  },
  {
    id: 2,
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg',
    title: 'Wedding Collection'
  },
  // Add more items as needed
]

const Work = () => {
  const [filter, setFilter] = React.useState('all')
  
  const filteredItems = filter === 'all' 
    ? workItems 
    : workItems.filter(item => item.category.toLowerCase() === filter.toLowerCase())

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-10"
      >
        Our Work
      </motion.h1>
      
      <div className="flex gap-4 mb-8">
        {['all', 'formal', 'traditional'].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category 
                ? 'bg-white text-zinc-900' 
                : 'bg-zinc-800 text-white'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-lg bg-zinc-800"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-zinc-300">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Work