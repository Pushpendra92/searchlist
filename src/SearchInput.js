import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  changeHandler = e => {
    // console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state.search);
    console.log(e);
    this.props.parentCallback(this.state.search);
    // console.log(e.target.text);

    // this.setState(prevState => {
    //   console.log(prevState);
    // });
    console.log(this.state.searchQuery);
  };
  render() {
    return (
      <div>
        <form onClick={this.submitHandler}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.changeHandler}
          />
          <input type="submit" className="btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SearchInput;
