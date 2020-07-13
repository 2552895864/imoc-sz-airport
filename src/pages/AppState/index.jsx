import React from "react";
// import { Button } from "antd";
import PageContainer from "@/components/PageContainer";
import ModuleContainer from '@/components/ModuleContainer';

export default class AppState extends React.Component {
  render() {
    return (
      <PageContainer title="应用态势">
        {/* <Button type="primary">应用态势</Button> */}
        <ModuleContainer>
          <p>ff</p>
        </ModuleContainer>
      </PageContainer>
    );
  }
}
