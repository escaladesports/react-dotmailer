import React from 'react'

export default class Dotmailer extends React.Component {
	render() {
		const { src, id, className = 'ds-if' } = this.props
		const embed = src.indexOf(`/embed/script/`) !== -1

		return (
			<iframe
				className={className}
				id={id}
				name={id}
				src={
					embed
						? `//r2.dotmailer-surveys.com/Response/Survey/${id}?source=e&name=${id}`
						: src
				}
				width="100%"
				frameBorder="0"
				scrolling={`${this.props.scrolling || `no`}`}
				style={{
					border: `none 0!important`,
					margin: `0!important`,
					padding: `0!important`
				}}
			/>
		)
	}
}
