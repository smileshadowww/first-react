import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import { getFavoritesList } from '../../redux/cardsRedux';

const Favorite = props => {

  const cards = useSelector(state => getFavoritesList(state, props.id));
  // console.log(cards);
  if(cards.length === 0) return <h2 className={styles.title}> There is no favorites cards for now </h2>
  return (
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-star-o'} />
      <h2 className={styles.title}>Favorites</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} id={card.id} title={card.title}  isFavorite={card.isFavorite} />)}
      </ul>
    </article>
  );
};

export default Favorite;
