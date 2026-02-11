const CategoryHeader = () => {
  return (
    <div className="page-header">
      <h1>Browse Categories</h1>

      <div className="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="sep">/</span>
        <a href="/CasualWear">Casual Wear</a>
        <span className="sep">/</span>
        <span>Sweatshirts</span>
      </div>
    </div>
  );
};

export default CategoryHeader;
