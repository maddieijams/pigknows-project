import React, {useEffect, useState} from "react";
import {Card, Button, CardColumns, Container} from "react-bootstrap";
import {User} from "./types";
import UserModal from "./UserModal";

interface IProps {
  refreshClicked: boolean;
  setRefreshClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Users({refreshClicked, setRefreshClicked}: IProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [show, setShow] = useState<boolean>(false);

  const fetchUsers = () => {
    fetch(`https://randomuser.me/api/?results=${10}`)
      .then((res) => res.json())
      .then(({results}) => setUsers(results))
      // setting refreshClicked boolean back to false so the user can click it over and over and still have the users refresh
      .then(() => refreshClicked && setRefreshClicked(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    return fetchUsers();
    // this useEffect is for fetching data initially
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return refreshClicked && fetchUsers();
    // only run this useEffect when refresh button is clicked
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshClicked]);

  return (
    <Container className="my-5">
      <UserModal show={show} setShow={setShow} user={user!} />
      {users ? (
        <CardColumns>
          {users.map((user: User, id: number) => (
            <Card key={id} style={{width: "15rem"}}>
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body className="text-center">
                <Card.Title>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Card.Title>
                <Card.Text>{user.login.username}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    setUser(user);
                    setShow(true);
                  }}
                >
                  See more detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      ) : (
        <div>No users to display.</div>
      )}
    </Container>
  );
}
