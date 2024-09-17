interface IMockData {
  [key: string]: {
    password: string;
    plain: string;
  };
}

const MockData: IMockData = {
  // You can use this for testing

  "test@gmail.com": {
    password: "$2b$10$YF1dQHf/WBdd67nVDR2Up.xij98x2zscnmlctmV1qQuZfId/pIo/W",
    plain: "test123",
  },
  "hi@gmail.com": {
    password: "$2b$10$hNuw7U54Hh1dWkOS7uph0OaQ/kDqNJcAHujkCY7PSFOARcZCQK1Vq",
    plain: "hello",
  },
};

export default MockData;
