Component({
  data: {
    iconArrow: '/assets/icons/navigate_next_black.svg'
  },
  props: {
    imgSrc: '',
    url: '',
    dataInfo: '',
    onTap: () => {}
  },
  didMount() {
    this.$page.arrowButton = this;
  },
  methods: {
    onNav(e){
      this.props.onTap(e);
    }
  }
});
