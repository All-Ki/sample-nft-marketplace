import ICollection from "./ICollection";
import { ISale } from './auctions/ISale';
import IOffer from './auctions/IOffer';

export default interface INFT{
	asset_id: string;
	name: string;
	collection : ICollection;
	thumbnail : string;
	sale:  ISale;
	offer : IOffer;
	rank : number;
	balance : number | string;
}