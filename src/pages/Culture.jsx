import React from 'react'
import { motion } from 'framer-motion'

const Culture = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Culture</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            At Shreedhar Atelior, we blend traditional craftsmanship with modern innovation
            to create timeless pieces that reflect our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Heritage & Craftsmanship</h2>
            <p className="text-zinc-400">
              With over 50 years of experience in tailoring, our master craftsmen bring
              decades of expertise to every garment. We maintain the highest standards
              of quality while embracing innovative techniques.
            </p>
            <img 
              src="https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg" 
              alt="Tailoring"
              className="w-full h-80 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Sustainability</h2>
            <p className="text-zinc-400">
              We're committed to sustainable practices in our workshop. From sourcing
              eco-friendly materials to minimizing waste, we ensure our impact on the
              environment is positive.
            </p>
            <img 
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg" 
              alt="Workshop"
              className="w-full h-80 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Culture