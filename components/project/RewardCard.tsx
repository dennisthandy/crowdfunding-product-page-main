import {
	Grid,
	Box,
	Text,
	Flex,
	Button,
	Radio,
	InputGroup,
	InputLeftElement,
	Input,
	useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';

type Reward = {
	id: number;
	title: string;
	price: number;
	description: string;
	amount: number;
};

interface Props {
	id: string;
	title: string;
	price: number | null;
	description: string;
	amount: number | null;
	isModal?: boolean;
	selectedReward?: string | number;
	handleModal?: (boolean: boolean, selectedReward: string | number) => void;
	updateDetails?: (price: string, reward: Reward) => void;
}

const RewardCard: React.FC<Props> = ({
	id,
	title,
	price,
	description,
	amount,
	isModal,
	selectedReward,
	handleModal,
	updateDetails,
}) => {
	const [isLgScreen] = useMediaQuery('(min-width: 960px)');
	const [value, setValue] = useState<string>(price ? price.toString() : '');

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (!/[^0-9]/g.test(e.target.value)) {
			setValue(e.target.value);
		} else {
			setValue('');
		}
	};

	const handleUpdateDetails = (price: string, reward: Reward): void => {
		updateDetails(price, reward);
	};

	return (
		<Box
			borderRadius="lg"
			backgroundColor="#fff"
			border={isModal && id === selectedReward.toString() ? '2px' : '1px'}
			borderColor={
				isModal && id === selectedReward.toString()
					? 'primary.moderateCyan'
					: 'gray.300'
			}
		>
			<Grid
				p="6"
				gap="6"
				opacity={(isModal && amount == null) || amount ? '1' : '0.5'}
				pointerEvents={
					(isModal && amount == null) || amount ? 'all' : 'none'
				}
			>
				{isModal ? (
					<Flex justify="space-between" width="full">
						<Radio
							colorScheme="cyan"
							value={id}
							size="lg"
							cursor="pointer"
							isChecked={id === selectedReward.toString()}
						>
							<Flex
								direction={{ base: 'column', lg: 'row' }}
								cursor="pointer"
							>
								<Flex
									direction={{ base: 'column', lg: 'row' }}
									ml={{ lg: '3' }}
								>
									<Text
										fontWeight="bold"
										fontSize={{ base: 'md', xl: 'lg' }}
										mr={{ lg: '6' }}
										_hover={{
											lg: {
												color: 'primary.moderateCyan',
											},
										}}
									>
										{title}
										{selectedReward === id}
									</Text>
									{price && (
										<Text
											color="primary.moderateCyan"
											fontSize={{ base: 'sm', xl: '16' }}
										>
											Pledge ${price} or more
										</Text>
									)}
								</Flex>
							</Flex>
						</Radio>
						{isLgScreen && amount !== null && (
							<Text
								fontWeight="bold"
								fontSize="xl"
								display="flex"
								alignItems="center"
								mb={{ base: !isModal ? '6' : '', lg: '0' }}
							>
								{amount}
								<Text
									as="span"
									fontWeight="normal"
									color="neutral.gray"
									fontSize="sm"
									ml="2"
								>
									left
								</Text>
							</Text>
						)}
					</Flex>
				) : (
					<Flex
						direction={{ base: 'column', lg: 'row' }}
						justify="space-between"
					>
						<Text
							fontWeight="bold"
							fontSize={{ base: 'md', xl: 'lg' }}
						>
							{title}
						</Text>
						<Text
							color="primary.moderateCyan"
							fontSize={{ base: 'sm', xl: '16' }}
						>
							Pledge ${price} or more
						</Text>
					</Flex>
				)}
				<Text
					fontSize={{ base: 'sm', xl: '16' }}
					color="neutral.gray"
					lineHeight={{ base: 'tall', xl: 'taller' }}
					ml={isLgScreen && isModal ? '10' : ''}
				>
					{description}
				</Text>
				<Flex
					flexDirection={{ base: 'column', lg: 'row' }}
					justify="space-between"
				>
					{(isModal && isLgScreen) ||
						(amount !== null && (
							<Text
								fontWeight="bold"
								fontSize={!isModal ? '3xl' : 'lg'}
								display="flex"
								alignItems="center"
								mb={{ base: !isModal ? '6' : '', lg: '0' }}
							>
								{amount}
								<Text
									as="span"
									fontWeight="normal"
									color="neutral.gray"
									fontSize="sm"
									ml="2"
								>
									left
								</Text>
							</Text>
						))}

					{!isModal ? (
						<Button
							bg={
								amount
									? 'primary.moderateCyan'
									: 'neutral.black'
							}
							color="#fff"
							rounded="full"
							fontSize="sm"
							display="inline-block"
							width={{ base: '75%', lg: 'auto' }}
							px={{ lg: '8' }}
							height="12"
							_hover={{
								background: 'primary.darkCyan',
							}}
							_active={{
								background: 'primary.darkCyan',
								opacity: 1,
							}}
							_focus={{ outline: 'none' }}
							onClick={() => handleModal(true, id)}
						>
							{amount ? 'Select Reward' : 'Out of Stock'}
						</Button>
					) : null}
				</Flex>
			</Grid>
			{isModal && id === selectedReward.toString() && (
				<Flex
					direction={{ base: 'column', lg: 'row' }}
					align="center"
					justify="space-between"
					borderTop="1px"
					borderColor="gray.300"
					p="6"
				>
					<Text
						textAlign="center"
						fontSize={{ base: 'sm', xl: '16' }}
						color="neutral.gray"
					>
						Enter your pledge
					</Text>
					<Flex mt={{ base: '6', lg: '0' }}>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								color="gray.200"
								children={'$'}
								mt="1"
								ml="2"
							/>
							<Input
								borderRadius="full"
								width="24"
								height="12"
								fontWeight="bold"
								fontSize="sm"
								value={value}
								onChange={handleInput}
							/>
						</InputGroup>
						<Button
							borderRadius="full"
							px="10"
							background="primary.moderateCyan"
							color="white"
							fontSize="sm"
							height="12"
							isDisabled={!value}
							pointerEvents={value ? 'all' : 'none'}
							_hover={{
								background: 'primary.darkCyan',
							}}
							_active={{
								background: 'primary.darkCyan',
								opacity: 1,
							}}
							_focus={{ outline: 'none' }}
							onClick={() =>
								handleUpdateDetails(value, {
									id: parseInt(id),
									title,
									price,
									description,
									amount: amount ? amount - 1 : null,
								})
							}
						>
							Continue
						</Button>
					</Flex>
				</Flex>
			)}
		</Box>
	);
};

export default RewardCard;
