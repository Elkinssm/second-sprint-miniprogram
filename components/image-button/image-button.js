Component({
  data: {},
  props: {
    data: '',
    dataItem: '',
    dataIndex:''
  },
  didMount() {
    this.$page.itemSolution = this;
  },
  methods: {
    onNavigateTo(e){
      my.navigateTo({
        url: `/pages/solucion/solucion?data=${JSON.stringify(this.props.data)}&id=${this.props.dataItem.idVideo}`
      });
    }
  }
});
