export default interface IStore {
  id: number;
  company: {
    code: string;
    title: string;
  };
  title: string;
  city: string;
  region: string;
  phone: string;
  postalCode: string;
  address: string;
  email: string;
  teamPhoto: string;
  companyId: number;
}

export default interface IApiStoresResults {
  results: IStore[];
  count: number;
}
