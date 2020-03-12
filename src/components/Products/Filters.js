import React, { useContext } from "react";
import { ProductsContext } from "../../context/products";

function Filters() {
  const {
    sorted,
    filters: { search, category, shipping, price },
    updateFilters
  } = useContext(ProductsContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">Search products</h2>
      <form className="filters-form">
        <div>
          <div className="form-group">
            <label htmlFor="search">Search term</label>
            <input
              className="form-control"
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={updateFilters}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              name="category"
              id="category"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="programming">programming</option>
              <option value="sports and nutrition">sports and nutrition</option>
              <option value="job and career">job and career</option>
              <option value="ancient history">ancient history</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">free shipping</label>
          </div>
        </div>
        <div className="price-group">
          <p>price</p>
          <label>
            <input
              type="radio"
              name="price"
              value="all"
              checked={price === "all"}
              onChange={updateFilters}
            />
            all
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $20
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="20"
              checked={price === 20}
              onChange={updateFilters}
            />
            $20 - $40
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="40"
              checked={price === 40}
              onChange={updateFilters}
            />
            Over $40
          </label>
        </div>
      </form>
      <h6>total products: {sorted.flat().length}</h6>
      <hr />
    </section>
  );
}

export default Filters;
