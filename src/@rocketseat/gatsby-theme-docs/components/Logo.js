import React from 'react';
import styled from '@emotion/styled';

const Header = styled.h1`
	color: #424242;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 28px;
	font-weight: 500;
	text-decoration: none;
`;

const Small = styled.small`
	font-size: 16px;
	color: #424242;
`;

export default () => (
	<Header>
		SL3 Framework <br /> <Small>Code For Brain</Small>{' '}
	</Header>
);
