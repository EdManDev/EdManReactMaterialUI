import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

export default function Card3() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div>
			<h1>Card 3</h1>
			<Card className={classes.card} elevation="6">
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							Live From Space
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Mac Miller
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<IconButton aria-label="previous">
							{theme.direction === "rtl"
								? <SkipNextIcon />
								: <SkipPreviousIcon />}
						</IconButton>
						<IconButton aria-label="play/pause">
							<PlayArrowIcon className={classes.playIcon} />
						</IconButton>
						<IconButton aria-label="next">
							{theme.direction === "rtl"
								? <SkipPreviousIcon />
								: <SkipNextIcon />}
						</IconButton>
					</div>
				</div>
				<CardMedia
					className={classes.cover}
					image="/logo512.png"
					title="Live from space album cover"
				/>
			</Card>
		</div>
	);
}

const useStyles = makeStyles(theme => ({
	card: {
		display: "flex",
		margin: 20,
		maxWidth: 400
	},
	details: {
		display: "flex",
		flexDirection: "column"
	},
	content: {
		flex: "1 0 auto"
	},
	cover: {
		width: 200
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	playIcon: {
		height: 38,
		width: 38
	}
}));
