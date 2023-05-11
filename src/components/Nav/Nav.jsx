import classNames from 'classnames';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

//pageType => 'HOMEPAGE'| 'SEARCH_PAGE'

const Nav = (props) => {
  const { pageType } = props;

  return (
    <nav className={styles.nav}>
      <div className={classNames('container', styles.navContent)}>
        <p className={styles.branding}>MTG Application</p>
        <ul className={styles.navlinks}>
          <li>{pageType === 'HOMEPAGE' ? 'Home' : <Link to='/'>Home</Link>}</li>
          <li>
            {pageType === 'SEARCH_PAGE' ? (
              'Search card'
            ) : (
              <Link to='/search-card'>Search card</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
