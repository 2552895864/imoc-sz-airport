import request from "@/utils/http";

export const getLatestOneBrief = () => {
  return request({
    url: "/billboard/getLatestOneBillboard",
    method: "GET",
  });
};

/**
 * 获取排班信息
 */
export const getMaintenanceRotaByDay = (params) => {
  return request({
    url: "/ms/getMaintenanceRotaByDay",
    method: "GET",
    params,
  });
};
