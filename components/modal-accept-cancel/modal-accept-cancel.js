Component({
  props: {
    title: "",
    content: "",
    visible: false,
    handleClose: () => {},
    primaryButtonText: "",
    secondaryButtonText: "",
    onAcceptButtonTap: () => {},
    onSecondaryButtonTap: () => {}
  },
  methods: {
    handleClose() {
      this.props.onClose();
    },
    onAcceptButtonTap() {
      this.handleClose();
      this.props.onPrimaryButtonTap();
    },
    onCancelButtonTap() {
      this.handleClose();
      this.props.onSecondaryButtonTap();
    }
  }
});
