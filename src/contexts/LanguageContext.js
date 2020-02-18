import React from "react";

// create a context object
// pass a default value
// for change the default value select the provider component
// provider is the component where the state is declarate
// at this app it is the App.js
/*
    in App.js
    <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
*/

// create store
const Context = React.createContext("english");
export class LanguageStore extends React.Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      // add all state in value ...
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
