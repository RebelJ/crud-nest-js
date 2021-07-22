/**
 * Class Users Model 
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */

export class User{
	constructor(
		public id: string,
		public email: string,
		public password: string,
	) {}
}