import { makeStyles } from "@material-ui/styles";

const useStyleDashboard = makeStyles(() => ({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		background: "primary",
	},
	box: {
		padding: "1.5rem",
	},
	textSearch: {
		background: "white",
		borderRadius: "0.5rem",
	},
	menu: {
		marginTop: "45px",
	},
}));

export default useStyleDashboard;
