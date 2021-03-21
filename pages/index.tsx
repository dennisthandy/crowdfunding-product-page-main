import About from '../components/project/About';
import Layout from '../components/Layout';
import Card from '../components/project/Card';
import Details from '../components/project/Details';
import React, { useRef, useState } from 'react';
import Modal from '../components/project/Modal';
import DoneMessage from '../components/project/DoneMessage';

type Reward = {
	id: number;
	title: string;
	price: number;
	description: string;
	amount: number;
};

const projectAbout = {
	description: [
		'The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.',
		'Featuring artisan ctaftmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.',
	],
	rewards: [
		{
			id: 0,
			title: 'Pledge with no reward',
			price: 1,
			description: `Choose to support us without a reward if you simply belive in our project. As a backer, you will be signed up to recive product updates via email.`,
			amount: null,
		},
		{
			id: 1,
			title: 'Bamboo Stand',
			price: 25,
			description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.`,
			amount: 101,
		},
		{
			id: 2,
			title: 'Black Edition Stand',
			price: 75,
			description: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
			amount: 64,
		},
		{
			id: 3,
			title: 'Mahogany Special Edition',
			price: 200,
			description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
			amount: 0,
		},
	],
};
export default function Home() {
	const [backed, setBacked] = useState<number>(89914);
	const [backers, setBackers] = useState<number>(5007);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openModalMessgae, setOpenModalMessage] = useState<boolean>(false);
	const [rewards] = useState<Reward[]>(projectAbout.rewards);
	const [selectedReward, setSelectedReward] = useState<string | number>(0);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleSelectReward = (id: string | number): void => {
		console.log(id);
		setSelectedReward(id);
	};

	const updateDetails = (price: string, reward: Reward): void => {
		setOpenModalMessage(true);
		setOpenModal(false);
		setBacked((prevState) => (prevState += parseInt(price)));
		setBackers((prevState) => (prevState += 1));
		const updatedRewards = rewards.map((r) =>
			r.id === reward.id ? (r.amount = reward.amount) : r
		);
	};

	const handleModal = (
		boolean: boolean,
		selectedReward?: string | number
	): void => {
		setOpenModal(boolean);
		if (selectedReward !== null) setSelectedReward(selectedReward);
	};

	const handleModalMessage = (boolean: boolean): void => {
		setOpenModalMessage(boolean);
	};

	return (
		<Layout title="Home">
			<Card
				title="Mastercraft Bamboo Monitor Riser"
				description="A beautifully handcrafted monitor standart to reduce neck and eye strain."
				handleModal={handleModal}
			/>
			{openModal && (
				<Modal
					handleModal={handleModal}
					updateDetails={updateDetails}
					rewards={rewards}
					selectedReward={selectedReward}
					handleSelectReward={handleSelectReward}
					modalRef={modalRef}
				/>
			)}
			{openModalMessgae && (
				<DoneMessage
					handleModalMessage={handleModalMessage}
					modalRef={modalRef}
				/>
			)}
			<Details
				currentPrice={backed}
				totalPrice={100000}
				totalBackers={backers}
				durations={56}
			/>
			<About
				description={projectAbout.description}
				handleModal={handleModal}
				rewards={rewards}
			/>
		</Layout>
	);
}
