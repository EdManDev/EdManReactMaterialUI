import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function GridLayout() {
	const classes = useStyles();

	function FormRow() {
		return (
			<React.Fragment>
				<Grid item xs={4}>
					<Paper className={classes.paper}>item</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}>item</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}>item</Paper>
				</Grid>
			</React.Fragment>
		);
	}
	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid container item xs={12} spacing={3}>
						<FormRow />
					</Grid>
					<Grid container item xs={12} spacing={3}>
						<FormRow />
					</Grid>
					<Grid container item xs={12} spacing={3}>
						<FormRow />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));
