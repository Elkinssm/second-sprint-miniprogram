Component({
  data: {},
  props: {
    imgSrc: '',
    stateImg: '',
    onTap: () => {}
  },
  didMount() {
    this.$page.genericButton = this;
  },
  methods: {
    onButtonTap(e){
      this.props.onTap(e);
    }
  }
});
