import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Header,
  Form,
  Input,
  Icon,
  Button,
  Message,
} from "semantic-ui-react";

let endpoint = "http://localhost:8080";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    console.log("tuk", this.state.task);
    let {task}  = this.state;
    console.log(this.state)
    if (task) {
      console.log(this.state)

      axios
        .post(
          endpoint + "/api/task",
          {
            task,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          this.setState({
            task: "",
          });
          console.log(res);

        });
    }
  };

  updateTask = (id) => {
    axios
      .put(endpoint + "/api/task/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <div className="row">
          <Header className="header" as="h2">
            Login
          </Header>
        </div>

        <div className="row">
            <Input
              type="text"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
              fluid
              placeholder="Username"
            />
        </div>

        <div className="row">
            <Input
              type="text"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
              fluid
              placeholder="Password"
            />
        </div>
        <Button color='teal' content='Login' icon='unlock' labelPosition='left' onClick={this.onSubmit} />

        <div className="row">
          <Card.Group>{this.state.items}</Card.Group>
        </div>
      </div>
    );
  }
}

export default Login;
