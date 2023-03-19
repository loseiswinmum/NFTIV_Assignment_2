import axios from "axios";

export default async function GetToken(token) {
  const res = await axios.get("esg-service.nft-investment.io/api/v1/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
