import React from "react";
import { Table } from "antd";
import styles from "./index.module.less";

const HTable = ({ dataSource, columns, pagination, loading }) => {
  return (
    <Table
      // bordered
      pagination={pagination}
      dataSource={dataSource}
      columns={columns}
      size="small"
      rowKey="id"
      className={styles.table}
      loading={loading}
    />
  );
};
export default HTable;
