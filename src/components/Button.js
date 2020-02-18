import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  // create contextType
  // exactly named contextType
  // inner a class it declaration with static
  // outher the class Button.contextType
  // static contextType = LanguageContext;
  // or use consumer
  // consumer child is a function

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            {/**
             * Create a Consumer
             * Consumer can fire a function as a child
             */}
            <LanguageContext.Consumer>
              {value => (value.language === "english" ? "Submit" : "Voorlagen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
