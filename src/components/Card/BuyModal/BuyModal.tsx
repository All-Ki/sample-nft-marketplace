import { Modal, Sheet, ModalClose, Typography, AspectRatio, Box, Button } from "@mui/joy";
import INFT from "../../../interfaces/INFT";
import React from "react";
import { get_display_price } from "../../../utilities/NFT/get_display_price";
import { BoxStyle, ModalCloseStyle, ModalStyle, SheetStyle } from './styles';
interface BuyModalProps{
	nft: INFT;
	open : boolean;
	onClose : () => void;
	buyNft : () => void;
}

export function BuyModal(props: BuyModalProps) {


	return(

		<Modal
			open={props.open}
			onClose={props.onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={ModalStyle}
		>
			<Sheet
				variant="outlined"
				sx={SheetStyle}
			>
				<ModalClose
					variant="outlined"
					sx={ModalCloseStyle}
				/>
				<Typography
					component="h2"
					id="modal-title"
					level="h4"
					textColor="inherit"
					fontWeight="lg"
					mb={1}
				>
					{props.nft.name}
				</Typography>
				<AspectRatio ratio="3/4"  sx={{borderRadius:"30px"}}>
					<img className="nft-image" src={props.nft.thumbnail} alt="" />
				</AspectRatio>
				<Typography id="modal-desc" sx={{marginTop:"10px"}}>
				Do you want to buy this NFT for {get_display_price(props.nft.balance)}&nbsp;
				AVAX?
				</Typography>
				<Box sx={BoxStyle}>
					<Button onClick={props.buyNft} color="success" sx={{ marginRight:"10px"}}>
					Buy
					</Button>
					<Button color="danger" onClick={props.onClose}>
					Cancel
					</Button>
				</Box>
			</Sheet>
		</Modal>
	);
}