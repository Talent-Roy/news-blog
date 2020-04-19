import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from '../components/navigation';
import 'prismjs/themes/prism-okaidia.css';
import Helmet from 'react-helmet';

export default ({ children }) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);
	return (
		<>
			<Helmet>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
					integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
					crossOrigin="anonymous"
				/>
				<title> {data.site.siteMetadata.title} </title>{' '}
				<meta name="description" content={data.site.siteMetadata.description} />
				{/* {!site.siteMetadata.w3l_dom_key ? null : (
					<meta
						name="w3l-domain-verification"
						content={site.siteMetadata.w3l_dom_key}
					/>
				)}{' '} */}
				<script
					src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
					integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
					integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
					integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://kit.fontawesome.com/61174766c8.js"
					crossOrigin="anonymous"
				></script>
			</Helmet>
			<body>
				<div className="site-wrapper">
					{/* <header className="site-header"> */}
					{/* <div className="site-title">
						<Link to="/">{data.site.siteMetadata.title}</Link>
					</div> */}
					<Navigation />
					{/* </header> */}
					{children}
					<footer className="site-footer">
						<p>
							&copy; 2020 &bull;
							<a href="https://talentsmedia.netlify.com">Talents media</a>
						</p>
					</footer>
				</div>
			</body>
		</>
	);
};
