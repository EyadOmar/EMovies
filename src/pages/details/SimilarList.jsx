import MoviesList from '../../components/movie-list/MoviesList';
function SimilarList({ category, id }) {
  return (
    <section className="similar container mb-3">
      <h2 className="mb-2">Similar</h2>
      <div className="simlar_list">
        <MoviesList categoryProp={category} type={'similar'} id={id} />
      </div>
    </section>
  );
}

export default SimilarList;
