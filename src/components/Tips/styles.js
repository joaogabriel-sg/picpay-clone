import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		paddingLeft: 16,
	},
}))`
	margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
	background: ${({ bgColor }) => bgColor};
	width: 150px;
	height: 200px;

	padding: 15px;
	border-radius: 8px;
	margin-right: 16px;

	justify-content: space-between;
`;

export const Title = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
`;

export const Img = styled.Image`
	align-self: center;
`;
