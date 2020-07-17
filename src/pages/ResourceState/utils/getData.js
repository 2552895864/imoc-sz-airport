import Data from "../data/Data";

export const data = Data.getInstance();

const getTime = (data) => Object.values(data).map((item) => item.date);
const getValue = (data, key) => Object.values(data).map((item) => +item[key]);

const queryLineData = async () => {
  const { deviceOverviewVO } = await data.getData();
  return {
    app: deviceOverviewVO.appNum,
    vm: deviceOverviewVO.vmNum,
    bz: deviceOverviewVO.businessAreaNum,
    pm: deviceOverviewVO.hostNum,
    bm: deviceOverviewVO.bmsNum,
  };
};
const querySumData = async () => {
  const { deviceOverviewVO } = await data.getData();
  return {
    cpu: deviceOverviewVO.cpuSize,
    mem: deviceOverviewVO.ramSize,
    storage: deviceOverviewVO.diskSize,
    device: deviceOverviewVO.deviceNum,
  };
};
const queryDeviceData = async () => {
  const { deviceOverviewVO } = await data.getData();
  return [
    {
      value: deviceOverviewVO.serverNum,
      label: "服务器总数",
      iconName: "services",
    },
    {
      value: deviceOverviewVO.storageDeviceNum,
      label: "存储设备数",
      iconName: "storage",
    },
    {
      value: deviceOverviewVO.netDeviceNum,
      label: "网络设备数",
      iconName: "net",
    },
  ];
};
const queryVMPieChartData = async () => {
  const { vmResourceOverviewVO } = await data.getData();
  return [
    {
      label: "CPU",
      usage: vmResourceOverviewVO.vcpuUsage,
      sumCount: vmResourceOverviewVO.vcpuTotal,
      unit: "核",
      usedCount: vmResourceOverviewVO.vcpuUsed,
    },
    {
      label: "内存",
      usage: vmResourceOverviewVO.vramUsage,
      sumCount: vmResourceOverviewVO.vramTotal,
      unit: "G",
      usedCount: vmResourceOverviewVO.vramUsed,
    },
    {
      label: "存储",
      usage: vmResourceOverviewVO.vdiskUsage,
      sumCount: vmResourceOverviewVO.vdiskTotal,
      unit: "G",
      usedCount: vmResourceOverviewVO.vdiskUsed,
    },
  ];
};
const queryPMPieChartData = async () => {
  const { physicsResourceOverviewVO } = await data.getData();
  return [
    {
      label: "CPU",
      usage: physicsResourceOverviewVO.vcpuUsage,
      sumCount: physicsResourceOverviewVO.vcpuTotal,
      unit: "核",
      usedCount: physicsResourceOverviewVO.vcpuUsed,
    },
    {
      label: "内存",
      usage: physicsResourceOverviewVO.vramUsage,
      sumCount: physicsResourceOverviewVO.vramTotal,
      unit: "G",
      usedCount: physicsResourceOverviewVO.vramUsed,
    },
    {
      label: "存储",
      usage: physicsResourceOverviewVO.vdiskUsage,
      sumCount: physicsResourceOverviewVO.vdiskTotal,
      unit: "G",
      usedCount: physicsResourceOverviewVO.vdiskUsed,
    },
  ];
};
const queryVMLineChartData = async () => {
  const { resourceTrendVO } = await data.getData();

  return {
    week: {
      time: getTime(resourceTrendVO.itemVOListVMByWeek),
      cpu: getValue(resourceTrendVO.itemVOListVMByWeek, "cpu"),
      memory: getValue(resourceTrendVO.itemVOListVMByWeek, "ram"),
      disk: getValue(resourceTrendVO.itemVOListVMByWeek, "disk"),
    },
    hour: {
      time: getTime(resourceTrendVO.itemVOListVMByHour),
      cpu: getValue(resourceTrendVO.itemVOListVMByHour, "cpu"),
      memory: getValue(resourceTrendVO.itemVOListVMByHour, "memory"),
      disk: getValue(resourceTrendVO.itemVOListVMByHour, "disk"),
    },
  };
};
const queryPMLineChartData = async () => {
  const { resourceTrendVO } = await data.getData();

  return {
    week: {
      time: getTime(resourceTrendVO.itemVOListPhysicsByWeek),
      cpu: getValue(resourceTrendVO.itemVOListPhysicsByWeek, "cpu"),
      memory: getValue(resourceTrendVO.itemVOListPhysicsByWeek, "ram"),
      disk: getValue(resourceTrendVO.itemVOListPhysicsByWeek, "disk"),
    },
    hour: {
      time: getTime(resourceTrendVO.itemVOListPhysicsByHour),
      cpu: getValue(resourceTrendVO.itemVOListPhysicsByHour, "cpu"),
      memory: getValue(resourceTrendVO.itemVOListPhysicsByHour, "memory"),
      disk: getValue(resourceTrendVO.itemVOListPhysicsByHour, "disk"),
    },
  };
};

export {
  queryLineData,
  querySumData,
  queryDeviceData,
  queryVMPieChartData,
  queryPMPieChartData,
  queryVMLineChartData,
  queryPMLineChartData,
};
