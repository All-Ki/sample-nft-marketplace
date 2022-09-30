export enum ENFTEvents{
	// eslint-disable-next-line no-unused-vars
	nft_bought = "nft_bought",


}


export function emitEvent(eventName: ENFTEvents, data: any = {}) {
	const event = new CustomEvent(eventName, { detail: data });
	window.dispatchEvent(event);
}