import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import Button from '../button/Button';
import noPost from '../../assets/no-poster.png';

function MovieCard({ item, cate }) {
  const itemLink = `/${category[cate]}/${item.id}`;
  const imgLink = item.poster_path
    ? apiConfig.w500Image(item.poster_path)
    : noPost;

  return (
    <Link to={itemLink}>
      <div
        className="movie_card lazy"
        style={{
          backgroundImage: `url(${imgLink})`,
        }}
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
