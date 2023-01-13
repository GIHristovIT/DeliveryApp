import NavigationComp from './NavigationComp';
import DeliveryContent from './DeliveryComp';
import '../../styles/HeaderComponents.scss';

export default function Header() {
// I see that those components are rendered separate on other devices (tablet, mobile) so I prefer to keep them separate for feature implementation
  return (<>
    <div id='brunchyElement'>BRUNCHY</div>
    <div id='headerRightContain'>
      <NavigationComp />
      <DeliveryContent />
    </div>
  </>

  );
}
