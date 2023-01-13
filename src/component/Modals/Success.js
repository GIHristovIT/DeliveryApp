import '../../styles/Modal.scss'
import '../../styles/CartComponent.scss'

export default function ModalSuccess(props) {
   //prevent the modal to close when clicking into its content
  return (<div className='modalSuccessContent' onClick={e=>e.stopPropagation()}>
    <div className='congratLabel'>Congratulations!</div>
    <div className='succcessCaption'> Your order it's on its way</div>
    {/* closes on clicking Ok */}
       <input className='buttonOk' type='button' value='Ok'  onClick={()=> props.setDisplayModal(false)}></input>
  </div>
  );
}