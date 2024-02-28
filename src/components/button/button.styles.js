import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: white;
	color: ${({ $color }) => $color};
	font-family: 'Lexend Deca', sans-serif;
	font-size: 15px;
	width: 146px;
	height: 48px;
	border-radius: 25px;
	border: none;
	@media (hover: hover) {
		&:hover {
			background-color: ${({ $color }) => $color};
			color: white;
			border: 2px solid white;
		}
	}
	@media screen and (width >= 768px) {
		position: relative;
		bottom: -48px;
	}
`;
export { StyledButton };
