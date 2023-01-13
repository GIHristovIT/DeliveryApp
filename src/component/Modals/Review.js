import { useState, useEffect } from 'react';
import '../../styles/Modal.scss';
import '../../styles/MainSettings.scss';
import CartComponent from '../BottomContent/CartComponent';
import '../../styles/CardsStyle.scss';
import { useRef} from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function ModalReview(props) {

  //used for dragable
  const ref = useRef(); // reference the wrapping div:
  const { events } = useDraggable(ref); //  pass the reference to the useDraggable hook:

  //count selectedItems sum on every change of selectedItems status
  const [sum, setSum] = useState(0)
  useEffect(() => {
    if (props.selectedItems) {
      setSum(props.selectedItems.reduce((accumulator, object) => {
        return accumulator + object.price
      }, 0))
    }
  });

  //prevent the modal to close when clicking into its content
  return (<div onClick={e => e.stopPropagation()} style={{position: 'relative', top: '12vh'}}>
    <div className='modalReviewContent'>
      <div {...events} className='dragable1'
      ref={ref}
     >
      {/* list the items */}
      {props.selectedItems.map((item, index) => (
        <div key={index} className='purchasePrice'  >
          {item.name}
          <div>
            <span className='dolar' >$ &nbsp;</span>{item.price}
          </div>
        </div>
      ))}
      </div>
      {/* lprint total price */}
      <div className='totalPrice'>Total
      <div>
      <span className='dolar' >$ &nbsp;</span>{sum}
      </div>
      </div>
    </div>
    {/* put the cart options div at the bottom*/}
    <div className='cartContainer'>
      <div className='cartGrayDivModal'>
        <CartComponent selectedItems={props.selectedItems}
         setDisplayModal={props.setDisplayModal}
          setIsSuccess={props.setIsSuccess} 
          setSelectedItems={props.setSelectedItems}/>
      </div>
    </div>
  </div>
  );
}