import { useDispatch } from "react-redux";
import { logOut } from "../../redux/authorisation/operations";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<div>
			<p>{user.name}</p>
			<button type="button" onClick={() => dispatch(logOut())}>
				Exit
			</button>
		</div>
	);
};
// on Click deschide de fapt modalul de logout apoi dispatch logOut prin apasarea butonului "Logout" din modal
