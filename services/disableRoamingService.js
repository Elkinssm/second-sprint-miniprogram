let requestParameter = getApp();

export function requestApiDisableRoamingService(url, disableDataService, that) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "POST",
      dataType: "json",
      data: {
        data: disableDataService
      },
      headers: {
        "X-SESSION-ID": requestParameter.globalData.sessionId,
        "X-MC-LINE": requestParameter.globalData.lineNumber,
        "X-MC-LOB": "3",
        "X-MC-MAIL": "angie.copete@neoris.com",
        "X-Carrier": "Android",
        "X-Wifi": true,
        "X-MC-SO": "android",
        "connection": "Keep-Alive",
        "X-MC-HE-V": "3",
        "X-MC-SO-V": "11",
        "X-MC-SO-API": "30",
        "X-MC-SO-PHONE-F": "Google",
        "X-MC-SO-PHONE-M": "sdk_gphone_x86",
        "X-MC-APP-V": "14.7.0",
        "X-MC-DEVICE-NAME": "Googlesdk_gphone_x86",
        "X-MC-DEVICE-ID":
          "QOIvLiECmaWv5SzK7TQlCMv2dWc5n8geynXevZs007iN5ozLUHBSeg04haQKdnY2Tny7E+I8TWg83iUxlI+e51tK/WdBX1RR/MxVBMx+/R000fizm96DP8pZak9OG2T0XFZ0GrK1y1D0DYbxiRv7i/83aJ/RWeuvlGxciQbCgO0=",
        "X-MC-USER-AGENT":
          "eyJpcCI6IjE5Mi4xNjguMS4xMDEiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChYaWFvbWk7IE0yMTAxSzdCTDsgXHUwMDNjYW5kcm9pZC8xMVx1MDAzZSkifQ=="
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res.data.response);
      }
    });
  });
}
