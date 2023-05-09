let requestParameter  = getApp();

export function requestApi(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: {
        "AccountId": that.data.lineNumber,
        "accountIdHEader": "",
        "alias": that.data.lineNumber,
        "custcode": "",
        "esEmpresas": 0,
        "isZonaPublica": false,
        "LineOfBusiness": "3",
        "selected": false,
        "token": requestParameter.globalData.tokenDetail,
        "valida": 0
      },
      headers: {
        'X-MC-MAIL': 'juan.saavedra9306@gmail.com',
        'X-MC-SO': 'android',
        'X-MC-DEVIDE-ID': 'AUZ0ymJgRXcXNz2z3Ny6wxq7fKe95gHEpnHdSuYqR+WPGE9cfPsmcuBJtQ/pb0P2pFX9oTzHfojwr1KYCL+Ux0PkJDRSqjl4TqeT1GLdh28GUguVlFo/U6K+3XmxLA8S8lD40TOfrfzCOyxQcR4PxG4mxm8Kq0TsmNeANigJ6lVwg9r3fSuWL2pvcK5AxwC8',
        'X-MC-USER-AGENT': 'eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKE9uZVBsdXM7IE9ORVBMVVMgQTMwMTA7IFx1MDAzY2FuZHJvaWQvNy4xLjFcdTAwM2UpIn0=',
        'X-SESSION-ID': 'U2FsdGVkX19zUQNNE4kYeMvX1rxcucK5vhLEphYo0g+tSs+pPE9Q6uNDSWPBoTqIJR90hHnPTB56zNtMiEK4JUzHCWMOkWiHykoDia/1G0cuGsBK4XEcrEA/PnQ6IndcUvWAOp9KhiARdkNnWY0zK922Az5ZtJUgKvqlDVaN26PSEy8J94gXxnD/S2viWtPT2aGqhtPF/yGENfElzNsDOJQbK/NjfXaGlDr5xQpb7k6tzti96Guyx5c0ePrJ2yd9jx9C6x1KiRk+inmvbITnaj+qw5HuyV9uoAfC6p5fYQj9bt8i1kWKzOeM0gipGaIbOK1HTcnydnafdWRa0QT4I3c9/Pk1t9rDwzgxNcoWsScFf+ZhS9OX/eryxNltfwOvdDD5T+K0WzMQGx0QzqTKpTX0BHBBu3qcy4TEKNzfbRRYrBqWUe+Uoj23f/4g/cZAjLwX8BCSaTrj0cPs1pg2gu3eVTBUpbzl2iCwxzHj33tqM91QMR5KZJOBIcn5atH7nPbrz12tfMgODQdoT1ZfR6Suie/qgNly3vDpOEDL+eqBsT9ZWkhiqjGDvhHUMzqh+UUk0zB71QQqgFjGW8Jh2/kJnrmcv0Lg8aAaO+d1pU8BPG2yC6wR3sssHMhl5aFP4G5/1McF2r87gMEHspaoUQTtxN52Z8By/G+RakRruEndOpYi4ppi26O6R2Z4/TKs5R6e3ceRVL3yijTqSWCeflX1bhDz5PVbJ79AflMTsHN+Fjt/rfRpPoTLkv5FyxIWdTUT4myzByTR+6zyS4Hu83rwJUTcDcGL8UxclQljZ4FpSQNv5t4bkXS9OLQkSHwzIH59RItsc9EkHlRGOKCbAOhZjfmvxOTWUn93DZODyxwgE11QM5hlluTcnsLYXuqLBP6Q3yr0gDr891YGnh/2U5aXFS5IPzYkupivM+KxQFILg5YUXTxxik6rQhw8x6qr7bdRrCwVcxRt05S7jTQcBQ==',
        'X-MC-LINE': that.data.lineNumber,
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