import { requestApiGetMACCByMin} from "/services/GetMACCByMin";
import{ requestApiValidateLineOrAccDoc} from"/services/ValidateLineOrAccDoc"
Page({
  data: {
    showLoading: false,
    isVisibleSearch :false,
    inputVal: getApp().globalData.lineNumber,
    error: "", 
    lineNumber: getApp().globalData.lineNumber,
    urlGetMACCByMin:
    "https://apiselfservice.co/M3/Empresas/Postpago/GetMACCByMin/",
    urlValidateLineOrAccDoc:
    "https://apiselfservice.co/M3/Empresas/Postpago/ValidateLineOrAccDoc/",
    roamingService: [
      {
        name: "Consulta tus consumos",
        img: "/assets/icons/usage_black.svg",
        url: "/pages/test/test"
      },
      {
        name: "Detalle de tu plan",
        img: "/assets/icons/detail_black.svg",
        url: "/pages/test/test"
      },
      {
        name: "Administrar paquetes",
        img: "/assets/icons/package_black.svg",
        url: "/pages/test/test"
      },
      {
        name: "Transacciones en línea",
        img: "/assets/icons/transactions_black.svg",
        url: "/pages/test/test"
      },
      {
        name: "Roaming Internacional",
        img: "/assets/icons/roaming_black.svg",
        url:
          "/pages/soluciones-moviles/roaming-international/roaming-international"
      },
      {
        name: "Inicio",
        img: "/assets/icons/inicio_black.svg",
        url: "/pages/test/test"
      }
    ]
  },
  onLoad(query) {
    my.setNavigationBar({
      title: "Mi Claro"
    });
  },
  onNavigate(e) {
    const url = e.currentTarget.dataset.item.url;
    my.navigateTo({
      url: `${url}`
    });
  },
  configurarSessionId() {
    my.navigateTo({
      url:
        "/pages/soluciones-moviles/roaming-international/sessionIdConfig/sessionIdConfig"
    });
  },

  handleInput: function(e) {
    const inputVal = e.detail.value;
    this.setData({ inputVal: inputVal });
  },
  handleImageTap: function() {
    const inputValue = this.data.inputVal;

    if (isNaN(inputValue)) {
      console.log("error")
      this.setData({ error: "Linea invalida", inputVal: "" });
      this.hideLoading();
    }
    else if (inputValue.length != 10) {
      console.log("error")
      this.setData({ error: "Linea invalida" , inputVal: ""});
      this.hideLoading();
    } else {
      this.showLoading();
      this.ValidateLineOrAccDocService(inputValue);
    }
    
  },
  ValidateLineOrAccDocService(inputValue) {
    const errorGlobalSession=getApp().globalData.sessionError;
    requestApiValidateLineOrAccDoc(this.data.urlValidateLineOrAccDoc, this)
      .then(res => {
        var isValid=false;
        isValid=res.data.response.isValid;
        if(isValid){
          this.GetMACCByMinService(inputValue);
        }
        else{
          console()
          this.setData({ error: "Linea invalida", inputVal: "" });
          this.hideLoading();
        }
      })
      .catch(error => {
        this.hideLoading();
        if (error.data.status === 401  && error.data.response === 'Error de acceso, tiempo de sesion agotado') {
          my.alert({
            content: 'Su sesión ha expirado. Por favor, inicie sesión de nuevo.',
            buttonText: "Cerrar"
          });
        } else {
          this.setData({ error: "Linea invalida", inputVal: "" });
        }
      }
   );
  },
  GetMACCByMinService(inputValue) {
    
    requestApiGetMACCByMin(this.data.urlGetMACCByMin, this)
      .then(res => {
        if(res.data.error==0){
          getApp().globalData.lineNumber=inputValue;
          console.log("exitoso--->",inputValue)
          this.setData({ 
            inputVal: inputValue,
            lineNumber: inputValue
          });
          this.setData({
            isVisibleSearch :false
          })
        }
        else{
          
          this.setData({ error: "Linea invalida", inputVal: "" });
        }
        this.hideLoading();
      })
      .catch(error => {
        this.hideLoading();
        if (error.data.status === 401  && error.data.response === 'Error de acceso, tiempo de sesion agotado') {
          my.alert({
            content: 'Su sesión ha expirado. Por favor, inicie sesión de nuevo.',
            buttonText: "Cerrar"
          });
        } else {
          this.setData({ error: "Linea invalida", inputVal: "" });
        }
      });
  },

  visibleSearchbynumber(){
    this.setData({
      isVisibleSearch :true
    })
  },
  closeSearchWindows(){
    this.setData({
      isVisibleSearch :false
    })
  },
  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false
    });
  }
});
