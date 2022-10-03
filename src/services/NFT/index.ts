import Ax from "../Ax";
import { emitEvent, ENFTEvents } from "../EventEmitters";
import INFT from './../../interfaces/INFT';
import { ISaleStatus } from './../../interfaces/auctions/ISaleStatus';

export async function get_all_nfts() : Promise<INFT[]> {
	try {
		const request = await Ax.get<{nfts : INFT[]}>(`${process.env.REACT_APP_API_URL}/search`);
		return request.nfts;
	}
	catch (e){
		console.log(e);
		return [];
	}

}

export async function buy_nft(nft_id : string) : Promise<boolean> {
	try {
		emitEvent(ENFTEvents.nft_bought, {asset_id : nft_id});
		//sample API call
		//await Ax.post(`${process.env.REACT_APP_API_URL}/buy`, {nft_id: nft_id});
		return true;
	}
	catch (e){
		console.log(e);
		return false;
	}
}

export async function get_sale_status(sale_id : string) : Promise<ISaleStatus> {
	try {

		const request = await Ax.get<ISaleStatus>(`${process.env.REACT_APP_API_URL}/sale/status/${sale_id}`);
		return request;
	}
	catch (e){
		throw(e);

	}


}