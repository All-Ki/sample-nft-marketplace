export default interface ICollection{
	address : string;
	name : string;
	certified : boolean;
	avatar : string;
	kind : "erc1155" | "erc721";
};