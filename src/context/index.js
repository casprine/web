import React, { Component, Fragment } from "react";
// import { day } from "../utils/helpers";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: true
  };

  switchTheme = () => {
    this.state.dark
      ? this.setState({ dark: false })
      : this.setState({ dark: true });
  };

  render() {
    const { dark } = this.state;
    console.log(dark);

    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: dark,
            toggleTheme: this.switchTheme
          }}
        >
          {this.props.children}
        </ContextContext.Provider>
      </Fragment>
    );
  }
}

const ContextConsumer = ContextContext.Consumer;

export { ContextConsumer, ContextProvider };
