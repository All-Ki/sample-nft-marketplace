import React from "react";

import INFT from "../../interfaces/INFT";
import "./NFTCard.scoped.css";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { toast } from 'react-toastify';
import AvaxLogo from "../../assets/avalanche-avax-logo";
import {
	Button,
	Avatar,
	Box,
	AspectRatio,
} from "@mui/joy";
import { buy_nft, get_sale_status } from "../../services/NFT";
import { CardAvatarStyle, CardOverflowStyle, CardStyle, NftNameStyle } from "./styles";
import { BuyModal } from './BuyModal/BuyModal';
import { get_display_price } from "../../utilities/NFT/get_display_price";

export interface NFTCardProps {
	nft: INFT;
}

export default function NFTCard(props: NFTCardProps) {
	const [_BuyModalOpen, set_BuyModalOpen] = React.useState(false);
	const [NFT, set_NFT] = React.useState(props.nft);
	const [ShowBuyButton, set_ShowBuyButton] = React.useState(false);
	const { nft } = props;

	React.useEffect(() => {
		set_NFT(nft);
	}, [nft]);

	function onModalClose() {
		set_BuyModalOpen(false);
	}

	async function onBuyClick() {
		try {
			if (!nft.sale){
				toast.error("Sale is not active anymore");
				return;
			}
			const sale_status : {status : boolean} = await get_sale_status(NFT.sale.sale_id);
			if (!sale_status.status){
				toast.error("Sale is not active anymore");
				return;
			}
			set_BuyModalOpen(true);
		} catch (e) {
			console.log(e);
			toast.error("Error while fetching sale status");
		}
	}

	async function buyNft() {
		try{
			await buy_nft(nft.asset_id);
			toast.success("NFT bought successfully");
		}
		catch(e){
			console.log(e);
			toast.error("Error while buying NFT");
		}
	}

	function onHoverBegin(){
		set_ShowBuyButton(true);
	}
	function onHoverEnd(){
		set_ShowBuyButton(false);
	}

	return (
		<React.Fragment>
			<Card
				className={nft.collection.kind === "erc1155" ? "erc1155" : ""}
				variant="outlined"
				sx={CardStyle}
				onMouseEnter={onHoverBegin}
				onMouseLeave={onHoverEnd}
			>
				<CardOverflow>
					<AspectRatio ratio="3/4">
						<img className="nft-image" src={NFT.thumbnail} alt="" />
					</AspectRatio>

					<Avatar
						sx={CardAvatarStyle}
					/>
				</CardOverflow>

				<Divider />
				<CardOverflow
					variant="soft"
					sx={CardOverflowStyle}
				>
					<Typography
						level="h2"
						sx={NftNameStyle}
					>
						{" "} {NFT.name}{" "}
					</Typography>
					<Box sx={{ display: "flex", justifyContent:"space-between"}}>
						<div>
							<Typography level="body5">Price</Typography>
							<Typography fontSize="lg" fontWeight="lg">
							<AvaxLogo width={15} height={15}/> {get_display_price(NFT.balance)}
							</Typography>
						</div>
						{(!ShowBuyButton && (NFT.offer !== null)) && (
							<Box sx={{display: "flex", flexDirection:"column", alignItems:"flex-end"}}>
								<Typography level="body4" sx={{float:"right"}}>Best Offer</Typography>
								<Typography fontSize="lg" fontWeight="lg">
								<AvaxLogo width={15} height={15}/> {get_display_price(NFT.offer.unitary_price_float)}
								</Typography>
							</Box>

						)}

						{ShowBuyButton && (
							<Button
								variant="solid"
								color='success'
								size="sm"
								className="btn-red"
								sx={{
									ml: "auto",
								}}
								onClick={onBuyClick}
							>
							Buy Now
							</Button>
						)}
					</Box>
				</CardOverflow>
			</Card>
			<BuyModal nft = {NFT} open={_BuyModalOpen} onClose={onModalClose} buyNft={buyNft} />
		</React.Fragment>
	);
}
