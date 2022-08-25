import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
    return (
        <Card style={{ width: '18rem', border: '1px solid rgb(70, 69, 69)', backgroundColor: 'grey' }}>
            <Card.Body>
                <Card.Title>{user.title}</Card.Title>
                <Card.Text>
                    <h5>Name: </h5>{user.name}
                    <br />
                    <h5>Username: </h5> {user.username}
                    <br />
                    <h5>Email: </h5> {user.email}
                    <br />
                    <h5>Sreet: </h5> {user.address.street}
                    <br />
                    <h5>Suite: </h5>  {user.address.suite}
                    <br />
                    <h5>City: </h5> {user.address.city}
                    <br />
                    <h5>ZipCode: </h5>  {user.address.zipcode}
                    <br />
                    <h5>geo: </h5>  {user.address.geo.lat}
                    <br />
                    {user.address.geo.lng}
                    <br />
                    <h5>Phone: </h5>  {user.phone}
                    <br />
                    <h5>Website: </h5> {user.website}
                    <br />
                    <h5>Company name: </h5> {user.company.name}
                    <br />
                    <h6>Catch phrase: </h6> {user.company.catchPhrase}
                    <br />
                    <h6>bs: </h6>{user.company.bs}
                    <br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard