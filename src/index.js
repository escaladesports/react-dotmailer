import React from 'react'

export default class Dotmailer extends React.Component {
	render() {
		const { src, id, className = "ds-if" } = this.props

		return (
			<iframe 
				className={className}
				id={id} 
				name={id} 
				src={`${src}&pUrl=${encodeURIComponent(document.location)}`} 
				width="100%"
				frameBorder="0"
				scrolling="no"
				style={{
					border: `none 0!important`,
					margin: `0!important`,
					padding: `0!important`,
				}}
			>
			</iframe>
		)
	}
}