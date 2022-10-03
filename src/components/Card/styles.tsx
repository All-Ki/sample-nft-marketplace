export const CardStyle=(theme : any)=>({
	[theme.breakpoints.down("sm")]: {
		marginRight: "0px",
	},
	minWidth: "300px",
	border: "1px solid #1D1E22",
	marginRight:"30px",
	marginBottom:"30px",
	maxWidth: "90vw"
});
export const CardPictureStyle=
{
	borderRadius: "10px 10px 0 0",
	width: "100%",
	objectFit: "fill !important",
	backgroundColor: "white"
};

export const CardAvatarStyle=
{
	border: "2px solid black",
	position: "absolute",
	zIndex: 2,
	left: "1rem",
	transform: "translateY(50%)",
	bottom: "0",
};

export const CardOverflowStyle={
	display: "flex",
	gap: 1.5,
	py: 1.5,
	px: "var(--Card-padding)",
	flexDirection: "column",
};

export const NftNameStyle={ fontSize: "md", mt: 2, marginTop: "40px"  };