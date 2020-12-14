import React from "react";

function withDefaultLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <div>Header</div>
          <hr />
          <WrappedComponent {...this.props} />
          <hr />
          <div>Footer</div>
        </div>
      );
    }
  };
}

export default withDefaultLayout;
