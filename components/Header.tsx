import {
	Box,
	Flex,
	Text,
	Image,
	Link as ChakraLink,
	Grid,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

const Header: React.FC = () => {
	const [isLgScreen] = useMediaQuery('(min-width: 960px)');

	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const handleMenu = (boolean: boolean): void => {
		setOpenMenu(boolean);
	};

	return (
		<Box as="header" position="relative" width="full">
			{isLgScreen ? (
				<Image
					src="/images/image-hero-desktop.jpg"
					position="relative"
					zIndex="-1"
					width="inherit"
				/>
			) : (
				<Image
					src="/images/image-hero-mobile.jpg"
					position="relative"
					zIndex="-1"
					width="inherit"
				/>
			)}
			<Flex
				as="nav"
				justify="space-between"
				alignItems="center"
				px={{ base: '6', lg: '10', xl: '36' }}
				pt={{ base: '4', lg: '8' }}
				position="absolute"
				top="0"
				left="0"
				zIndex="1"
				width="full"
				_before={{
					lg: {
						content: '""',
						position: 'absolute',
						top: '-10px',
						right: 0,
						width: '75%',
						height: '10px',
						boxShadow: '0px 0 60px 40px rgba(0, 0, 0, 0.8)',
						zIndex: 100,
					},
				}}
			>
				<Text
					color="#fff"
					fontSize="3xl"
					fontWeight="bold"
					ml={{ xl: '8' }}
				>
					crowdfund
				</Text>

				<Flex display={{ base: 'none', lg: 'flex' }}>
					<NextLink href="/">
						<ChakraLink as="a" p="4" color="#fff">
							About
						</ChakraLink>
					</NextLink>
					<NextLink href="/">
						<ChakraLink as="a" p="4" color="#fff">
							Discover
						</ChakraLink>
					</NextLink>
					<NextLink href="/">
						<ChakraLink as="a" p="4" color="#fff">
							Get Started
						</ChakraLink>
					</NextLink>
				</Flex>

				<Box
					onClick={() => handleMenu(!openMenu)}
					display={{ base: 'block', lg: 'none' }}
				>
					{openMenu ? (
						<Image src="/images/icon-close-menu.svg" />
					) : (
						<Image src="/images/icon-hamburger.svg" />
					)}
				</Box>
				{openMenu && (
					<Box
						position="absolute"
						top="0"
						left="0"
						right="0"
						bottom="0"
						background="rgba(0,0,0,0.3)"
						minHeight="100vh"
						zIndex="-1"
					>
						<Grid
							borderRadius="lg"
							backgroundColor="#fff"
							mx="6"
							position="relative"
							top="20"
						>
							<NextLink href="/">
								<ChakraLink
									as="a"
									fontWeight="bold"
									fontSize="lg"
									p="6"
									borderBottom="1px"
									borderColor="gray.200"
								>
									About
								</ChakraLink>
							</NextLink>
							<NextLink href="/">
								<ChakraLink
									as="a"
									fontWeight="bold"
									fontSize="lg"
									p="6"
									borderBottom="1px"
									borderColor="gray.200"
								>
									Discover
								</ChakraLink>
							</NextLink>
							<NextLink href="/">
								<ChakraLink
									as="a"
									fontWeight="bold"
									fontSize="lg"
									p="6"
								>
									Get Started
								</ChakraLink>
							</NextLink>
						</Grid>
					</Box>
				)}
			</Flex>
		</Box>
	);
};

export default Header;
