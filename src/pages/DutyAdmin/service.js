import request from "@/utils/http";

export const getStaffInfoByCondition = () => {
  return request({
    url: "/staff/getByCondition",
    method: "GET",
  });
};
