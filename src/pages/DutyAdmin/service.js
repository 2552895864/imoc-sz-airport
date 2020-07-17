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
 * 获取人员信息 /staff/update/{recordId}
 */
export const getStaffInfoByCondition = (params) => {
  return request({
    url: "/staff/getByCondition",
    method: "GET",
    params
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

/**
 * 获取简报信息
 */
export const getBrief = () => {
  return request({
    url: "/billboard/getBillboard",
    method: "GET",
  });
};
/**
 * 添加简报信息
 */
export const addBrief = (params) => {
  return request({
    url: "/billboard/add",
    method: "POST",
    data: params,
  });
};

/**
 * 删除简报信息
 */
export const deleteBrief = (params) => {
  return request({
    url: `/billboard/delete/${params.id}`,
    method: "delete",
    // params,
  });
};
/**
 * 更新简报
 */
export const updateBrief = (params) => {
  return request({
    url: "/billboard/update",
    method: "PUT",
    data: params,
  });
};

/**
 * 上传数据中心排班信息
 */
export const uploadMsData = (params) => {
  return request({
    url: "/ms/file/upload",
    method: "POST",
    data: params,
  });
};

/**
 * 上传数据中心排班信息
 */
export const uploadDataCenterData = (params) => {
  return request({
    url: "/dataCenter/file/upload",
    method: "POST",
    data: params,
  });
};

/**
 * 上传值班经理信息
 */
export const uploadCmData = (params) => {
  return request({
    url: "/cm/file/upload",
    method: "POST",
    data: params,
  });
};

/**
 * 删除月度值班信息
 */
export const deleteMsByMonth = (params) => {
  return request({
    url: "/ms/deleteByMonth",
    method: "delete",
    params,
  });
};


