import { makeStyles } from "@material-ui/core/styles";

const useStylesLogin = makeStyles(() => ({
	backgroundImage: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	box: {
		margin: "8rem 4rem 8rem 4rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	button: {
		marginBottom: "3rem",
	},
	container: {
		height: "100vh",
	},
}));

export default useStylesLogin;
