

export function get_display_price(nft_price_raw : string| number): string {
	// Avoids type conversion issues
	return parseFloat(nft_price_raw as string).toFixed(2);
}
