import React from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components';

import DataTable from './SampleDetail';

const StyledTabs = styled(Tabs)`
.ant-tabs-tab{
  margin-left: 34px;
}
.ant-tabs-nav{
  margin: 0;
}
`
const items = [
    {
      key: '1',
      label: `Data Table 1`,
      children:`Content of Tab Pane 2`,
    },
    {
      key: '2',
      label: `Data Table 2`,
      children: <DataTable/>,
    }
  ];
const index = () => {
    const onChange = (key) => {
        console.log(key);
      };

  return (
    <StyledTabs defaultActiveKey="2" items={items} onChange={onChange} />
  )
}

export default index