import ModalSuccess from "./Success";
import ModalReview from "./Review";

export default function ModalWrapper(props) {
    return (
        <div className='modPositionAndBackground'
            //click outside of the container hides the modal
            onClick={() => props.setDisplayModal(false)} >
            {props.isSuccess ?
                //success modal can only close *setDisplayModal
                <ModalSuccess setDisplayModal={props.setDisplayModal} />
                //review modal can 
                //       -take data for selected item to count their price *selectedItems
                //       -empty the cart *setSelectedItems
                //       -close review modal or show the success one *setIsSuccess *setIsSuccess 
                : <ModalReview setSelectedItems={props.setSelectedItems} setDisplayModal={props.setDisplayModal} selectedItems={props.selectedItems} setIsSuccess={props.setIsSuccess} />
            }
        </div>
    );
}