import { useEffect, useState } from 'react';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import MovieCard from '../movie-list/MovieCard';
import './catalog.scss';
import { useParams } from 'react-router-dom';
import { OutLinedButton } from '../button/Button';

function CatalogGrid({ cate }) {
  const [totalPage, setTotalPage] = useState(0);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const { searchTerm } = useParams();

  useEffect(() => {
    const getItems = async () => {
      let params = {};
      let res = null;
      if (!searchTerm) {
        res =
          cate === category.movie
            ? await tmdbApi.getMoviesList(movieType.popular, { params })
            : await tmdbApi.getTvList(tvType.popular, { params });
      } else {
        params = { query: searchTerm };
        res = await tmdbApi.search(cate, { params });
      }
      console.log(res);
      setItems(res.results);
      setTotalPage(res.total_pages);
    };
    getItems();
  }, [cate, searchTerm]);

  async function loadMore() {
    let params = { page: page + 1 };
    let res = null;
    if (!searchTerm) {
      res =
        cate === category.movie
          ? await tmdbApi.getMoviesList(movieType.popular, { params })
          : await tmdbApi.getTvList(tvType.popular, { params });
    } else {
      params = { page: page + 1, query: searchTerm };
      res = await tmdbApi.search(cate, { params });
    }
    console.log(res);
    setItems([...items, ...res.results]);
    setPage(page + 1);
  }

  return (
    <section className="catalog_grid">
      <div className="catalog_grid_content container">
        {items.map((item) => {
          return (
            <MovieCard
              key={`$catalog_card_${item.id}`}
              item={item}
              cate={cate}
            />
          );
        })}
      </div>
      {page < totalPage && (
        <div className="catalog_grid_load_more">
          <OutLinedButton classNameProp={'small'} onClick={loadMore}>
            Load More
          </OutLinedButton>
        </div>
      )}
    </section>
  );
}

export default CatalogGrid;
