import Motorche from '../../icons/Motorche.jpg';
import '../../styles/HeaderComponents.scss'

export default function DeliveryContent() {

      return (
            <div id='freeDeliveryContainer'>
                  <div id='freeDeliveryLabel'>Free Delivery</div>
                  <div id='elipse1'>
                        <img id='motorIcon' src={Motorche} alt="fireSpot" />
                  </div>
            </div>
      );
}
