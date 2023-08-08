import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import Button from '../button/Button';

function MovieCard({ item, cate }) {
  const itemLink = `/${category[cate]}/${item.id}`;
  const imgLink = apiConfig.w500Image(item.poster_path);

  return (
    <Link to={itemLink}>
      <div
        className="movie_card lazy"
        style={{ backgroundImage: `url(${imgLink})` }}
      >
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3 style={{ textAlign: 'center' }}>{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;
