Component({
  props: {
    "img":'',
    "title":'',
    "url": ''
  },
  methods:{
    redirectBanner(){
      const value = this.props.url;
      const url=`/pages/guia-novedades/redirect-guia/redirect-guia?url=${value}`;
      my.navigateTo({
      url,
     }) 
    },
    onImageLoaded() {
      this.setData({ imageLoaded: true });
    },
  }
});