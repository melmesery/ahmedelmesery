import { getProfile } from "../sanity/sanity-utils.ts";

export default function useProfile() {
  return getProfile().then(({ logo }) => {
    return { logo };
  });
}
