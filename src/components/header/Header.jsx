import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import { useEffect, useRef } from 'react';

const headerNav = [
  {
    page: 'Home',
    path: '/',
  },
  {
    page: 'Movies',
    path: '/movie',
  },
  {
    page: 'Tv Series',
    path: '/tv',
  },
];

function Header() {
  const loc = useLocation();
  const activeLink = loc.pathname;

  const headeRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === activeLink);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      )
        headeRef.current.classList.add('shrink');
      else headeRef.current.classList.remove('shrink');
    };

    window.addEventListener('scroll', shrinkHeader);

    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);
  return (
    <header ref={headeRef}>
      <div className="header__wrap container">
        <Link to="/">EMovies</Link>
        <nav>
          <ul>
            {headerNav.map((link, i) => (
              <li key={i} className={active === i ? 'active' : ''}>
                <Link to={link.path}>{link.page}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
