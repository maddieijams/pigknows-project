import React, {Component} from "react";
import {Button, ListGroup, Modal} from "react-bootstrap";
import {User} from "./types";

interface IProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
}

export default class UserModal extends Component<IProps, {}> {
  formatDate = (date: string) => new Date(date).toLocaleString().split(",")[0];

  public render() {
    const {user} = this.props;
    return (
      <Modal show={this.props.show} onHide={() => this.props.setShow(false)}>
        {this.props.user ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="font-weight-bold">Email:</span> {user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="font-weight-bold">Date of Birth:</span>{" "}
                  {this.formatDate(user.dob.date)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="font-weight-bold">Phone number:</span>{" "}
                  {user.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="font-weight-bold">Location:</span>{" "}
                  {`${user.location.city}, ${user.location.state}`}
                </ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.props.setShow(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </>
        ) : (
          "No user data"
        )}
      </Modal>
    );
  }
}
