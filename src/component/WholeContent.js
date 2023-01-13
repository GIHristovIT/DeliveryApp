import MiddleText from '../component/MiddlePartFiles/MiddleText';
import CardWrapper from '../component/MiddlePartFiles/CardsWrapper';
import CartComponent from  '../component/BottomContent/CartComponent';
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function WholeContent(props) {

  return (<>
  {/* I keep MiddleText and Card Wrapper as separate components as if the site gets bigger they are reusable */}
  <div id='MidMainContainer' >
      <MiddleText />
      {/* here we need to mark when an item is put into cart *selectedItems *setSelectedItems  */}
      <CardWrapper setSelectedItems={props.setSelectedItems} selectedItems={props.selectedItems} />
    </div>
    {/* I prefer to hide this component from the content using displayModal as there is such one in the modal */}
    {!props.displayModal ?
      <div className='cartContainer'>
        <div className='cartGrayDivPage'>
          {/* in this component we need to 
        -take data for selected item to count their price *selectedItems
        -empty the cart *setSelectedItems
        -close review modal or show the success one *setIsSuccess *setIsSuccess */}
          <CartComponent selectedItems={props.selectedItems}
            setSelectedItems={props.setSelectedItems}
            setDisplayModal={props.setDisplayModal}
            setIsSuccess={props.setIsSuccess}
          />
        </div>
      </div>:<Outlet/>}
      
  </>
  );
}