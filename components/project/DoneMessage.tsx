import { Box, Text, Grid, Image, Button, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

interface Props {
	handleModalMessage: (boolean: boolean) => void;
	modalRef: React.RefObject<HTMLDivElement>;
}

const DoneMessage: React.FC<Props> = ({ handleModalMessage, modalRef }) => {
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
			<Grid
				placeItems="center"
				position="relative"
				top={{ base: '36', xl: '96' }}
				left={{ base: '0', lg: '50%' }}
				transform={{ lg: 'translateX(-50%)' }}
				rigth="0"
				py={{ base: '8', xl: '12' }}
				px={{ base: '6', xl: '12' }}
				mx="4"
				gap="6"
				background="#fff"
				rounded="lg"
				width={{ lg: '35%' }}
				ref={modalRef}
			>
				<Image src="images/icon-check.svg" />
				<Heading as="h4" fontSize={{ base: 'lg', xl: '2xl' }}>
					Thanks for your support!
				</Heading>
				<Text
					fontSize={{ base: 'sm', xl: '16' }}
					color="neutral.gray"
					textAlign="center"
					lineHeight={{ base: 'tall', xl: 'taller' }}
				>
					Your pledge bring us one step closer to sharing Martercraft
					Bamboo Monitor Riser worldwide. You will get an email once
					our campaign is completed.
				</Text>
				<Button
					background="primary.moderateCyan"
					color="#fff"
					fontSize="sm"
					rounded="full"
					px="8"
					height="12"
					_hover={{
						background: 'primary.darkCyan',
					}}
					_active={{
						background: 'primary.darkCyan',
						opacity: 1,
					}}
					_focus={{ outline: 'none' }}
					onClick={() => handleModalMessage(false)}
				>
					Got it!
				</Button>
			</Grid>
		</Box>
	);
};

export default DoneMessage;
