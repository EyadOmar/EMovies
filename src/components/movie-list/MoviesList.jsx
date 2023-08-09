import { useState, useEffect } from 'react';
import tmdbApi, { category } from '../../api/tmdbApi';
import './moviesList.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';

function MoviesList({ categoryProp, type, id }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const params = {};
      let res = null;
      if (type !== 'similar') {
        res =
          categoryProp === category.movie
            ? await tmdbApi.getMoviesList(type, { params })
            : await tmdbApi.getTvList(type, { params });
      } else {
        res = await tmdbApi.similar(categoryProp, id);
      }

      setItems(res.results);
    };
    getItems();
  }, []);

  return (
    <div className="movies_List">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item) => {
          return (
            <SwiperSlide key={`moviesListItem_${item.id}`}>
              <MovieCard item={item} cate={categoryProp} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MoviesList;
