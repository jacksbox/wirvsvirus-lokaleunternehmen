import React from 'react'

import CategorySelect from './CategorySelect'

const SearchBar = ({ categories, handleCategoriesChange }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1200 }}>
      <CategorySelect categories={categories} handleCategoriesChange={handleCategoriesChange} />
    </div>
  )
}

export default SearchBar