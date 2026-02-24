import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
     <div className="px-4 sm:px-10 py-16 border-t">
      
      {/* Page Title */}
      <div className="text-center mb-12">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          We'd love to hear from you! Whether you have a question about products,
          orders, or anything else — our team is ready to answer all your questions.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Our Store</h3>
            <p className="text-gray-600 text-sm mt-2">
              Banepa, Nepal <br />
              Ecommerce Street, 44600
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600 text-sm mt-2">
              +977 98XXXXXXXX
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600 text-sm mt-2">
              support@ecommerce.com
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-5">

          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact