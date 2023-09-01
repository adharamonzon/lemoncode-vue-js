import { organizationService } from "~/services/organization";
import { OrganizationApiResponse } from "~/types";

export async function useOrganizationApi() {
  const membersList: OrganizationApiResponse = await organizationService.get();  
  return membersList;
}