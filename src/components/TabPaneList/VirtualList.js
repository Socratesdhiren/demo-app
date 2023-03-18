import React, { useEffect, useRef, useState } from "react";
import { Table, theme } from "antd";
import ResizeObserver from "rc-resize-observer";
import { VariableSizeGrid as Grid } from "react-window";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #1b2f50;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: ${({ rowIndex }) =>
    rowIndex % 2 !== 0 ? "#F7F8FC !important" : "#fff !important"};
`;

const TableWrap = styled(Table)`
  height: 479px;
  .ant-table-thead {
    background: #eff0f5 0% 0% no-repeat padding-box;
  }

  .ant-table-thead .ant-table-cell {
    background: inherit;
    border-radius: 0;
    border-start-end-radius: 0 !important;
  }
`;

const VirtualTable = (props) => {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const { token } = theme.useToken();
  const widthColumnCount = columns.filter(({ width }) => !width).length;

  const mergedColumns = columns.map((column) => {
    if (column.width) {
      return column;
    }
    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  });

  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, "scrollLeft", {
      get: () => {
        if (gridRef.current) {
          return gridRef.current?.state?.scrollLeft;
        }
        return null;
      },
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });
  const resetVirtualGrid = () => {
    gridRef.current?.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };
  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 46}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <StyledDiv
            islastindex={columnIndex === mergedColumns.length - 1}
            rowIndex={rowIndex}
            style={{
              ...style,
              boxSizing: "border-box",
              padding: token.padding,
              borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
              background: token.colorBgContainer,
            }}
          >
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </StyledDiv>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <TableWrap
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
};

const TableList = ({ columns, data }) => (
  <VirtualTable
    columns={columns}
    dataSource={data}
    scroll={{
      y: 400,
    }}
  />
);
export default TableList;
