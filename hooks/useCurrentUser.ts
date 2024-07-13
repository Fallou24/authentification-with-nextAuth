import { useQuery } from "@tanstack/react-query";
import axios from "axios";
async function getUser() {
  const user = await axios.get("api/current");
  return user.data;
}
export function useCurrentUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
}
