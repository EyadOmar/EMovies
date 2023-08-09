import { useEffect, useState, useRef } from 'react';
import tmdbApi from '../../api/tmdbApi';

function Trailer({ cate, id }) {
  const [trailer, setTrailer] = useState(null);
  const iFrameRef = useRef(null);

  useEffect(() => {
    const getTrailer = async () => {
      const res = await tmdbApi.getVideos(cate, id);
      let filteredTrialers = res.results.filter(
        (result) => result.type === 'Trailer'
      );
      if (filteredTrialers.length <= 0) {
        filteredTrialers = res.results.filter(
          (result) => result.type === 'Teaser'
        );
      }
      setTrailer(filteredTrialers[0]);
    };

    getTrailer();
  }, [cate, id]);
  return (
    <section className="trailer containe mb-3">
      {trailer ? (
        <>
          <h2 className="mb-2">Trailer</h2>
          <iframe
            src={'https://www.youtube-nocookie.com/embed/' + trailer.key}
            ref={iFrameRef}
            title="trailer"
          ></iframe>
        </>
      ) : (
        ''
      )}
    </section>
  );
}

export default Trailer;
