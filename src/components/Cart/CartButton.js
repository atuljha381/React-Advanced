import classes from './CartButton.module.css';
import { uiActions } from '../../Store/Ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const totalItem = useSelector( state => state.cart.totalQuantity)

  const toggleHandler = ()=> {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
