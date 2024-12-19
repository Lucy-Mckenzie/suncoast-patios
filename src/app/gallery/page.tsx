"use client"
import React, { useState } from 'react'
import Image from 'next/image'

type Product = {
  id: number;
  category: string;
  imageSrc: string;
  alt: string;
}

const products: Product[] = [
  { id: 1, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image' },
  { id: 2, category: 'Louvers', imageSrc: '/demo.png', alt: 'Louvers Image' },
  { id: 3, category: 'Blinds', imageSrc: '/demo.png', alt: 'Blinds Image' },
  { id: 4, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image 2' },
  { id: 5, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image' },
  { id: 6, category: 'Louvers', imageSrc: '/demo.png', alt: 'Louvers Image' },
  { id: 7, category: 'Blinds', imageSrc: '/demo.png', alt: 'Blinds Image' },
  { id: 8, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image 2' },
  { id: 9, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image' },
  { id: 10, category: 'Louvers', imageSrc: '/demo.png', alt: 'Louvers Image' },
  { id: 11, category: 'Blinds', imageSrc: '/demo.png', alt: 'Blinds Image' },
  { id: 12, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image 2' },
  { id: 13, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image' },
  { id: 14, category: 'Louvers', imageSrc: '/demo.png', alt: 'Louvers Image' },
  { id: 15, category: 'Blinds', imageSrc: '/demo.png', alt: 'Blinds Image' },
  { id: 16, category: 'Patios', imageSrc: '/demo.png', alt: 'Patio Image 2' },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value
    setSelectedCategory(category)

    if (category === "All Products") {
    setFilteredProducts(products)
    } else {
      const filtered = products.filter(product => product.category === category)
      setFilteredProducts(filtered)
    }
  }

  return (
    <div className='flex flex-col items-center py-20 space-y-10'>
        <h1 className='text-2xl text-center font-manrope'>
          Gallery
        </h1>

        <div className="form-control w-96">
    <label className="label">
      <span className="label-text">Filter by Product</span>
    </label>
    <select 
    className="select select-bordered w-full"
    value={selectedCategory}
    onChange={handleFilterChange}
    >
      <option>All Products</option>
      <option>Patios</option>
      <option>Louvers</option>
      <option>Blinds</option>
    </select>
  </div>

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {filteredProducts.map(product => (
          <div key={product.id} className="card bg-base-100 shadow-xl transform transition duration-300 hover:scale-105">
            <figure className='rounded-md'>
              <Image
                src={product.imageSrc}
                alt={product.alt}
                width={1200}
                height={800}
                className="object-cover w-full h-64"
                loading="lazy"
              />
            </figure>
          </div>
        ))}
      </div>
      </div>
  )
}
