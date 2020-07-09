const generatePhoneCardString = (staff) => {
  const shiftMapping = { D: "（白）", N: "（晚）" };
  const { staffName, staffMobile, shift, leader } = staff;
  const shiftString = leader ? "" : shiftMapping[shift];
  return `${staffName}${shiftString} ${staffMobile}`;
};

export { generatePhoneCardString };
