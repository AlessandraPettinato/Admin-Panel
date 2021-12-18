import { makeStyles } from "@material-ui/styles";

const useStyleDashboard = makeStyles(() => ({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		background: "primary",
	},
	tableCell: {
		textTransform: "uppercase",
		color: "slategrey",
		whiteSpace: "nowrap",
	},
	textSearch: {
		background: "white",
		borderRadius: "0.5rem",
	},
	menu: {
		marginTop: "45px",
	},
	box: {
		padding: "1.5rem",
	},
	boxHead: {
		display: "inline-table",
		verticalAlign: "middle",
	},
	arrow: {
		marginLeft: "0.2rem",
	},
	textFieldInactive: {
		color: "blue",
	},
	textFieldActive: {
		color: "#16161d",
	},
	tableFooter: {
		display: "inline-flex",
		padding: "0.5rem",
	},
	tableCellFooter: {
		padding: "0",
		margin: "0",
		border: "none",
	},
	button: {
		borderColor: "#16161d",
		color: "#16161d",
		margin: "0.5rem",
	},
}));

export default useStyleDashboard;
