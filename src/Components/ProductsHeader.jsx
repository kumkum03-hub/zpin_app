import FilterDropdown from './FilterDropdown';

const ProductsHeader = ({
   title, 
  sortLabel,
  onSortSelect,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  selectedPrice,
  setSelectedPrice,
  sizeOptions,
  colorOptions,
  priceOptions,
  sortOptions,
}) => {
  return (
    <div className="page-header">
      <h1 className="title">{title}</h1>

      <div className="controls">
        <FilterDropdown
          label="Size"
          options={sizeOptions}
          selectedValue={selectedSize}
          onSelect={setSelectedSize}
        />

        <FilterDropdown
          label="Color"
          options={colorOptions}
          selectedValue={selectedColor}
          onSelect={setSelectedColor}
        />

        <FilterDropdown
          label="Price"
          options={priceOptions}
          selectedValue={selectedPrice}
          onSelect={setSelectedPrice}
        />

        <FilterDropdown
          label={`Sort by: ${sortLabel}`}
          options={sortOptions}
          selectedValue={sortLabel}
          onSelect={onSortSelect}
        />
      </div>
    </div>
  );
};

export default ProductsHeader;
