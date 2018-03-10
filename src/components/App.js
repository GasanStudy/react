import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }


  componentDidMount() {

    fetch('http://localhost:8080/member/list')
      .then(response => response.json())
      .then(data => this.setState({ list: data }));


  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <table>
          <tr>
            <th>선수이름</th>
            <th>등번호</th>
            </tr>
          {list.map(list =>
            <div key={list.m_id}>
              <tr>
                <td>{list.name} </td>
                <td>{list.back_num}</td>
              </tr>
            </div>
          )}
        </table>
      </div>

    )
  }
}

export default App;
