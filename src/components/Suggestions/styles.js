import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		alignItems: 'center',
		paddingLeft: 16,
	},
}))`
	background: #1e222b;
	height: 130px;
`;

export const Option = styled.TouchableOpacity`
	width: 80px;
	margin-right: 16px;
	align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
	margin-top: 8px;

	font-size: 14px;
	font-weight: bold;
	color: #fff;
`;
