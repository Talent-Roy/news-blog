import React from 'react';
import { Link } from 'gatsby';

export default (props) => (
	<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
		<Link to="/" className="display-5 navbar-brand">
			Tales
		</Link>

		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				{/* <li class="nav-item active">
					<a class="nav-link" href="#">
						Home <span class="sr-only">(current)</span>
					</a>
				</li> */}
				{/* <li class="nav-item">
					<a class="nav-link" href="#">
						Link
					</a>
				</li> */}
				{/* <li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Blogs
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<Link className="dropdown-item" to="/">
							All
						</Link>
						<div className="dropdown-divider"></div>
						<Link className="dropdown-item" to="/politics">
							Politics
						</Link>
						<div className="dropdown-divider"></div>
						<Link className="dropdown-item" to="/sports">
							Sports
						</Link>
						<div className="dropdown-divider"></div>
						<Link className="dropdown-item" to="/entertaiment">
							Sports
						</Link>
					</div>
				</li> */}
				<li className="nav-item">
					<Link className="nav-link" to="/about">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/contact">
						Contact
					</Link>
				</li>
			</ul>
			<ul style={{ listStyle: 'none' }}>
				<li>
					<a href="https://twitter.com/leo_chiavelli">
						<i className="fab fa-twitter text-info"></i>
					</a>
				</li>
			</ul>
			{/* <form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form> */}
		</div>
	</nav>
);
