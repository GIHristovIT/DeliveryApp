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

    function openModal(whichModal) {
        if (props.selectedItems.length !== 0) {
            if (whichModal==="Review") {
            props.setIsSuccess(false);
        } else
        {
            props.setIsSuccess(true); 
            props.setSelectedItems([]);
        }
            props.setDisplayModal(true);
        }
    }

    return (
        <motion.div animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            initial={{ scale: 0 }}
            className='innerItemsContainer'>
            <span className='basketContainer1' onClick={() => openModal("Review")}>
                <img src={require('../../icons/shopping-basket (1) 2.png')} />
            </span>
            <span className='sumPriceStyle'>{sum !== 0 ? sum : "0.00"}$</span>
            <input type="button" value="Order Now"
             className='orderNowButton' 
             disabled={props.selectedItems.length === 0}
                onClick={() =>openModal("Success")} />
        </motion.div>
    );
}
