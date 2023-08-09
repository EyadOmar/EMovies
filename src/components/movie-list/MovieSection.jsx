import { Link } from 'react-router-dom';
import { OutLinedButton } from '../button/Button';
import MoviesList from './MoviesList';

function MovieSecion({ title, cate, type }) {
  return (
    <section className="mb-3 container">
      <div className="section_header mb-2">
        <h2>{title}</h2>
        <Link to={`/${cate}`}>
          <OutLinedButton classNameProp="small">View More</OutLinedButton>
        </Link>
      </div>
      <MoviesList categoryProp={cate} type={type} />
    </section>
  );
}

export default MovieSecion;
