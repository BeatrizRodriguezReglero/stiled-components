import Container from "../container/Container"
import Image from "../image/Image"
import Title from "../title/Title"

import { StyledMainContainer } from "./main-container.styles"

const MainContainer = ()=>{
    return(
    <StyledMainContainer>
        
        <Container $color='#E28625'>
            <Image $image= '/images/icon-sedans.svg'/>
           <Title> SEDANS</Title>
        </Container>
        <Container $color='#006971'>
            <Image $image= '/images/icon-suvs.svg'/>
            <Title> SUVS</Title>
        </Container>
        
        <Container $color='#004140'>
            <Image $image= '/images/icon-luxury.svg'/>
            <Title> LUXURY</Title>
        </Container>
        
    </StyledMainContainer>) 
}
export default MainContainer