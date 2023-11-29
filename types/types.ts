import { ReactElement } from "react";

export interface SideBarItem {
  name: string;
  label: string;
  icon: ReactElement;
  hide: boolean; // set the hidden value to true if you want to. U can use different var for different purposes.
  path: string;
  active: string;
}

export interface MenuItem {
  title: string;
  url: string;
  active: boolean;
}

export interface Login {
  username: string;
  password: string;
}

export interface Account {
  id: number;
  fullName: string;
  surname: string;
  motherName: string;
  email: string;
  emailVerified: boolean;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  occupation: string;
  initialDeposit: number;
  monthlyIncome: number;
  sex: string;
  branch: string;
  currency: string;
  photo: string;
  residenceCard: string;
  passport: string;
  confirmationForm: string;
  signature: string;
  accountType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
