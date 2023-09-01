import { OrganizationApiResponse } from "~/types"

export const organizationService = {
  async get() {
    const members = await $fetch<OrganizationApiResponse>('https://api.github.com/orgs/lemoncode/members')
    return members
  }
}