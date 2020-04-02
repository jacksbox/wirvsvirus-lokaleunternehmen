import React from 'react'

import CategorySelect from './CategorySelect'

const SearchBar = ({ categories, handleCategoriesChange }) => {
  return (
    <div style={{ position: 'absolute', top: 8, left: 60, right: 20, zIndex: 1200 }}>
      <CategorySelect categories={categories} handleCategoriesChange={handleCategoriesChange} />
    </div>
  )
}

export default SearchBar