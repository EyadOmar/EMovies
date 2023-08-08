import { useParams } from 'react-router-dom';
import CatalogHeader from '../components/catalog/CatalogHeader';
import CatalogGrid from '../components/catalog/CatalogGrid';
function Catalog() {
  const { category } = useParams();
  return (
    <>
      <CatalogHeader cate={category} />
      <CatalogGrid cate={category} />
    </>
  );
}

export default Catalog;
