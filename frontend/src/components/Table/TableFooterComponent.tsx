import { TableFooter, Button, TableRow, TableCell } from "@mui/material";

import useStyleTable from "./styles/useStylesTable";

const Pagination: React.FC<{
	policiesPerPage: number;
	totalPolicies: number;
	paginate: Function;
}> = ({ policiesPerPage, totalPolicies, paginate }) => {
	const classes = useStyleTable();

	const pageNumbers: Array<number> = [];

	for (let i = 1; i <= Math.ceil(totalPolicies / policiesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<TableFooter className={classes.tableFooter}>
			<TableRow>
				{pageNumbers.map((number, index) => (
					<TableCell key={index} className={classes.tableCellFooter}>
						<Button
							key={index}
							variant="outlined"
							className={classes.button}
							onClick={() => paginate(number)}
							aria-current="page"
						>
							{number}
						</Button>
					</TableCell>
				))}
			</TableRow>
		</TableFooter>
	);
};

export default Pagination;

// import { useState } from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (
//     event: React.MouseEvent<HTMLButtonElement>,
//     newPage: number
//   ) => void;
// }

// const TablePaginationActions = (props: TablePaginationActionsProps) => {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };
//   return (
//     <>
//       <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//         <IconButton
//           onClick={handleFirstPageButtonClick}
//           disabled={page === 0}
//           aria-label="first page"
//         >
//           {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//         </IconButton>
//         <IconButton
//           onClick={handleBackButtonClick}
//           disabled={page === 0}
//           aria-label="previous page"
//         >
//           {theme.direction === "rtl" ? (
//             <KeyboardArrowRight />
//           ) : (
//             <KeyboardArrowLeft />
//           )}
//         </IconButton>
//         <IconButton
//           onClick={handleNextButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="next page"
//         >
//           {theme.direction === "rtl" ? (
//             <KeyboardArrowLeft />
//           ) : (
//             <KeyboardArrowRight />
//           )}
//         </IconButton>
//         <IconButton
//           onClick={handleLastPageButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="last page"
//         >
//           {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//         </IconButton>
//       </Box>
//     </>
//   );
// };

// const Pagination: React.FC<{
//   totalPolicies: number;
//   policiesPerPage: number;
//   setPoliciesPerPage: Function;
//   paginate: Function;
// }> = ({ totalPolicies, policiesPerPage, setPoliciesPerPage, paginate }) => {
//   const [page, setPage] = useState(0);
//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number
//   ) => {
//     paginate(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setPoliciesPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <>
//       <TableFooter>
//         <TableRow>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//             colSpan={3}
//             count={totalPolicies}
//             rowsPerPage={policiesPerPage}
//             page={page}
//             SelectProps={{
//               inputProps: {
//                 "aria-label": "rows per page",
//               },
//               native: true,
//             }}
//             onPageChange={(event) => handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             ActionsComponent={TablePaginationActions}
//           />
//         </TableRow>
//       </TableFooter>
//     </>
//   );
// };

// export default Pagination;
