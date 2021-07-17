
import React from 'react';
import PropTypes from 'prop-types';

import { iframe, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik2 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Добавление мероприятия
		</PanelHeader>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_lsJZNcVhr86L8ROX_CUmDGdrcY-Fu2oHQqM2SiXYXa1-Rg/viewform?embedded=true" width="640" height="1049" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>	</Panel>
);

Persik2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik2;
