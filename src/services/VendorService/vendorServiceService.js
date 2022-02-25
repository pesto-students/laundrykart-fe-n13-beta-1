import { BASE_API_URL } from "../../constants/constant";
import { postJSON } from "../axiosConfig/api";

export const getVendorServiceCreatedetails = async (data) => {
  const response = await postJSON(
    `${BASE_API_URL}functions/CreateVendorService`,
    data,
  );
  console.log(response);
  return response;
};

export const getVendorServiceDetails = async (data) => {
  const response = await postJSON(
    `${BASE_API_URL}functions/getAllServicesDetails`,
    data,
  );
  return response;
  //   console.log(data);
};
