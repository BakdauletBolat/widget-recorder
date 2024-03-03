export interface Slot {
  record_start_datetime: Date;
  record_end_datetime: Date;
}


export interface Record {
  record_start_datetime: Date;
  record_end_datetime: Date;
}


export interface Employee {
  id: number;
  username: string;
  first_name: string;
  ratings: any[];
  records: Slot[];
}


export interface Service {
  id: number;
  name: string;
  price: number;
  branch: number;
  duration: number;
  employees: Employee[]
}

export interface Branch {
  name: string;
  id: number;
  image: any;
  services: any[];
  employees: Employee[];
}

export interface Partner {
  id: number;
  name: string;
  logo: any;
  branches: Branch[];
}