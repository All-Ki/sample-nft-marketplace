import { Link } from "react-router-dom";
import "./header.scoped.css";
import React from "react";

export default function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img className="header-logo" src="/logo192.png" alt="logo" />
			</Link>
			<Link to="/algorithm">Algorithm</Link>
			<img  className="profile-picture" src="https://picsum.photos/200/300" alt=""></img>
		</div>
	);
}
