import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
	Feather,
	FontAwesome,
	MaterialCommunityIcons,
	AntDesign,
} from '@expo/vector-icons';

import { Title } from '../../components/Banner/styles';

import {
	Wrapper,
	Header,
	HeaderContainer,
	BalanceContainer,
	Value,
	Bold,
	EyeButton,
	Info,
	Actions,
	Action,
	ActionLabel,
	UseBalance,
	UseBalanceTitle,
	PaymentMethods,
	PaymentMethodsTitle,
	Card,
	CardBody,
	CardDetails,
	CardTitle,
	CardInfo,
	Img,
	AddButton,
	AddLabel,
	UseTicketContainer,
	UseTicketButton,
	UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
	const [isVisible, setIsVisible] = useState(true);
	const [useBalance, setUseBalance] = useState(true);

	function handleToggleVisibility() {
		setIsVisible((prevIsVisible) => !prevIsVisible);
	}

	function handleToggleUseBalance() {
		setUseBalance((prevUseBalance) => !prevUseBalance);
	}

	return (
		<Wrapper>
			<Header
				colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
			>
				<HeaderContainer>
					<Title>Saldo PicPay</Title>

					<BalanceContainer>
						<Value>
							R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
						</Value>

						<EyeButton onPress={handleToggleVisibility}>
							<Feather
								name={isVisible ? 'eye' : 'eye-off'}
								color="#fff"
								size={28}
							/>
						</EyeButton>
					</BalanceContainer>

					<Info>Seu saldo está rendendo 100% do CDI</Info>

					<Actions>
						<Action>
							<MaterialCommunityIcons name="cash" color="#fff" size={28} />
							<ActionLabel>Adicionar</ActionLabel>
						</Action>
						<Action>
							<FontAwesome name="bank" color="#fff" size={20} />
							<ActionLabel>Retirar</ActionLabel>
						</Action>
					</Actions>
				</HeaderContainer>
			</Header>

			<UseBalance>
				<UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
				<Switch value={useBalance} onValueChange={handleToggleUseBalance} />
			</UseBalance>

			<PaymentMethods>
				<PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

				<Card>
					<CardBody>
						<CardDetails>
							<CardTitle>Cadastre seu cartão de crédito</CardTitle>
							<CardInfo>
								Cadastre um cartão de crédito para podeer fazer pagamentos mesmo
								quando não tiver saldo no seu PicPay.
							</CardInfo>
						</CardDetails>

						<Img source={creditCard} resizeMode="contain" />
					</CardBody>

					<AddButton>
						<AntDesign name="pluscircleo" color="#0db060" size={30} />
						<AddLabel>Adicionar cartão de crédito</AddLabel>
					</AddButton>
				</Card>
			</PaymentMethods>

			<UseTicketContainer>
				<UseTicketButton>
					<MaterialCommunityIcons
						name="ticket-outline"
						color="#0db060"
						size={20}
					/>
					<UseTicketLabel>Usar código promocional</UseTicketLabel>
				</UseTicketButton>
			</UseTicketContainer>
		</Wrapper>
	);
}
