import HeroSlide from '../components/hero-slide/HeroSlider';
import MovieSection from '../components/movie-list/MovieSection';
import { category, movieType, tvType } from '../api/tmdbApi';
function Home() {
  return (
    <>
      <HeroSlide />
      <MovieSection
        title={'Upcoming Movies'}
        cate={category.movie}
        type={movieType.upcoming}
      />
      <MovieSection
        title={'Top Rated Movies'}
        cate={category.movie}
        type={movieType.top_rated}
      />
      <MovieSection
        title={'Popular Tv'}
        cate={category.tv}
        type={tvType.popular}
      />
      <MovieSection
        title={'Top Rated Tv'}
        cate={category.tv}
        type={tvType.top_rated}
      />
    </>
  );
}

export default Home;
