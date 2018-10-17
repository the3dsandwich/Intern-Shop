import React, { Component } from "react";

export default class SideInfo extends Component {
  render() {
    return (
      <div style={style.flt}>
        This website is written in the hope to facilitate university students
        when searching for jobs in the US (mostly on the west coast,
        California), particularly in fields related to Computer Science and
        Software Engineering.
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        The MIT License (MIT)
        <br />
        <br />
        Copyright © 2018 Shann Wei Yeh & Ian Y.E. Pan
        <br />
        <br />
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        “Software”), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions: <br />
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
        <br />
        <br />
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </div>
    );
  }
}

const style = {
  flt: {
    color: "#dfdfdf",
    fontFamily: "dejavu sans mono",
    fontSize: "0.8em",
    width: "23%",
    paddingTop: "2%",
    float: "right"
  }
};
