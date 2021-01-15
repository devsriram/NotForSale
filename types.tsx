export type RootStackList = {
    bottomTab: undefined;
    auth: undefined;
  };

export type AuthenticationStackList = {
    login: undefined;
    signUp: undefined;
};

export type BottomTabList = {
  home: undefined,
  addItem : undefined,
  account : undefined
}

export type AccountStackList = {
  account: undefined,
  myProfile: undefined,
  changePassword: undefined
}

export interface UserData {
  userId : string,
  phoneNumber : string,
  name : string
}

export const initialUserData : UserData = {
  userId : "",
  phoneNumber : "",
  name : ""
}