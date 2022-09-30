export const ModalStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "10px"
};

export const SheetStyle={
	maxWidth: 500,
	borderRadius: "md",
	p: 3,
	boxShadow: "lg",
	backgroundColor:"var(--main-bg-lighter)",
	color:"var(--main-text)",
	padding: "40px"

};


export const ModalCloseStyle={

	top: "calc(-var(--IconButton-size)))",
	right: "calc(-var(--IconButton-size))",
	border: "none",
	":hover": {
		backgroundColor: "red",
		color:"white"
	},
};

export const BoxStyle={ display: "flex", mt: 2, justifyContent: "flex-end" };