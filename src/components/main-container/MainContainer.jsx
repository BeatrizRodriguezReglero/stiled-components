import Button from "../button/Button"
import Container from "../container/Container"
import Image from "../image/Image"
import Text from "../text/Text"
import Title from "../title/Title"

import { StyledMainContainer } from "./main-container.styles"

const MainContainer = ()=>{
    return(
    <StyledMainContainer>
        
        <Container $color='#E28625'>
            <Image $image= '/images/icon-sedans.svg'/>
           <Title> SEDANS</Title>
           <Text>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</Text>
           <Button $color='#E28625'></Button>
        </Container>
        <Container $color='#006971'>
            <Image $image= '/images/icon-suvs.svg'/>
            <Title> SUVS</Title>
            <Text>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</Text>
            <Button $color='#006971'></Button>
        </Container>
        
        <Container $color='#004140'>
            <Image $image= '/images/icon-luxury.svg'/>
            <Title> LUXURY</Title>
            <Text>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </Text>
            <Button $color='#004140'></Button>
        </Container>
        
    </StyledMainContainer>) 
}
export default MainContainer