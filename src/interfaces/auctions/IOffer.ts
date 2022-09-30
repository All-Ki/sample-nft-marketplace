export default interface IOffer{
	offer_id: string;
	kind: "buy" | "sell";
	side : "buy" | "sell";
	unitary_price_float: number;
}