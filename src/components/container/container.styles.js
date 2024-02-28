import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	height: 442px;
	padding: 49px 49px 0px 49px;

	background-color: ${({ $color }) => $color};
	@media screen and (width >= 768px) {
		width: 307px;
		height: 500px;
	}
`;

export { StyledContainer };
