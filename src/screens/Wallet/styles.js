import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
	background: #000;
	flex: 1;
`;

export const Header = styled(LinearGradient)`
	height: 300px;
	padding: 10px;
`;

export const HeaderContainer = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
`;

export const BalanceContainer = styled.View`
	margin: 10px 0;

	flex-direction: row;
	align-items: center;
`;

export const Value = styled.Text`
	font-size: 38px;
	font-weight: 200;
	color: #fff;
`;

export const Bold = styled.Text`
	font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
	margin-left: 10px;
`;

export const Info = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #fff;
`;

export const Actions = styled.View`
	margin-top: 40px;

	flex-direction: row;
	align-items: center;
`;

export const Action = styled.TouchableOpacity`
	width: 150px;
	height: 45px;

	border: 1px solid rgba(255, 255, 255, 0.6);
	border-radius: 25px;
	margin: 0 10px;

	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const ActionLabel = styled.Text`
	margin-left: 10px;

	font-size: 16px;
	color: #fff;
`;

export const UseBalance = styled.View`
	background: #1c1c1e;
	height: 60px;

	padding: 0 16px;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
	font-size: 16px;
	font-weight: 500;
	color: #fff;
`;

export const PaymentMethods = styled.View`
	padding: 0 16px;
	margin-top: 25px;
`;

export const PaymentMethodsTitle = styled.Text`
	text-transform: uppercase;
	color: #8e8e93;
`;

export const Card = styled.View`
	background: #1e232a;

	padding: 20px;
	border-radius: 8px;
	margin-top: 10px;
`;

export const CardBody = styled.View`
	flex-direction: row;
`;

export const CardDetails = styled.View`
	padding-right: 20px;
	flex: 1;
`;

export const CardTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #fff;
`;

export const CardInfo = styled.Text`
	margin-top: 15px;

	font-size: 14px;
	color: rgba(255, 255, 255, 0.8);
`;

export const Img = styled.Image`
	width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
	margin-top: 15px;

	flex-direction: row;
	align-items: center;
`;

export const AddLabel = styled.Text`
	margin-left: 15px;

	font-size: 18px;
	font-weight: bold;
	color: #0db060;
`;

export const UseTicketContainer = styled.View`
	margin-top: 25px;
	align-items: center;
`;

export const UseTicketButton = styled.TouchableOpacity`
	flex-direction: row;
`;

export const UseTicketLabel = styled.Text`
	margin-left: 15px;

	font-size: 16px;
	font-weight: bold;
	text-decoration-line: underline;
	color: #0db060;
`;
