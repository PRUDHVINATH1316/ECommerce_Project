const API_BASE_URL = '/api'

export const productService = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`)
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching product:', error)
      throw error
    }
  },

  // Add new product
  addProduct: async (productData, imageFile) => {
    try {
      const formData = new FormData()
      
      // Add product data as JSON blob
      formData.append('product', new Blob([JSON.stringify(productData)], {
        type: 'application/json'
      }))
      
      // Add image file
      if (imageFile) {
        formData.append('imageFile', imageFile)
      } else {
        // Create a dummy file if no image is provided
        formData.append('imageFile', new File([''], 'dummy.jpg', { type: 'image/jpeg' }))
      }

      const response = await fetch(`${API_BASE_URL}/product`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to add product')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error adding product:', error)
      throw error
    }
  },

  // Update product
  updateProduct: async (id, productData, imageFile) => {
    try {
      const formData = new FormData()
      
      // Add product data as JSON blob
      formData.append('product', new Blob([JSON.stringify(productData)], {
        type: 'application/json'
      }))
      
      // Add image file
      if (imageFile) {
        formData.append('imageFile', imageFile)
      } else {
        // Create a dummy file if no image is provided
        formData.append('imageFile', new File([''], 'dummy.jpg', { type: 'image/jpeg' }))
      }

      const response = await fetch(`${API_BASE_URL}/product/${id}`, {
        method: 'PUT',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to update product')
      }
      
      return await response.text()
    } catch (error) {
      console.error('Error updating product:', error)
      throw error
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
      
      return await response.text()
    } catch (error) {
      console.error('Error deleting product:', error)
      throw error
    }
  },

  // Search products
  searchProducts: async (keyword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/search?Keyword=${encodeURIComponent(keyword)}`)
      if (!response.ok) {
        throw new Error('Failed to search products')
      }
      return await response.json()
    } catch (error) {
      console.error('Error searching products:', error)
      throw error
    }
  },

  // Get product image
  getProductImage: async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${productId}/image`)
      if (!response.ok) {
        throw new Error('Failed to fetch product image')
      }
      return await response.blob()
    } catch (error) {
      console.error('Error fetching product image:', error)
      throw error
    }
  }
}