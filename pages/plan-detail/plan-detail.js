import {requestApi} from "/services/plan-detail.js"

Page({
  data: {
    response: {},
    showContent: false,
    iconDefault: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg',
    lineNumber: '3058863237',
    planName: '',
    planText: '',
    socialNetworks: [],
    voiceText: '',
    smsText: '',
    planDescription: '',
    url: 'https://apiselfservice.co/api/index.php/v1/soap/retrievePlan.json'
  },

  onReady() {
    my.setNavigationBar({
      title: 'Detalle de tu plan',
      success() {},
      fail() {},
    });
  },

  onLoad() {
    my.showLoading({
      content: 'Cargando...',
    });
    const that = this;

    requestApi(this.data.url, that)
    .then(res => {
      that.setData({
        planName: res.data.response.PlanName,
        planText: res.data.response.textDatos,
        socialNetworks: res.data.response.SocialNetworksList.map(social => social.icon),
        voiceText: res.data.response.voz,
        smsText: res.data.response.sms,
        planDescription: res.data.response.PlanDescription
      });
      my.hideLoading({});
    })
    .catch(error => {
      my.hideLoading({
        page: that,
      });
      my.alert({
        title: 'Error',
        content: 'En este momento no podemos atender esta solicitud, intenta nuevamente',
        buttonText: 'Cerrar',
      });
    });
  },

  toggleCollapse: function () {
    this.setData({
      showContent: !this.data.showContent,
      iconDefault: !this.data.showContent ? 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/expand_less/default/48px.svg' : 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg'
    });
  },

  onPayment: function () {
    my.navigateTo({
      url: '/pages/payment/payment?url=https://portalpagos.claro.com.co/index.php?view=vistas/personal/claro/newclaro/inicio.php'
    })
  }
});