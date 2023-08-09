import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

function CastList({ cate, id }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      const res = await tmdbApi.credits(cate, id);
      setCast(res.cast.slice(0, 10));
    };
    getCast();
  }, [cate, id]);

  return (
    <Swiper
      className="actors_swiper"
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={'auto'}
    >
      {cast.map((actor) => (
        <SwiperSlide className="actor_slide" key={`actor_${actor.id}`}>
          <div className="actor-card">
            <img
              src={apiConfig.w500Image(actor.profile_path)}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CastList;
