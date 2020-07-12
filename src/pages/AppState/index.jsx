import React from "react";
import { Button } from "antd";
import PageContainer from "@/components/PageContainer";

export default class AppState extends React.Component {
  render() {
    return (
      <PageContainer title="应用态势">
        <Button type="primary">应用态势</Button>
      </PageContainer>
    );
  }
}
