
import { StyledContainer } from "./container.styles"

const Container = ({$color, children})=>{
 return (
    <>
        <StyledContainer  $color={$color}>
           {children}
        </StyledContainer>
    </>
 )
}
export default Container