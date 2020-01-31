import Router from "next/router";

import React, { Component } from "react";

export default class index extends Component {
  render() {
    return <span />;
  }
  componentDidMount() {
    Router.push("/index.html");
  }
}
