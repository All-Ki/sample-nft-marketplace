import Axios, { AxiosResponse } from "axios";

export class IAxiosErrorMessage {

	public showErrorMessage(error : any) {

		console.group("Axios error");
		if (error.request) {
			console.log("has request");
			console.log(error.request);

		}
		if (error.response) {
		  console.log("has response");
		  console.log(error.response.data);
		  console.log(error.response.status);
		  console.log(error.response.headers);
		}
		//console.log(error.config);
		console.trace(error);
		console.groupEnd();
	}
}
const defaultAxiosErrorMessage: IAxiosErrorMessage = new IAxiosErrorMessage();

//Singleton class used to abstract away the axios library
//Allows for centralised error handling and logging
export default class Ax {
	public static _instance: Ax;
	public static get instance(): Ax{
		if (!this._instance) {
			this._instance = new Ax();
		}
		return this._instance;
	}



	public async get<Type>(url: string, additionalHeaders: any = {}, errorMessage : IAxiosErrorMessage = defaultAxiosErrorMessage): Promise<Type>{
		const headers = {...additionalHeaders};
		try {
			const res: AxiosResponse<Type> = await Axios.get(url, {
				headers: headers
			});
			return res.data;
		}
		catch (e){
			errorMessage.showErrorMessage(e);
			throw e;
		}
	}
	public static async get<Type>(url: string, additionalHeaders: any = {}, errorMessage : IAxiosErrorMessage = defaultAxiosErrorMessage): Promise<Type>{
		return Ax.instance.get<Type>(url, additionalHeaders, errorMessage);
	}
}
