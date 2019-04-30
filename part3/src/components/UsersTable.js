import React, {Component} from "react";
import { connect } from "react-redux";
import { FaPen, FaTimes } from "react-icons/fa";
import { Row, Col, Form } from 'react-bootstrap';
import * as usersAction from 'src/redux/actions/users';
import { flattenArray, removeEmptyObject, ifKeyCode} from "src/utils/utils";

class UsersTable extends Component{

    constructor(props) {
        super(props);
    }

    editStatus = (webOrLoc, userId, status) => {
        let newItems = [];
        this.props.users && 
            removeEmptyObject(flattenArray(this.props.users)).map((value) => {
                if(userId === value.id){
                    if(webOrLoc === "web"){
                        value.webEditStatus = status;
                    }
                    if(webOrLoc === "loc"){
                        value.locationEditStatus = status
                    }
                }
                newItems.push(value);
            })
        this.props.webOrLocUserStatus(newItems);
    }

    onChangeWeb = (event, userId) => {
        let newItems = [];
        this.props.users && 
            removeEmptyObject(flattenArray(this.props.users)).map((value) => {
                if(userId === value.id){
                    value.tempWebVal = event.target.value;
                }
                newItems.push(value);
            })
        this.props.onChangeWeb(newItems);
    }

    onChangeLoc = (latOrLng, userId, event) => {
        let newItems = [];
        this.props.users && 
            removeEmptyObject(flattenArray(this.props.users)).map((value) => {
                if(userId === value.id){
                    if(latOrLng === "lat"){
                        value.tempLatVal = event.target.value;
                    }
                    if(latOrLng === "lng"){
                        value.tempLngVal = event.target.value;
                    }
                }
                newItems.push(value);
            })
        this.props.onChangeLoc(newItems);
    }

    onSubmitWeb = (event, userId, webValue) => {
        if(ifKeyCode(event) === 13){
            let newItems = [];
            this.props.users && 
                removeEmptyObject(flattenArray(this.props.users)).map((value) => {
                    if(userId === value.id){
                       value.website = webValue;
                       value.webEditStatus = false;
                       value.tempWebVal = "";
                    }
                    newItems.push(value);
                })
            this.props.onSubmitWeb(newItems);
        }
    }

    onSubmitLoc = (latOrLng, userId, event, latOrLngVal) => {
        if(ifKeyCode(event) === 13){
            let newItems = [];
            this.props.users && 
                removeEmptyObject(flattenArray(this.props.users)).map((value) => {
                    if(userId === value.id){
                       if(latOrLng === "lat"){
                            value.address.geo.lat = latOrLngVal;
                            value.locationEditStatus = false;
                            value.tempLatVal = "";
                       }
                       if(latOrLng === "lng"){
                            value.address.geo.lng = latOrLngVal;
                            value.locationEditStatus = false;
                            value.tempLngVal = "";
                        }
                    }
                    newItems.push(value);
                })
            this.props.onSubmitLoc(newItems);
        }
    }

    render(){
        const {address, company, email, id, locationEditStatus, name, phone, username, webEditStatus, website} = this.props;  
        const {city, geo, street, suite, zipcode} = address;
        const {lat, lng} = geo;
        return(
            <tr>
                <td className="table_users__id">{id}</td>
                <td className="table_users__name">
                    <div className="long_and_truncated">
                        <p>{name}</p>
                    </div>
                </td>
                <td className="clearfix table_users__web">
                    {
                        !webEditStatus && (
                            <React.Fragment>
                                <FaPen 
                                    className="pen float-right"
                                    onClick={ () => this.editStatus("web", this.props.userId, true)}
                                />
                                <div className="long_and_truncated">
                                    <p>{website}</p>
                                </div>
                            </React.Fragment>
                        )
                    }
                    {
                        webEditStatus && (
                            <Row className="clearfix">
                                <Col md={10} sm={10} xs={12}>
                                    <Form.Control 
                                        className="webForm"
                                        type="text" 
                                        placeholder="Enter website name"
                                        value={this.props.tempWebVal}
                                        onChange={(event) => this.onChangeWeb(event, this.props.userId)}
                                        onKeyPress={(event) => this.onSubmitWeb(event, this.props.userId, this.props.tempWebVal)}
                                    />
                                </Col>
                                <Col md={2} sm={2} xs={12}>
                                    <FaTimes 
                                        className="pen float-right"
                                        onClick={() => this.editStatus("web",this.props.userId, false)}
                                    />
                                </Col>
                            </Row>
                        ) 
                    }
                </td>
                <td className="clearfix table_users__loc">
                    {
                        !locationEditStatus && (
                            <React.Fragment>
                                <FaPen 
                                    className="pen float-right"
                                    onClick={() => this.editStatus("loc", this.props.userId, true)}
                                />
                                <div className="long_and_truncated">
                                    <p>{lat} ,{lng}</p>
                                </div>
                            </React.Fragment>
                        )
                    }
                    {
                        locationEditStatus && (
                            <Row>
                                <Col md={5} xs={9}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter latitude"
                                        value={this.props.tempLatVal}
                                        onChange={
                                            (event) => this.onChangeLoc("lat", this.props.userId, event)
                                        }
                                        onKeyPress={
                                            (event) => this.onSubmitLoc("lat", this.props.userId, event, this.props.tempLatVal)
                                        }
                                    />
                                </Col>
                                <Col md={5} xs={9}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter longtitude" 
                                        value={this.props.tempLngVal}
                                        onChange={(event) => this.onChangeLoc("lng", this.props.userId, event)}
                                        onKeyPress={
                                            (event) => this.onSubmitLoc("lng", this.props.userId, event,
                                            this.props.tempLngVal)
                                        }
                                    />
                                </Col>
                                <Col md={2} xs={3}>
                                    <FaTimes 
                                        className="pen float-right"
                                        onClick={() => this.editStatus("loc", this.props.userId, false)}
                                    />
                                </Col>
                            </Row>
                        )
                    }
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state, props) => {
	return {
        users: state.users
	};
}; 

export default connect(mapStateToProps, usersAction)(UsersTable);