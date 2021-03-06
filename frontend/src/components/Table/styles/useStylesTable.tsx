import { makeStyles } from "@material-ui/styles";

const useStylesTable = makeStyles(() => ({
	box: {
		padding: "1.5rem",
	},
	boxHead: {
		display: "inline-table",
		verticalAlign: "middle",
	},
	tableCell: {
		textTransform: "uppercase",
		color: "slategrey",
		whiteSpace: "nowrap",
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

export default useStylesTable;
