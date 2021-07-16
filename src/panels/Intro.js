import React from 'react';
import PropTypes from 'prop-types';

import { Props, Panel, PanelHeader, PanelHeaderBack, Header, Group, Cell, Avatar, View, FormLayout, FormItem, Input,FormLayoutGroup, Select, Radio, Textarea, Checkbox, Link, Button } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Intro.css';


// const Intro = props => (
// 	<Panel id={persik}>
// 		<PanelHeader
// 			left={<PanelHeaderBack onClick={persik} data-to="home"/>}
// 		>
// 			Еда
// 		</PanelHeader>
// 		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
// 			<Cell
// 				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
// 				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
// 			>
// 				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
// 			</Cell>
// 		</Group>
// 	</Panel>
// );

class Example extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		email: '',
		purpose: '',
		showPatronym: true
	  }
  
	  this.addressItems = [
		{ label: 'Почтовый индекс', name: 'zip' },
		{ label: 'Страна', name: 'country' },
		{ label: 'Город', name: 'city' }
	  ];
  
	  this.onChange = this.onChange.bind(this);
	  this.onRemove = this.onRemove.bind(this);
	}
  
	onChange(e) {
	  const { name, value } = e.currentTarget;
	  this.setState({ [name]: value });
	}
  
	onShowPatronym() {
	  this.setState({ showPatronym: true });
	}
  
	onRemove(e) {
	  this.setState({ showPatronym: false });
	}
  
	render() {
	  const { email, purpose, showPatronym } = this.state;
  
	  return (
		<View activePanel="new-user">
		  <Panel id="new-user">
			<PanelHeader>
			Подать объявление
			</PanelHeader>
			<Group>

			<FormLayout>
			  

			  <FormLayoutGroup mode="horizontal">
				<FormItem top="Имя">            
				  <Input />
				</FormItem>
				<FormItem top="Фамилия">            
				  <Input />
				</FormItem>
			  </FormLayoutGroup>

			  <FormLayoutGroup mode="horizontal">
				<FormItem top="Название мероприятия">            
				  <Input />
				</FormItem>
				<FormItem top="Дата">            
				  <Input />
				</FormItem>
			  </FormLayoutGroup>
  
			  
			  <FormItem top="О мероприятии">
				<Textarea />
			  </FormItem>
			  <FormItem>
				<Button size="l" stretched>Подать объявление</Button>
			  </FormItem>
			</FormLayout>
			</Group>
		  </Panel>
		</View>
	  );
	}
  }
  
  <Example />;
  export default Example;
