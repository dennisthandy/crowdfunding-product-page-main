import {
	Box,
	Grid,
	Text,
	Divider,
	Stack,
	useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface Props {
	totalPrice: number;
	currentPrice: number;
	totalBackers: number;
	durations: number;
}

const ProjectDetail: React.FC<Props> = ({
	totalPrice,
	currentPrice,
	totalBackers,
	durations,
}) => {
	const [isLgScreen] = useMediaQuery('(min-width: 960px)');

	const [barProgress, setBarProgress] = useState<number>(
		(currentPrice / totalPrice) * 100
	);

	useEffect(() => {
		currentPrice < 100000
			? setBarProgress((currentPrice / totalPrice) * 100)
			: setBarProgress(100);
	}, [currentPrice]);

	return (
		<Box
			borderRadius="lg"
			backgroundColor="#fff"
			boxShadow="base"
			position="relative"
			left="50%"
			transform="translateX(-50%)"
			mt={{ base: '-10', xl: '-16' }}
			py={{ base: '8', xl: '12' }}
			px={{ base: '6', xl: '12' }}
			width={{ base: 'auto', xl: '48rem' }}
		>
			<Grid
				placeItems={{ base: 'center', xl: 'start' }}
				gap="6"
				templateColumns={{ lg: 'repeat(5, 1fr)' }}
			>
				<Box width={{ xl: '40' }}>
					<Text textAlign="center" fontSize="4xl" fontWeight="bold">
						${new Intl.NumberFormat().format(currentPrice)}
					</Text>
					<Text
						textAlign="center"
						fontSize={{ base: 'sm', xl: '16' }}
						color="neutral.gray"
					>
						of ${new Intl.NumberFormat().format(totalPrice)} backed
					</Text>
				</Box>

				<Divider
					width={{ base: '20', lg: '0' }}
					height={{ base: '0', lg: '20' }}
					mx="auto"
					mt={{ base: '6', lg: 0 }}
					orientation={isLgScreen ? 'vertical' : 'horizontal'}
				/>

				<Box>
					<Text textAlign="center" fontSize="4xl" fontWeight="bold">
						{new Intl.NumberFormat().format(totalBackers)}
					</Text>
					<Text
						textAlign="center"
						fontSize={{ base: 'sm', xl: '16' }}
						color="neutral.gray"
					>
						total backers
					</Text>
				</Box>

				<Divider
					width={{ base: '20', lg: '0' }}
					height={{ base: '0', lg: '20' }}
					mx="auto"
					mt={{ base: '6', lg: '0' }}
					orientation={isLgScreen ? 'vertical' : 'horizontal'}
				/>

				<Box>
					<Text textAlign="center" fontSize="4xl" fontWeight="bold">
						{durations}
					</Text>
					<Text
						textAlign="center"
						fontSize={{ base: 'sm', xl: '16' }}
						color="neutral.gray"
					>
						days left
					</Text>
				</Box>
			</Grid>
			<Box width="full" height="4" rounded="full" bg="gray.200" mt="10">
				<Box
					width={barProgress.toString() + '%'}
					height="4"
					rounded="full"
					bg="primary.moderateCyan"
				></Box>
			</Box>
		</Box>
	);
};

export default ProjectDetail;
