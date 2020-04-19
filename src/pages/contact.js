import React from 'react';
// import Helmet from "react-helmet"
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
	return (
		<Layout>
			{/* <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet> */}
			<div className="two-grids -contact">
				<div
					className="post-thumbnail"
					style={{
						backgroundImage: `url('https://images.pexels.com/photos/821755/pexels-photo-821755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
						marginBottom: 0,
					}}
				>
					<h1 className="post-title">Get in Touch</h1>
					<p>Fill the form to get intouch with us &rarr;</p>
				</div>
				<div>
					<form className="form-container" action="" method="post">
						<div>
							<label>Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div>
							<label>Email</label>
							<input type="email" name="email" id="emaail" />
						</div>
						<div>
							<label>Subject</label>
							<input type="text" name="subject" id="subject" />
						</div>
						<div>
							<label>Message</label>
							<textarea name="message" id="message"></textarea>
						</div>
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<input
								type="submit"
								className="button -primary"
								style={{ marginRight: 0 }}
							/>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};
export default ContactPage;
export const pageQuery = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
