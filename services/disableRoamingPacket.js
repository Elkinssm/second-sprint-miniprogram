let requestParameter = getApp();

export function requestApiDisableRoamingPackage(url, disableData, that) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "POST",
      dataType: "json",
      data: {
        data: disableData
      },
      headers: {
        "X-SESSION-ID": requestParameter.globalData.sessionId,
        "X-MC-LINE": requestParameter.globalData.lineNumber,
        "X-MC-LOB": "3",
        "Content-Type": "application/json; charset=UTF-8",
        "X-MC-MAIL": "angie.copete@neoris.com",
        "X-Carrier": "Claro",
        "X-Wifi": false,
        "X-MC-HE-V": "3",
        "X-MC-SO-V": "11",
        "Cache-Control": "no-cache",
        "X-MC-SO-API": "30",
        "X-MC-SO-PHONE-F": "samsung",
        "X-MC-SO-PHONE-M": "SM-A305G",
        "X-MC-APP-V": "15.0.0",
        "X-MC-DEVICE-NAME": "samsungSM-A305G",
        "X-MC-DEVIDE-ID":
          "S5Efh9SSUVvc/EESWoRMiob0edv+k7f6LyyJ0ZK7y2NvmRLW51X1+ZKr/Er/8nsO7LwD7H/uafrxNb7wKbJXZB+u4eR8kK5VSW68OJh+4xnfvsxZMIJhYdOOkc1AoDkrf52ycn+jyGzu49My8/orw7eJg8yWFyH9EFQicD/1ndg=",
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
