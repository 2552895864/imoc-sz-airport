let CalendarData = [
  0xa4b,
  0x5164b,
  0x6a5,
  0x6d4,
  0x415b5,
  0x2b6,
  0x957,
  0x2092f,
  0x497,
  0x60c96,
  0xd4a,
  0xea5,
  0x50da9,
  0x5ad,
  0x2b6,
  0x3126e,
  0x92e,
  0x7192d,
  0xc95,
  0xd4a,
  0x61b4a,
  0xb55,
  0x56a,
  0x4155b,
  0x25d,
  0x92d,
  0x2192b,
  0xa95,
  0x71695,
  0x6ca,
  0xb55,
  0x50ab5,
  0x4da,
  0xa5b,
  0x30a57,
  0x52b,
  0x8152a,
  0xe95,
  0x6aa,
  0x615aa,
  0xab5,
  0x4b6,
  0x414ae,
  0xa57,
  0x526,
  0x31d26,
  0xd95,
  0x70b55,
  0x56a,
  0x96d,
  0x5095d,
  0x4ad,
  0xa4d,
  0x41a4d,
  0xd25,
  0x81aa5,
  0xb54,
  0xb6a,
  0x612da,
  0x95b,
  0x49b,
  0x41497,
  0xa4b,
  0xa164b,
  0x6a5,
  0x6d4,
  0x615b4,
  0xab6,
  0x957,
  0x5092f,
  0x497,
  0x64b,
  0x30d4a,
  0xea5,
  0x80d65,
  0x5ac,
  0xab6,
  0x5126d,
  0x92e,
  0xc96,
  0x41a95,
  0xd4a,
  0xda5,
  0x20b55,
  0x56a,
  0x7155b,
  0x25d,
  0x92d,
  0x5192b,
  0xa95,
  0xb4a,
  0x416aa,
  0xad5,
  0x90ab5,
  0x4ba,
  0xa5b,
  0x60a57,
  0x52b,
  0xa93,
  0x40e95,
];
let monthDay = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
let tgString = "甲乙丙丁戊己庚辛壬癸";
let dzString = "子丑寅卯辰巳午未申酉戌亥";
let numString = "一二三四五六七八九十";
let monString = "正二三四五六七八九十冬腊";
let cYear, cMonth, cDay, TheDate;

function GetBit(m, n) {
  return (m >> n) & 1;
}
function e2c() {
  TheDate =
    arguments.length !== 3
      ? new Date()
      : new Date(arguments[0], arguments[1], arguments[2]);
  let total, m, n, k;
  let isEnd = false;
  let tmp = TheDate.getYear();
  if (tmp < 1900) {
    tmp += 1900;
  }
  total =
    (tmp - 1921) * 365 +
    Math.floor((tmp - 1921) / 4) +
    monthDay[TheDate.getMonth()] +
    TheDate.getDate() -
    38;

  if (TheDate.getYear() % 4 === 0 && TheDate.getMonth() > 1) {
    total++;
  }
  for (m = 0; ; m++) {
    k = CalendarData[m] < 0xfff ? 11 : 12;
    for (n = k; n >= 0; n--) {
      if (total <= 29 + GetBit(CalendarData[m], n)) {
        isEnd = true;
        break;
      }
      total = total - 29 - GetBit(CalendarData[m], n);
    }
    if (isEnd) break;
  }
  cYear = 1921 + m;
  cMonth = k - n + 1;
  cDay = total;
  if (k === 12) {
    if (cMonth === Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth = 1 - cMonth;
    }
    if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth--;
    }
  }
}

function GetDateString() {
  let tmp = "";
  tmp += tgString.charAt((cYear - 4) % 10);
  tmp += dzString.charAt((cYear - 4) % 12);
  tmp += "年";
  if (cMonth < 1) {
    tmp += "(闰)";
    tmp += monString.charAt(-cMonth - 1);
  } else {
    tmp += monString.charAt(cMonth - 1);
  }
  tmp += "月";
  tmp += cDay < 11 ? "初" : cDay < 20 ? "十" : cDay < 30 ? "廿" : "三十";
  if (cDay % 10 !== 0 || cDay === 10) {
    tmp += numString.charAt((cDay - 1) % 10);
  }
  return tmp;
}

export function GetLunarDate(solarYear, solarMonth, solarDay) {
  //solarYear = solarYear<1900?(1900+solarYear):solarYear;
  if (solarYear < 1921 || solarYear > 2020) {
    return "";
  } else {
    solarMonth = parseInt(solarMonth) > 0 ? solarMonth - 1 : 11;
    e2c(solarYear, solarMonth, solarDay);
    return GetDateString();
  }
}