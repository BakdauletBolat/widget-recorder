// Utilities
import { defineStore } from 'pinia'
import { get_branch,get_employee,get_partner, get_service } from '@/domain/services'
import { Branch, Employee, Partner, Service } from '@/domain/models'
export type RootState = {
  partner: Partner | undefined
  branch: Branch | undefined,
  service: Service | undefined,
  selected_date: Date | undefined,
  employee: Employee | undefined,
  selected_employee_id: number | undefined
}

export const useAppStore = defineStore('app', {
  state: () => ({
    partner: undefined,
    branch: undefined,
    service: undefined,
    selected_date: undefined,
    selected_employee_id: undefined,
    employee: undefined
  } as RootState),
  actions: {
    async loadPartner(id: number)  {
      const response = await get_partner(id);
      if (response.status == 200) {
        this.partner = response.data;
      }
    },
    async loadBranch(id: number)  {
      const response = await get_branch(id);
      if (response.status == 200) {
        this.branch = response.data;
      }
    },
    async loadService(id: number) {
      const response = await get_service(id);
      if (response.status == 200) {
        this.service = response.data;
      }
    },
    async loadEmployee(id: number) {
      const response = await get_employee(id);
      if (response.status == 200) {
        this.employee = response.data;
      }
    }
  }
})
