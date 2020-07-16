export function normalizeLineData(data) {
  return data;
}

export function normalizeSumData(data) {
  return data;
}

export function normalizeDeviceData(data) {
  return data;
}

export function normalizePieChartData(data) {
  return data;
}

const nameMap = {
  cpu: "CPU",
  memory: "内存",
  disk: "存储",
};
const hasKey = (keys) => keys.filter((key) => nameMap[key]);

const getNewChangedKeyItem = (item) =>
  hasKey(Object.keys(item))
    .map((key) => ({
      [nameMap[key]]: item[key],
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});

export function normalizeLineChartData(data) {
  return Object.entries(data)
    .map(([key, item]) => ({
      [key]: {
        ...item,
        ...getNewChangedKeyItem(item),
      },
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
