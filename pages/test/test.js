Page({
  data: {
    showLoading: false
  },
  onLoad() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 3000); // Personalizar el tiempo de carga del loading
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
