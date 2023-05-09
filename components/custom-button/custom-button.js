Component({
  props: {
    text: "Default",
    iconUrl: "Default",
    size: "medium",
    onCustomButtonTap: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap() {
      this.props.onCustomButtonTap();
    }
  }
});
