import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
export default () => (
	<StaticQuery
		query={graphql`
			query HeadingQuery {
				site {
					siteMetadata {
						home {
							title
							description
						}
					}
				}
			}
		`}
		render={(data) => (
			<div className="hero-header">
				<div className="headline"> {data.site.siteMetadata.home.title} </div>{' '}
				<div className="primary-content">
					<img
						src="https://images.pexels.com/photos/623046/pexels-photo-623046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt=""
						className="img-fluid shadow"
					/>
					{/* <p>{data.site.siteMetadata.home.description}</p> */}
				</div>{' '}
				<Link to="/contact" className="button -primary">
					{' '}
					Get in touch &rarr;
				</Link>{' '}
			</div>
		)}
	/>
);
