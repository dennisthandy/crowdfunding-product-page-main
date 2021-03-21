import {
	Box,
	Text,
	Grid,
	Flex,
	Container,
	Button,
	Image,
	RadioGroup,
	Radio,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import RewardCard from './RewardCard';

type Reward = {
	id: number;
	title: string;
	price: number;
	description: string;
	amount: number;
};

interface Props {
	handleModal: (boolean: boolean) => void;
	updateDetails: (price: string, reward: Reward) => void;
	rewards: Reward[];
	selectedReward: string | number;
	handleSelectReward: (id: string | number) => void;
	modalRef: React.RefObject<HTMLDivElement>;
}

const Modal: React.FC<Props> = ({
	handleModal,
	updateDetails,
	rewards,
	selectedReward,
	handleSelectReward,
	modalRef,
}) => {
	useEffect(() => {
		if (modalRef.current)
			modalRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [modalRef.current]);
	return (
		<Box
			position="absolute"
			top="0"
			left="0"
			right="0"
			bottom="0"
			minHeight="100vh"
			background="rgba(0,0,0,0.3)"
			zIndex="5"
		>
			<Container>
				<Box
					position="relative"
					top={{ base: '28', xl: '48' }}
					left="50%"
					transform="translateX(-50%)"
					width={{ base: 'auto', xl: '48rem' }}
					background="#fff"
					py={{ base: '8', xl: '12' }}
					px={{ base: '6', xl: '12' }}
					rounded="lg"
				>
					<Flex justifyContent="space-between" alignItems="center">
						<Text
							fontWeight="bold"
							fontSize={{ base: 'lg', lg: '2xl' }}
						>
							Back this project
						</Text>
						<Button onClick={() => handleModal(false)}>
							<Image src="/images/icon-close-modal.svg" />
						</Button>
					</Flex>
					<Text
						mt="6"
						fontSize={{ base: 'sm', lg: '16' }}
						color="neutral.gray"
					>
						Want to support us in bringing Mastercraft Bamboo
						Monitor Riser out in the wolrd?
					</Text>

					<RadioGroup
						display="grid"
						style={{ gap: '1rem' }}
						mt="6"
						onChange={(e) => handleSelectReward(e)}
						value={selectedReward}
						ref={modalRef}
					>
						{rewards.map((reward, index) => (
							<RewardCard
								key={index.toString()}
								id={reward.id.toString()}
								title={reward.title}
								price={reward.price}
								description={reward.description}
								amount={reward.amount}
								isModal={true}
								selectedReward={selectedReward}
								updateDetails={updateDetails}
							/>
						))}
					</RadioGroup>
				</Box>
			</Container>
		</Box>
	);
};

export default Modal;
