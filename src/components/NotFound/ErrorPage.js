import styles from './ErrorPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const ErrorPage = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>404 not found</PageTitle>
        <p className={styles.subtitle}>Please use correct url or click on one of navigation bars</p>
      </div>
    );
  };

  export default ErrorPage;
