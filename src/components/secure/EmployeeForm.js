import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import EmployeeApi from '../../serviceCalls/EmployeeApi';
class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    validSubmit = (event, values) => {
        new EmployeeApi().saveEmployee(this.successCall, this.errorCall, values);
    }

    errorCall = (error) => {
        console.log(error)
    }

    successCall (resp) {
        console.log("I am successcall ", resp)
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