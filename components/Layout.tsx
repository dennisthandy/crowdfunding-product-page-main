import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Header from './Header';

interface Props {
	title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
	return (
		<Box pb="20" position="relative">
			<Head>
				<title>{title}</title>
				<link
					rel="shortcut icon"
					href="images/favicon-32x32.png"
					type="image/x-icon"
				/>
			</Head>
			<Header />
			<Container>
				<Box as="main">{children}</Box>
			</Container>
		</Box>
	);
};

export default Layout;
