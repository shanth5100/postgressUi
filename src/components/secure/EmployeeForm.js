import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Alert, Row, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AvForm, AvField } from 'availity-reactstrap-validation';
class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    validSubmit = (event, values) => {
        console.log(values);
        axios.post("http://localhost:5006/invoice/employee", values)
        .then((resp)=>{
            console.log("Respo");
            console.log(resp, resp.data);
        })
        .catch((error)=>{
            this.errorHandling(error);
        });
    }

    errorHandling = (error) => {
        console.log(error)
    }
    render() {
        return (
            <Card>
                <CardBody>
                    <AvForm onValidSubmit={this.validSubmit}>
                        <AvField name="name" type="name" placeholder="name" />
                        <AvField name="email" type="email" placeholder="Email" />
                        <AvField name="department" placeholder="department" />
                        <AvField name="joinDate" placeholder="joinDate" />
                        <AvField name="emp_id" placeholder="emp_id" />
                        <AvField name="salary" placeholder="salary" />
                        <AvField name="organisation" placeholder="organisation" value="One24Apps" />
                        <Button color="success" >Edit</Button>
                        <Button color="secondary" type="button" >Cancel</Button>
                    </AvForm>
                </CardBody>
            </Card>
        );
    }
}

export default EmployeeForm;