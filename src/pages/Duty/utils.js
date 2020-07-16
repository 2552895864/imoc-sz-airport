const generatePhoneCardString = (staff) => {
  const shiftMapping = { D: "白：", N: "晚：" };
  const { staffName, staffMobile, shift } = staff;
  const shiftString = !shift ? "" : shiftMapping[shift];
  return `${shiftString}${staffName} ${staffMobile}`;
};

export { generatePhoneCardString };
