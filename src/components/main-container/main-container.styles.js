import styled from 'styled-components';

const StyledMainContainer = styled.div`
	width: 90%;
	height: 1326px;
	border-radius: 8px;
	overflow: hidden;
	margin: 10px auto;
	@media screen and (width >= 768px) {
		width: 920px;
		height: 500px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;
export { StyledMainContainer };
