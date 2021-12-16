import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	box: {
		margin: 8,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: 1,
		backgroundColor: "red",
	},
	login: {
		fontFamily: "Nunito",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	button: {
		marginBottom: "3rem",
	},
}));

export default useStyles;
