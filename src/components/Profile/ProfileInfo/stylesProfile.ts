import {makeStyles, styled} from "@mui/styles";
import Avatar from "@mui/material/Avatar";

export const useStyles = makeStyles((theme) => ({
	descriptionBlock: {
		padding: "10px",
	},
	mainPhoto: {
		maxWidth: "200px",
	},
	contact: {
		paddingLeft: "10px",
	},
}))
export const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 32,
	height: 32,
}));