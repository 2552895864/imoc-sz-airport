const generatePhoneCardString = (staff) => {
  const shiftMapping = { D: "（白）", N: "（晚）" };
  const { staffName, staffMobile, shift } = staff;
  const shiftString = !shift ? "" : shiftMapping[shift];
  return `${staffName}${shiftString} ${staffMobile}`;
};

export { generatePhoneCardString };
