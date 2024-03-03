import axios from "@/plugins/axios";
import { Partner, Branch, Service, Record, Employee } from "@/domain/models";

export const get_partner = async (id: number) => {
  return await axios.get<Partner>(`/partners/${id}/`);
};

export const get_record = async (id: number) => {
  return await axios.get<Record>(`/records/${id}/`);
};

export const get_employee = async (id: number) => {
  return await axios.get<Employee>(`/employees/${id}/`);
};

export const get_branch = async (id: number) => {
  return await axios.get<Branch>(`/branches/${id}/`);
};

export const get_service = async (id: number) => {
  return await axios.get<Service>(`/services/${id}/`);
};

export const create_record = async (data: object) => {
  return await axios.post("/records/", (data = data));
};
