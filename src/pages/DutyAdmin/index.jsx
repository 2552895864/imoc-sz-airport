import React from "react";
import ModuleLayout from "./components/ModuleLayout";
import Radio from "./components/Radio";

import DownUp from "./businessComponents/DownUp";
import MonthPanel from "./businessComponents/MonthPanel";
import WorkingSchedule from "./businessComponents/WorkingSchedule";
import StaffInfo from "./businessComponents/StaffInfo";
import Brief from "./businessComponents/Brief";
import AirDuty from "./businessComponents/AirDuty";
import styles from "./index.module.less";

const moduleEnum = {
  workingSchedule: "workingSchedule",
  staffInfo: "staffInfo",
  brief: "brief",
  airDuty: "airDuty",
};
const moduleComponentMapping = {
  [moduleEnum.workingSchedule]: <WorkingSchedule />,
  [moduleEnum.staffInfo]: <StaffInfo />,
  [moduleEnum.brief]: <Brief />,
  [moduleEnum.airDuty]: <AirDuty />,
};
export default class DutyAdmin extends React.Component {
  state = {
    currentModule: moduleEnum.workingSchedule,
  };
  getStaffInfo = async () => {};
  componentDidMount() {
    this.getStaffInfo();
  }

  getSelectedItemValue = (value) => {
    console.log("index value:", value);
    this.setState({
      currentModule: value,
    });
  };

  render() {
    const { currentModule } = this.state;
    return (
      <div className={styles.container}>
        <ModuleLayout>
          <DownUp />
        </ModuleLayout>
        <ModuleLayout title="排班月份">
          <MonthPanel />
        </ModuleLayout>
        <ModuleLayout title="排班详情">
          <Radio
            config={[
              { value: moduleEnum.workingSchedule, label: "运维排班" },
              { value: moduleEnum.staffInfo, label: "运维人员" },
              { value: moduleEnum.brief, label: "工作简报" },
              { value: moduleEnum.airDuty, label: "机场值班" },
            ]}
            onChange={this.getSelectedItemValue}
          />
          <div className={styles.moduleContainer}>
            {moduleComponentMapping[currentModule]}
          </div>
        </ModuleLayout>
      </div>
    );
  }
}
