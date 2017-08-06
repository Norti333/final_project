import React from "react";
import {Link} from "react-router-dom"
import Header from "./header"
import Wrapper from "./wrapper"
import Banner from "./banner"
import Items from "./items"
import Cta from "./cta"
class FinalProject extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
    return (
      <div>
        <Header/>
        <Wrapper>
           <Banner/>
           <Items/>
           <Cta/>
            </Wrapper>
      </div>
    );
  }
}

export default FinalProject;
