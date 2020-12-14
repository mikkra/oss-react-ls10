import React from "react";

function withAlternateLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <div>Header</div>
          <hr />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default withAlternateLayout;
