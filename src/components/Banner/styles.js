import styled from 'styled-components/native';

export const Container = styled.View`
	background: #6882bb;
	height: 150px;

	padding: 15px;
	border-radius: 8px;
	margin: 25px 16px;

	flex-direction: row;
	align-items: center;
`;

export const Details = styled.View`
	flex: 1;
	padding-right: 10px;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #fff;
`;

export const Description = styled.Text`
	margin-top: 15px;

	font-size: 14px;
	color: #fff;
`;
