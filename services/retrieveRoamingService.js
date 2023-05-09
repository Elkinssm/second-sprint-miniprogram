let requestParameter  = getApp();

export function requestApiretrieve(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      headers: {
        'X-MC-MAIL': 'evoluciondecanales@gmail.com',
        'X-MC-SO': 'android',
        'X-MC-DEVIDE-ID': 'NpEycdUlBFk4Kpb+R1GG9lqZcAAIpDBJThmCly03TVY+dCxLU0crZufrF4WcdHIyFpdOceXaOf96Eel/6096nTLvYJieWECkrUnYORPqMW09WBz0bIGuh444pf0QKAbQ7uBfpZji98SfAAy/3e6FPEmk+ykqG9tFUDqJJuAW7nrcySZ28G/N2/fTsufNIY+d',
        'X-MC-USER-AGENT': 'eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKEdvb2dsZTsgQW5kcm9pZCBTREsgYnVpbHQgZm9yIHg4NjsgXHUwMDNjYW5kcm9pZC83LjBcdTAwM2UpIn0=',
        'X-SESSION-ID': 'U2FsdGVkX1+zPTtTA79xFB6LSwo07gnVMFF5TiCPQ4X46ST9PkDtz2rm6mevZpl558W2WhbRaT2GEsDDgxrgh6QIyZFqSks/USNPG2aEgmWOLAFRbfw7SRKE44/X7i2s8a6d2i5OEbjMFA1hhGijOhU+d5y3Z5/e8PdPhxlzOEyIrXFJVCpVC0rf4qORJ5NKbtT+2bufZmHpbJObUESRWIi1Fx2ButFZyYycimflUzrtiEZbdZyCySJzglpZiyzljwahGTp3mUfTb0/OAtA720QpAwHKoLF2V/p6RoNGCeY8kIge4aqwFAdOimq1Jp1fzekQswPbmcZ2lSOPSbXuQLdDy4r+65rP4u/hJCW54iQUHkLs8H+H0p1LDMmuK0vuo3z6yIJV+VwkyEpyWYc/YuB54ciBrSw+9GGqBY+Vc1YANcM5RofKNbd3aiSC9iJ6YKk167+jTGxbFPWFKGsRnvQzEUnE9CsPanZes/lgvmOtaccwc4jEHNRkJIXiDqyREiegNbHP2252sR/aajYj5lR0S2Oy6XHZlhc1hicRpPaNqwTj65nA6UwurCa6rtgLBod/MIFulm2L0x5eZYMwJ5jtNCsrIBIrZTw2AiU4ewn1bIJK7nnPkF5yptQE5ydTQ4ufQ/eIm/WiDe6mlN/5TCdQ+T59aoEpN1RgpUV9Ti8Gwy3yOUplmtfO0y+IwG2PNBwa7wP/mqKxxfXN8jPtldiAqV2u2hApWhytRtEo3Zc2fVelkiAGBVqKgDWgYoaC06LwGScnrO57aesJSP5OnalHNkwH693xyt+pGuuo9sMF97g6ATQlHAZIhIwW3vhNignA3y8jRF5z2B+Z8W1r3g==',
        'X-MC-LINE': requestParameter.globalData.lineNumber,
        'X-MC-LOB': '3',
      },
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
}