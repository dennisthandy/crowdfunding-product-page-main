import { Box, Heading, Grid, Text } from '@chakra-ui/react';
import RewardCard from './RewardCard';

type Reward = {
	id: number;
	title: string;
	price: number;
	description: string;
	amount: number;
};

interface Props {
	description: string[];
	handleModal: (boolean: boolean, selectedReward: string | number) => void;
	rewards: Reward[];
}

const About: React.FC<Props> = ({ description, handleModal, rewards }) => {
	return (
		<Box
			borderRadius="lg"
			backgroundColor="#fff"
			boxShadow="base"
			position="relative"
			left="50%"
			transform="translateX(-50%)"
			mt={{ base: '6' }}
			py={{ base: '8', xl: '12' }}
			px={{ base: '6', xl: '12' }}
			width={{ base: 'auto', xl: '48rem' }}
		>
			<Heading as="h2" fontSize={{ base: 'lg', lg: 'xl' }}>
				About this project
			</Heading>
			<br />
			{description.map((desc, index) => (
				<Text
					key={index.toString()}
					fontSize={{ base: 'sm', xl: '16' }}
					color="neutral.gray"
					lineHeight={{ base: 'tall', xl: 'taller' }}
					mb="4"
				>
					{desc}
				</Text>
			))}
			<Grid gap="4" mt="6">
				{rewards.map((reward, index) =>
					index > 0 ? (
						<RewardCard
							key={index.toString()}
							id={reward.id.toString()}
							title={reward.title}
							price={reward.price}
							description={reward.description}
							amount={reward.amount}
							handleModal={handleModal}
						/>
					) : null
				)}
			</Grid>
		</Box>
	);
};

export default About;
