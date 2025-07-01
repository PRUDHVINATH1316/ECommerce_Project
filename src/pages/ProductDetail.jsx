import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Edit, Trash2, Package, Calendar, Tag, Building, DollarSign, Archive } from 'lucide-react'
import LoadingSpinner from '../components/LoadingSpinner'
import { productService } from '../services/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const data = await productService.getProductById(id)
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productService.deleteProduct(id)
        navigate('/products')
      } catch (error) {
        console.error('Error deleting product:', error)
        alert('Failed to delete product')
      }
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading product details..." />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product not found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
              {product.imageDate ? (
                <img
                  src={`data:${product.imageType};base64,${product.imageDate}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <Package className="h-24 w-24 text-gray-400" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex space-x-2">
                  <Link
                    to={`/edit-product/${product.id}`}
                    className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <Edit className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="p-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.productAvailable 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.productAvailable ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Brand</p>
                    <p className="font-semibold text-gray-900">{product.brand}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <Tag className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">{product.category}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <Archive className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Stock Quantity</p>
                    <p className="font-semibold text-gray-900">{product.stockQuantity} units</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Release Date</p>
                    <p className="font-semibold text-gray-900">{formatDate(product.releaseDate)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Link
                to={`/edit-product/${product.id}`}
                className="btn-primary flex-1 text-center"
              >
                Edit Product
              </Link>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Delete Product
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail