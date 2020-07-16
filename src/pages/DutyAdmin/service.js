import request from "@/utils/http";

/**
 * 获取排班月份
 */
export const getAllMonth = () => {
  return request({
    url: "/ms/getAllMonth",
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
/**
 * 更新排班信息
 */
export const updateMSData = (params) => {
  const id = params.id;
  delete params.id;
  return request({
    url: `/ms/update/${id}`,
    method: "PUT",
    params,
  });
};

/**
 * 更新人员信息 /staff/update/{recordId}
 */
export const updateStaffInfo = (params) => {
  const id = params.id;
  delete params.id;
  return request({
    url: `/staff/update/${id}`,
    method: "PUT",
    params,
  });
};

export const uploadMsData = (params) => {
  return request({
    url: "/ms/file/upload",
    method: "POST",
    data: params,
  });
};

export const uploadDataCenterData = (params) => {
  return request({
    url: "/dataCenter/file/upload",
    method: "POST",
    data: params,
  });
};

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
