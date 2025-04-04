import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import LogoTitle from "./Logo/LogoTitle";

const DefaultRoom = (props: { globalUsersConnected: number }): JSX.Element => {
	const { globalUsersConnected } = props;
	const Navigate = useNavigate();
	return (
		<>
			<LogoTitle />
			<h1>This room is not available.</h1>
			<button
				type="button"
				onClick={(): void => {
					Navigate("/");
				}}
			>
				Back
			</button>
			<Footer numUsers={globalUsersConnected} />
		</>
	);
};

export default DefaultRoom;
