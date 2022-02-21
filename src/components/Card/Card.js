import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux'
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorites = () => {
    dispatch(toggleFavorite(props.id));
  }
  const removingCard =() => {
    dispatch(removeCard(props.id))
  }

  return (
    <li className={styles.card}>
      <div>{props.title}</div>
      <div>
        <button onClick={toggleFavorites} className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isFavorite)}></button>
        <button onClick={removingCard} className={clsx("fa fa-trash", styles.button)}></button>
      </div>
    </li>
  )
}

export default Card;
