import { Box, Text, Flex, Button, Image, Grid } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	title: string;
	description: string;
	handleModal: (boolean: boolean, selectedReward: string | number) => void;
}

const ProjectCard: React.FC<Props> = ({ title, description, handleModal }) => {
	const [bookmarkProject, setBookmarkProject] = useState<boolean>(false);

	const handleBookmark = () => {
		setBookmarkProject((prevState) => !prevState);
	};

	return (
		<Grid
			position="relative"
			bottom={{ base: '16', xl: '24' }}
			left="50%"
			transform="translateX(-50%)"
			mx="auto"
			py={{ base: '8', xl: '12' }}
			px={{ base: '6', xl: '12' }}
			borderRadius="lg"
			backgroundColor="#fff"
			boxShadow="base"
			gap="5"
			width={{ base: 'auto', xl: '48rem' }}
		>
			<Box
				position="absolute"
				top="-6"
				left="50%"
				transform="translateX(-50%)"
			>
				<Image src="images/logo-mastercraft.svg" />
			</Box>
			<Text
				as="h1"
				mt="6"
				px="2"
				fontWeight="bold"
				fontSize={{ base: 'xl', xl: '3xl' }}
				textAlign="center"
			>
				{title}
			</Text>
			<Text
				as="p"
				textAlign="center"
				color="neutral.gray"
				fontSize={{ base: 'sm', xl: '16' }}
			>
				{description}
			</Text>
			<Flex justifyContent="space-between" alignItems="center" mt="4">
				<Button
					backgroundColor="primary.moderateCyan"
					color="#fff"
					borderRadius="full"
					px="12"
					height="14"
					_hover={{
						background: 'primary.darkCyan',
					}}
					_active={{
						background: 'primary.darkCyan',
						opacity: 1,
					}}
					_focus={{ outline: 'none' }}
					onClick={() => handleModal(true, 0)}
				>
					Back this project
				</Button>
				<Flex onClick={handleBookmark} cursor="pointer">
					<Box position="relative" zIndex="1">
						<svg
							width="56"
							height="56"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g fill="none" fillRule="evenodd">
								<circle
									fill={
										bookmarkProject
											? 'hsl(176, 72%, 28%)'
											: '#2F2F2F'
									}
									cx="28"
									cy="28"
									r="28"
								/>
								<path
									fill={bookmarkProject ? '#fff' : '#B1B1B1'}
									d="M23 19v18l5-5.058L33 37V19z"
								/>
							</g>
						</svg>
					</Box>
					<Box
						backgroundColor="gray.200"
						rounded="full"
						px="6"
						py="4"
						ml="-10"
						display={{ base: 'none', lg: 'block' }}
					>
						<Text
							fontWeight="bold"
							color={
								bookmarkProject
									? 'primary.darkCyan'
									: 'neutral.gray'
							}
							ml="7"
						>
							{bookmarkProject ? 'Bookmarked' : 'Bookmark'}
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Grid>
	);
};

export default ProjectCard;
