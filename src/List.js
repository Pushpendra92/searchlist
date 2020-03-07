import React, { Component } from "react";
import App from "./App";
import SearchData from "./search-data/search_list.json";
class List extends Component {
  render() {
    let search = this.props.name;

    var list;
    if (search.length != 0) {
      list = SearchData.filter(name => {
        return name.name.indexOf(search) >= 0;
      }).map(name => {
        return (
          <div>
            <table className="table">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
              </tr>
              <tr>
                <td>{name._id}</td>
                <td>{name.name}</td>
                <td>{name.gender}</td>
              </tr>
            </table>
          </div>
        );
      });
      if (list.length == 0) {
        list = <h3>Sorry, no results found</h3>;
      }
    }

    return <div>{list}</div>;
  }
}
export default List;
