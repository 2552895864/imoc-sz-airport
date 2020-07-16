import request from "@/utils/http";

export const getLatestOneBrief = () => {
  return request({
    url: "/billboard/getLatestOneBillboard",
    method: "GET",
  });
};
