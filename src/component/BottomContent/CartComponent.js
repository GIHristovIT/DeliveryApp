import '../../styles/CartComponent.scss';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function CartComponent(props) {
    //sum gets refresh on every changeState of selectedItems
    const [sum, setSum] = useState(0)
    useEffect(() => {
        if (props.selectedItems) {
            setSum(props.selectedItems.reduce((accumulator, object) => {
                return accumulator + object.price
            }, 0))
        }
    }, [props.selectedItems]);


    // upon clicking the basket button we need to 
    // - display review modal 
    // -but only if there are items in cart
    function startReviewCheck() {
        if (props.selectedItems.length !== 0) {
            props.setIsSuccess(false);
            props.setDisplayModal(true);
        }
    }

    return (
        <motion.div animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            initial={{ scale: 0 }}
            className='innerItemsContainer'>
            <span className='basketContainer1' onClick={() => startReviewCheck()}>
                <img src={require('../../icons/shopping-basket (1) 2.png')} />
            </span>
            <span className='sumPriceStyle'>{sum !== 0 ? sum : "0.00"}$</span>
            <input type="button" value="Order Now"
             className='orderNowButton' 
             disabled={props.selectedItems.length === 0}
                onClick={() => {
                    // when we order the success modal should appear and selectedItems are reset
                    props.setIsSuccess(true);
                    props.setDisplayModal(true);
                    props.setSelectedItems([]);
                }
                } />
        </motion.div>
    );
}