import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, Edit, Trash2, Package } from 'lucide-react'

const ProductCard = ({ product, onDelete }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {product.imageDate ? (
          <img
            src={`data:${product.imageType};base64,${product.imageDate}`}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="h-16 w-16 text-gray-400" />
          </div>
        )}
        
        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.productAvailable 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.productAvailable ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex flex-col space-y-2">
            <Link
              to={`/product/${product.id}`}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
            >
              <Eye className="h-4 w-4 text-gray-700" />
            </Link>
            <Link
              to={`/edit-product/${product.id}`}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
            >
              <Edit className="h-4 w-4 text-blue-600" />
            </Link>
            <button
              onClick={() => onDelete(product.id)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
            {product.name}
          </h3>
          <span className="text-xl font-bold text-primary-600">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded-full">
            {product.brand}
          </span>
          <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Stock: {product.stockQuantity}</span>
          <span>{formatDate(product.releaseDate)}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard