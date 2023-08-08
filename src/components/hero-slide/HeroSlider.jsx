import tmdbApi, { movieType } from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSlideItem from './HeroSlideItem';
import './heroSlide.scss';
import TrailerModal from './TrailerModal';

function HeroSlide() {
  const [movies, setMovies] = useState([]);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const params = { page: 1 };
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovies(res.results.slice(0, 4));
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            {({ isActive }) => {
              return (
                <HeroSlideItem
                  movie={movie}
                  classNameProp={isActive ? 'active' : ''}
                />
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
      {movies.map((movie) => (
        <TrailerModal key={`trailer_modal_${movie.id}`} movie={movie} />
      ))}
    </div>
  );
}

export default HeroSlide;
