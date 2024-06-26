import { useSelector } from "react-redux";
import {getItemsSelector} from '../store/slices/cartSlice'

const Cart = () => {
    // const items = useSelector((state)=> state);
    const items = useSelector(getItemsSelector);
    const total = items.reduce((a,b) => a + b.price, 0)
    return (
        <div className="alert alert-success">
            <h3 className="text-center">Total Items: {items.length}(Rs.{total})/-</h3>
        </div>
    );
};

export default Cart;