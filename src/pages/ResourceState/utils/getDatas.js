export default async (DataFuncsMap) => {
  /**
   * 对于已声明的state：
   *  1.获取对应数据
   *  2.使用对应方法对数据进行标准化
   *
   * 注：DataFuncsMap的各个key必须与state的key对应
   */
  const results = await Promise.all(
    Object.entries(DataFuncsMap).map(async ([key, value]) => {
      const data = await value.query();
      return {
        [key]: value.normalize(data),
      };
    })
  );
  /**
   * results:[{resourceLineData:data1},{resourceSumData:data2}]
   */
  return results.reduce((acc, val) => {
    return {
      ...acc,
      ...val,
    };
  }, {});
};
