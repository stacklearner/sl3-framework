import React from 'react';

const wrapperStyle = {
	marginTop: '3rem',
	marginBottom: '1rem',
	display: 'inline-block',
};

const imgWrapperStyle = {
	width: '300px',
	height: '300px',
	borderRadius: '0.5rem',
	overflow: 'hidden',
};

const imgStyle = {
	width: '300px',
	height: 'auto',
};

const h3Style = {
	fontSize: '20px',
	fontWeight: 300,
	color: '#424242',
	marginBottom: '0.8rem',
	marginTop: '2rem',
};

const pStyle = {
	fontSize: '16px',
	color: '#666666',
	marginBottom: '2rem',
	lineHeight: 1,
};

const Person = ({ name, company, title, img }) => {
	return (
		<div style={wrapperStyle}>
			<div style={imgWrapperStyle}>
				<img style={imgStyle} src={img} alt={name + ' - ' + title} />
			</div>
			<h3 style={h3Style}>{name}</h3>
			<p style={pStyle}>
				{title}
				<br />
				{company}
			</p>
		</div>
	);
};

export default Person;
