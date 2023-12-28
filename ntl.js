var s_0_9St = new Array('صفر', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه');
      var s_10_19St = new Array('ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده');
      var s_20_90St = new Array('بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود');
      var s_100_900St = new Array('صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد');
      var s_PartsSt = new Array('هزار', 'میلیون', 'میلیارد', 'هزار', 'میلیون', 'میلیارد');
      var splitterSt = " و ";
  function getPartSt(numberIn3) {
          if (numberIn3.length > 3) { return ""; }
          var number = numberIn3.toString(); switch (number.length) {
              case 1: number = "00" + number; break;
              case 2: number = "0" + number; break;
          }
          var outString = ""; var n1 = parseInt(number.substr(0, 1)); var n2 = parseInt(number.substr(1, 1)); var n3 = parseInt(number.substr(2, 1));
          if (n1 != 0) {
              switch (n2) {
                  case 0: if (n3 != 0) { outString = s_100_900St[n1 - 1] + splitterSt + s_0_9St[n3]; }
                      else { outString = s_100_900St[n1 - 1]; }; break;
                  case 1: outString = s_100_900St[n1 - 1] + splitterSt + s_10_19St[n3]; break;
                  default: if (n3 != 0) { outString = s_100_900St[n1 - 1] + splitterSt + s_20_90St[n2 - 2] + splitterSt + s_0_9St[n3]; }
                      else { outString = s_100_900St[n1 - 1] + splitterSt + s_20_90St[n2 - 2]; }
              }
          }
          else {
              switch (n2) {
                  case 0: if (n3 != 0) { outString = s_0_9St[n3]; }
                      else { outString = ""; } break;
                  case 1: outString = s_10_19St[n3]; break; default: if (n3 != 0) { outString = s_20_90St[n2 - 2] + splitterSt + s_0_9St[n3]; }
                      else { outString = s_20_90St[n2 - 2]; }
              }
          };
          return outString;
      }
      function TEN(inp) {
          if (inp == "") return; inp = inp.replace(/۰/g, '0').replace(/۱/g, '1').replace(/۲/g, '2').replace(/۳/g, '3').replace(/۴/g, '4').replace(/۵/g, '5').replace(/۶/g, '6').replace(/۷/g, '7').replace(/۸/g, '8').replace(/۹/g, '9').replace(/٠/g, '0').replace(/١/g, '1').replace(/٢/g, '2').replace(/٣/g, '3').replace(/٤/g, '4').replace(/٥/g, '5').replace(/٦/g, '6').replace(/٧/g, '7').replace(/٨/g, '8').replace(/٩/g, '9');
          return inp
      }
      function NToLe(inputNumber) {
      inputNumber=inputNumber.toString();
      inputNumber=TEN(inputNumber);
          if (inputNumber.length == 0) { return ""; }
          var tempNumber = Math.abs(inputNumber).toString();
          if (tempNumber == 0) return s_0_9[0];
          var partCount = Math.ceil((parseInt(tempNumber).toString().length / 3), 1); if (s_PartsSt.length < partCount) return veryBig;
          var partFullString = new Array();
          for (var i = 0; i < partCount; i++) {
              var numberLength3; var lengthToSelectFirtPart; if (i == 0) {
                  lengthToSelectFirtPart = tempNumber.length - ((partCount - 1) * 3);
                  numberLength3 = tempNumber.substr((i * 3), lengthToSelectFirtPart);
              }
              else { numberLength3 = tempNumber.substr(lengthToSelectFirtPart + ((i - 1) * 3), 3); }
              var partInWord = getPartSt(numberLength3); var partIndex = (partCount - 2 - i); var partPreFix = s_PartsSt[partIndex];
              if (i == partCount - 1) { partPreFix = ""; }
              if (i == 0) {
                  if (partInWord != "") { partFullString[i] = partInWord + " " + partPreFix; }
                  else { partFullString[i] = ""; }
              }
              else {
                  if (partFullString[i - 1] != "") { if (partInWord != "") { partFullString[i] = splitterSt + partInWord + " " + partPreFix; } else { partFullString[i] = ""; } }
                  else { if (partInWord != "") { partFullString[i] = splitterSt + partInWord + " " + partPreFix; } else { partFullString[i] = ""; } }
              }
          }
          var outString = "";
          for (var i = 0; i < partFullString.length; i++) { outString += partFullString[i]; } return outString;
      }