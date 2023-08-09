import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import noPoster from '../../assets/no-poster.png';
import './details.scss';
import CastList from './CastList';
import Trailer from './Trailer';
import SimilarList from './SimilarList';

function Details() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      const params =
        category === 'movie' ? { movie_id: id } : { series_id: id };
      const res = await tmdbApi.detail(category, id, { params });
      setItem(res);
    };
    getItem();
  }, [category, id]);

  const bannerLink = item ? apiConfig.w500Image(item.backdrop_path) : '';
  const posterLink = item
    ? item.poster_path || item.backdrop_path
      ? apiConfig.w500Image(item.poster_path || item.backdrop_path)
      : noPoster
    : '';

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${bannerLink})` }}
          ></div>
          <section className="item-content container">
            <div className="item-content_poster">
              <img src={posterLink} alt={item.title} loading="lazy" />
            </div>
            <div className="item-content_info">
              <h1 className="title mb-2">{item.title || item.name}</h1>
              <div className="tags mb-2">
                {item.genres &&
                  item.genres
                    .slice(0, 3)
                    .map((genre) => (
                      <span key={`genere_${genre.id}`}>{genre.name}</span>
                    ))}
              </div>
              <p className="mb-2">{item.overview}</p>
              <div className="item-details">
                <span>{item.runtime} mins</span>
                <a
                  href={`https://www.imdb.com/title/${item.imdb_id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IMDB
                </a>
              </div>
            </div>
          </section>
          <section className="cast container">
            <div className="section__header mb-2">
              <h2>Cast</h2>
            </div>
            <CastList cate={category} id={id} />
          </section>
          <Trailer cate={category} id={id} />
          <SimilarList category={category} id={id} />
        </>
      )}
    </>
  );
}

export default Details;
