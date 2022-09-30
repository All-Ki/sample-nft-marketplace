import { useEffect, useState } from "react";
import NFTCard from "../../components/Card/NFTCard";
import INFT from "../../interfaces/INFT";
import { get_all_nfts } from "../../services/NFT";
import "./home.scoped.css";
import React from "react";
import { ENFTEvents } from "../../services/EventEmitters";
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
export default function Home() {
	const [NFTs, set_NFTs] = useState<INFT[]>([]);
	const [Loading, set_Loading] = useState(true);
	function onNftBNought(event: any){
		console.log(event.detail);
		set_NFTs(NFTs=>NFTs.filter((nft) => nft.asset_id !== event.detail.asset_id));
	}

	useEffect(() => {
		get_all_nfts().then((nfts) => {
			console.log(nfts);
			set_NFTs(nfts);
			set_Loading(false);
		});

		// Should be either a Websocket listen to the event or a callback to the web3 transaction
		window.addEventListener(ENFTEvents.nft_bought , onNftBNought);
		return () => {
			window.removeEventListener(ENFTEvents.nft_bought , onNftBNought);
		};

	},[]);

	return (
		<div className="home">
			{Loading && <LoadingSpinner/>}
			<div className="nft-list">
				{NFTs.map((nft) => {
					return <NFTCard  key={nft.asset_id} nft={nft} />;
				})}
			</div>
		</div>
	);
}
