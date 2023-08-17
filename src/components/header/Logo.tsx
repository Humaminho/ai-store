import { Link } from "react-router-dom";

export default function Logo() {
  return (
		<div className="logo">
			<Link to="/">
				<img src="/brand/logo.png" height={50} alt="logo" />
			</Link>
		</div>
  );
}
