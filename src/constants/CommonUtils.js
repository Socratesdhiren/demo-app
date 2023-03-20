import {
  ListOfCities,
  ListOfNames,
  ListOfColumns,
  DataTypesList,
  ListOfStreets,
} from "../constants/variable";

const randomValue = () => Math.floor(Math.random() * 91) + 10;

const getRandomValueInfo = (listData) => {
  // Generate random
  const dataType = listData[Math.floor(Math.random() * listData.length)];
  // Return full name string
  return `${dataType}`;
};

const SecondTable = Array.from(
  {
    length: 100,
  },
  (_, key) => ({
    key,
    name: getRandomValueInfo(ListOfColumns),
    dataType: getRandomValueInfo(DataTypesList),
    money: randomValue(),
    address: `${getRandomValueInfo(ListOfStreets)}, ${getRandomValueInfo(
      ListOfCities
    )}`,
  })
);

const VirtualListData = Array.from(
  {
    length: 50000,
  },
  (_, key) => ({
    key,
    name: getRandomValueInfo(ListOfNames),
    location: `${getRandomValueInfo(ListOfCities)}`,
    contact_no: "987123213",
  })
);

export { SecondTable, randomValue, VirtualListData };
