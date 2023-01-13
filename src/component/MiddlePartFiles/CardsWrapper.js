import '../../styles/CardsStyle.scss';
import allItems from '../../DataInitial';
import { motion } from "framer-motion";
import { useRef} from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function CardWrapper(props) {

  const ref = useRef(); // reference the wrapping div:
  const { events } = useDraggable(ref); //  pass the reference to the useDraggable hook:

  return (
    // popup animation with scrolling div. the hovering efect is done in the scss
    <motion.div
      {...events}
      ref={ref}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      className='cardsMasterContainer' >
      {allItems.items.map(item => (
        <div key={item.name} className='cardWrapper'>
          <div className='foodPictureContainer' >
            <img src={require('../../icons/' + item.image)} />
          </div>
          <div className='cardName' >
            {item.name}
          </div>
          <div className='cardCaption' >
            {item.caption}
          </div>
          <div className='cardPrice' >
            <span className='dolar' >$ &nbsp;</span>{item.price}
          </div>
          {/* adds item when click on basket container. it is better than set it on icon as it is easier to hit */}
          <div className='basketContainer' onClick={()=>props.setSelectedItems([...props.selectedItems, item])}>
            <img className='basketPicture' src={require('../../icons/shopping-basket (1) 2.png')} />
          </div>
        </div>
      ))}
    </motion.div>
  );
}