import axios from "@/utils/http";

// export async function queryLineData() {
//   const res = await axios.get("/api/linedata");
//   return res;
// }

// export async function querySumData() {
//   const res = await axios.get("/api/sumdata");
//   return res;
// }

// export async function queryDeviceData() {
//   const res = await axios.get("/api/devicedata");
//   return res;
// }

// export async function queryVMPieChartData() {
//   const res = await axios.get("/api/vmpiechartdata");
//   return res;
// }

// export async function queryPMPieChartData() {
//   const res = await axios.get("/api/pmpiechartdata");
//   return res;
// }

// export async function queryVMLineChartData() {
//   const res = await axios.get("/api/vmlinechartdata");
//   return res;
// }

// export async function queryPMLineChartData() {
//   const res = await axios.get("/api/pmlinechartdata");
//   return res;
// }

export async function query() {
  const res = await axios.get("/api/real");
  return res;
}
