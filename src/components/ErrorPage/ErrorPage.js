import styles from './ErrorPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const ErrorPage = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>404 not found</PageTitle>
        <p className={styles.subtitle}>Please use correct url, click on one of navigation bars or <span href="/">CLICK HERE</span></p>
      </div>
    );
  };

  export default ErrorPage;
