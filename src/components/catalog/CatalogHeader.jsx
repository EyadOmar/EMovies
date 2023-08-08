import headerBg from '../../assets/footer-bg.jpg';
import './catalog.scss';
import { category } from '../../api/tmdbApi';

function CatalogHeader({ cate }) {
  return (
    <div
      className="catalog_header"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <h2>{category.movie === cate ? 'Movies' : 'Tv Shows'}</h2>
    </div>
  );
}

export default CatalogHeader;
