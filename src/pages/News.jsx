import React from 'react'
import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    title: 'Summer Collection Launch',
    date: 'April 15, 2024',
    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg',
    excerpt: 'Introducing our latest summer collection featuring lightweight fabrics and modern designs.'
  },
  {
    id: 2,
    title: 'New Workshop Opening',
    date: 'April 10, 2024',
    image: 'https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg',
    excerpt: 'We're excited to announce the opening of our new workshop in the heart of the city.'
  },
  {
    id: 3,
    title: 'Sustainable Fashion Initiative',
    date: 'April 5, 2024',
    image: 'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg',
    excerpt: 'Our commitment to sustainable fashion takes a new step with eco-friendly materials.'
  }
]

const News = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-10"
        >
          Latest News
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-800 rounded-lg overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-zinc-400">{item.date}</span>
                <h2 className="text-xl font-semibold mt-2 mb-4">{item.title}</h2>
                <p className="text-zinc-400">{item.excerpt}</p>
                <button className="mt-6 text-white font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News