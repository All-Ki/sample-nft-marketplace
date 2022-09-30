import { get_all_nfts } from "../NFT";

describe("NFT Service", () => {
	it("should return all nfts without errors", async() => {
		const nfts = await get_all_nfts();
		expect(nfts).toBeTruthy();
	});
});
