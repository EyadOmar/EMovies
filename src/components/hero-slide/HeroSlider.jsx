import tmdbApi, { movieType } from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSlideItem from './HeroSlideItem';
import './heroSlide.scss';
import TrailerModal from './TrailerModal';

function HeroSlide() {
  const [movies, setMovies] = useState([]);

  SwiperCore.use([Autoplay, Pagination]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const params = { page: 1 };
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovies(res.results.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            {() => {
              return <HeroSlideItem movie={movie} classNameProp={'active'} />;
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
