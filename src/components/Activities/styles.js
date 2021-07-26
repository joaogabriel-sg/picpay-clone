import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 0 16px;
	margin-top: 25px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #fff;
`;

export const Card = styled.View`
	background: #1e222b;
	padding: 15px;
	border-radius: 8px;
	margin-top: 20px;
`;

export const CardHeader = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
	margin-left: 15px;
	font-size: 16px;
	color: #fff;
`;

export const Bold = styled.Text`
	font-weight: bold;
`;

export const CardBody = styled.View`
	margin-top: 20px;
`;

export const UserName = styled.Text`
	font-size: 20px;
	color: #fff;
`;

export const CardFooter = styled.View`
	margin-top: 15px;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Details = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Value = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #f75175;
`;

export const Divider = styled.View`
	background: rgba(255, 255, 255, 0.4);
	width: 2px;
	height: 13px;
	margin: 0 10px;
`;

export const Date = styled.Text`
	margin-left: 5px;
	color: #fff;
`;

export const Actions = styled.View`
	flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
	margin-left: 15px;
	flex-direction: row;
	align-items: center;
`;

export const OptionLabel = styled.Text`
	margin-left: 5px;
	font-size: 14px;
	color: #fff;
`;
