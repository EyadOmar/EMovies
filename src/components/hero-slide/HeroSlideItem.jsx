import apiConfig from '../../api/apiConfig';
import tmdbApi, { category } from '../../api/tmdbApi';
import Button, { OutLinedButton } from '../button/Button';
import { useNavigate } from 'react-router-dom';

const HeroSlideItem = ({ movie, classNameProp }) => {
  let nav = useNavigate();
  const background = apiConfig.originalImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );

  const openTrailer = async () => {
    const trailerModal = document.querySelector(`#modal_${movie.id}`);

    const videos = await tmdbApi.getVideos(category.movie, movie.id);

    console.log(videos);

    if (videos.results.length > 0) {
      const videoSrc =
        'https://www.youtube.com/embed/' +
        videos.results.filter((video) => video.type === 'Trailer')[0].key;
      trailerModal
        .querySelector('.modal_content > iframe')
        .setAttribute('src', videoSrc);
    } else {
      trailerModal.querySelector('.modal_content').innerHTML =
        'No Trailer Available';
    }

    trailerModal.classList.toggle('active');
  };
  return (
    <div
      className={`hero-slide__item ${classNameProp}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item_content container">
        <div className="hero-slide__item_content_info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="btns">
            <Button onClick={() => nav.push('/movie/' + movie.id)}>
              Watch Now
            </Button>
            <OutLinedButton onClick={openTrailer}>Watch Trailer</OutLinedButton>
          </div>
        </div>
        <div className="hero-slide__item_content_poster">
          <img src={apiConfig.w500Image(movie.poster_path)} alt={movie.title} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
