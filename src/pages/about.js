import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
	return (
		<Layout>
			<Helmet>
				<title>Contact — {site.siteMetadata.title}</title>
				<meta name="description" content={site.siteMetadata.description} />
			</Helmet>
			<div className="container-fluid">
				<h3 className="text-center pt-3">
					About Tales <hr className="bg-info" style={{ width: '80px' }} />
				</h3>
				<div
					className="container-fluid"
					style={{ width: '400px', height: '500px' }}
				>
					<img
						src="https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="about"
						className="img-fluid shadow-lg"
					/>
					<p className="p-3  m-auto">
						Tales is a blog page where juicy and trending topics in the areas of
						politics, sports, entertainment and lifestyle are served hot. <br />{' '}
						We bring you the stories as they unfold!
					</p>
				</div>
			</div>
		</Layout>
	);
};
export default ContactPage;
export const pageQuery = graphql`
	query AboutPageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
