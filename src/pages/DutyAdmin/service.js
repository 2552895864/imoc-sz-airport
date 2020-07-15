import request from "@/utils/http";

export const getStaffInfoByCondition = () => {
  return request({
    url: "/staff/getByCondition",
    method: "GET",
  });
};

export const getBrief = () => {
  return request({
    url: "/billboard/getBillboard",
    method: "GET",
  });
};
export const addBrief = (params) => {
  return request({
    url: "/billboard/add",
    method: "POST",
    data: params,
  });
};
