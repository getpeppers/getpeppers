import React from 'react';

export default class Hero extends React.Component {
	render() {
		return (
			<section className='hero'>
				<div className='hero__container'>
					<div className='hero__video'>
						<div className='hero__video__wrapper'>
							<iframe src="https://www.youtube.com/embed/gblpzvNReDE" frameBorder="0" allowFullScreen></iframe>
						</div>
					</div>
					<div className='hero__text'>
						<h1>Reasonably Priced,<br/>Unreasonably spiced.</h1>
						<p>
							What started with a simple goal of growing the hottest peppers in the world has pivoted into a multi-facet operation centering around the one thing that matters: <b>community</b>.
							We promise only the highest quality, which is why we grow our peppers in the world renowned soil of eastern Washington where they are then cared for extensively until harvest season.
						</p>
					</div>
				</div>
			</section>
		);
	}
}