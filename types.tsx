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

export interface coordinates {
  longitute : number,
  latitude : number
}

export const initialCoordinates = {
  longitute : 0,
  latitude : 0
}

export interface itemData {
  itemId: number,
  userId: string,
  itemName: string,
  desc: string,
  condition: string,
  contact: string,
  timestamp: Date,
  coordinates: coordinates[], 
  imageUri : string,
}

export const initialItemData : itemData = {
  itemId: 0,
  userId: "",
  itemName: "",
  desc: "",
  condition: "",
  contact: "",
  timestamp: new Date(),
  coordinates: [initialCoordinates],
  imageUri : "",
}