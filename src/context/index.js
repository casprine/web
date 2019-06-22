import React, { Component, Fragment } from "react";
import { day } from "../utils/helpers";

const ContextContext = React.createContext();

import { withRouter } from "next/router";

class Provider extends Component {
  state = {
    dark: !day(),
    footer: false
  };

  switchTheme = () => {
    this.state.dark
      ? this.setState({ dark: false })
      : this.setState({ dark: true });
  };

  toggleFooter = () => {
    this.state.footer
      ? this.setState({ footer: false })
      : this.setState({ footer: true });
  };

  render() {
    const { dark, footer } = this.state;
    const router = this.props.router;
    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: dark,
            footer: footer,
            toggleTheme: this.switchTheme,
            toggleFooter: this.toggleFooter,
            router: router
          }}
        >
          {this.props.children}
        </ContextContext.Provider>
      </Fragment>
    );
  }
}

const ContextConsumer = ContextContext.Consumer;
const ContextProvider = withRouter(Provider);
export { ContextConsumer, ContextProvider };
