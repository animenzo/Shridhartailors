import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    serviceType: 'suit'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      serviceType: 'suit'
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-10">Book an Appointment</h1>
        
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-2">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium mb-2">Service Type</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white"
            >
              <option value="suit">Suit Tailoring</option>
              <option value="shirt">Shirt Tailoring</option>
              <option value="traditional">Traditional Wear</option>
              <option value="alterations">Alterations</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
          >
            Book Appointment
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default BookAppointment