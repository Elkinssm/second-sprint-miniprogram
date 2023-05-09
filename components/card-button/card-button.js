Component({
  mixins: [],
  data: {},
  props: {
    id: "Default",
    iconUrl: "Default",
    text: "Default",
    solid: false,
    onButtonTap: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap() {
      this.props.onButtonTap({ id: this.props.id, text: this.props.text });
    }
  }
});
