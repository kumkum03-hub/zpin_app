import { useState, useRef, useEffect } from "react";
import "./FilterDropdown.css";

const FilterDropdown = ({
  label,
  options,
  onSelect,
  selectedValue,
  showSelectedInLabel = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (option) => {
    if (onSelect) onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <button
        className="filter-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {showSelectedInLabel && selectedValue ? (
          <>
            {label}: <span className="selected">{selectedValue}</span>
          </>
        ) : (
          label
        )}

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`chevron ${isOpen ? "rotate" : ""}`}>
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>

      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        {options.map((option) => (
          <button
            key={option.value}
            className="dropdown-item"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
