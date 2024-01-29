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

export interface ReportType {
  status: string;
  totalData: number;
}
export interface ReportTypeByMonth {
  status: string;
  data: {
    JANUARY: number;
    FEBRUARY: number;
    MARCH: number;
    APRIL: number;
    MAY: number;
    JUNE: number;
    JULY: number;
    AUGUST: number;
    SEPTEMBER: number;
    OCTOBER: number;
    NOVEMBER: number;
    DECEMBER: number;
  };
}

export interface OfflineAccount {
  id: number;
  fullName: string;
  email: string;
  emailVerified: true;
  file: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailTemplate {
  id: string;
  title: string;
  body: string;
  subject: string;
}

export interface PermissionTemplate {
  id: number;
  resource: string;
  authorityAction: string;
  description: string;
  authority: string;
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
  percentageCompleted: number;
  signature: string;
  accountType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserRequest {
  roleId: number | string;
  fullName: string;
  email: string;
  password: string;
}

export interface UserResponse {
  userId: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  registeredBy: string;
  lastLoggedIn: string;
  registeredAt: string;
  passwordChanged: boolean;
  updatedAt: string;
}

export interface Role {
  id: number;
  roleName: string;
  authorities: PermissionTemplate[] | [];
}

export interface Loan {
  id: number;
  fullName: string;
  country: string;
  loanAmount: number;
  loanType: string;
  loanSchedule: string;
  branch: string;
  status: string;
  addedAt: Date;
  updatedAt: Date;
}

export interface LoanType {
  id: number;
  loanType: string;
  status: boolean;
  addedAt: Date;
  updatedAt: Date;
}

export interface LoanSchedule {
  id: number;
  loanSchedule: string;
  status: boolean;
  addedAt: Date;
  updatedAt: Date;
}

export interface Branch {
  id: number;
  branchName: string;
  status: boolean;
  addedAt: Date;
  updatedAt: Date;
}

export interface loanDocument {
  id: number;
  documentName: string;
  documentType: string;
  documentUrl: string;
  addedAt: Date;
  updatedAt: Date;
}

export interface LoanById {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  accountType: string;
  accountNumber: string;
  country: string;
  sourcesOfIncome: string;
  loanAmount: number;
  loanType: LoanType;
  loanSchedule: LoanSchedule;
  branch: Branch;
  loanDocuments: loanDocument[];
  status: string;
  addedAt: Date;
  updatedAt: Date;
}
