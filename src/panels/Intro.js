import React, { Fragment } from 'react';

import { Panel, PanelHeader, Group, Div, Button, FixedLayout, Avatar } from '@vkontakte/vkui';

import './Intro.css';

const Intro = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id} centered={true}>
		<PanelHeader>volunteer</PanelHeader>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<Group>
					<Div className='User'>
						{fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						<h2>Привет, {fetchedUser.first_name}</h2>
						<h3>Добро пожаловать в наше приложение!</h3>
					</Div>
				</Group>
				<FixedLayout vertical='bottom'>
					<Div>
						<Button mode='commerce' size="xl" level="2" onClick={() => go(route)}>
							Отлично! Давай начнём!
						</Button>
					</Div>
				</FixedLayout>
			</Fragment>
		}
	</Panel>
);
export default Intro;