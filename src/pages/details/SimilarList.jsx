import MoviesList from '../../components/movie-list/MoviesList';
function SimilarList({ category, id }) {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <section className="similar container mb-3">
      <h2 className="mb-2">Similar</h2>
      <div className="simlar_list" onClick={goToTop}>
        <MoviesList categoryProp={category} type={'similar'} id={id} />
      </div>
    </section>
  );
}

export default SimilarList;
