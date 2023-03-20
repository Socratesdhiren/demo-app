import React from "react";

import SampleData from "./SampleData";
import DataSetListView from "./DataSetListView";
import { SampleDataView } from "./DataSetListView";

const defaultProps = {
  isActive: true,
  data: {
    title: "Data sample",
    records: "102k",
  },
};

const index = () => {
  return (
    <>
      <SampleDataView {...defaultProps} />

      <SampleData />

      <DataSetListView />
    </>
  );
};

export default index;
