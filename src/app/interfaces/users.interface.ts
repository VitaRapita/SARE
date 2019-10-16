export default interface IUser {
  id: number;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  store: {
    title: string;
    companyId: number;
    id: number;
  };
  avatar: string;
  storeId: number;
  lastLogin: string;
  loginCount: number;
  isActive: boolean;
}

export default interface IApiUsersResults {
  results: IUser[];
  count: number;
}
