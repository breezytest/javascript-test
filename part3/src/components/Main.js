import React, {Component} from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from 'react-bootstrap';
import JwPagination from 'jw-react-pagination';

import * as usersAction from 'src/redux/actions/users';
import UsersTable from "src/components/UsersTable";
import { flattenArray, removeEmptyObject} from "src/utils/utils";

const customLabels = {
    first: '',
    last: '',
    previous: 'prev',
    next: 'next'
};

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            pageOfItems: [],
            loadPageOnce:false
        };
    }

    componentDidMount(){
        this.props.getUsers();
    }

    componentDidUpdate(prevProps){
        if(prevProps.users !== this.props.users && !this.state.loadPageOnce){
            this.setState({
                users:removeEmptyObject(flattenArray(this.props.users)),
                loadPageOnce:true
            });
        }
    }

    onChangePage = (pageOfItems) => this.setState({ pageOfItems });

    render(){
        //console.log("users ", this.removeEmptyObject(this.flattenArray(this.props.users)));
        return(
            <section id="main">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Table hover className="table_users">
                            <thead>
                                <tr>
                                    <th className="table_users__head_id">ID</th>
                                    <th className="table_users__head_name">Name</th>
                                    <th className="table_users__head_web">Website</th>
                                    <th className="table_users__head_loc">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.pageOfItems.map((value, index) => (
                                    <UsersTable key={index} userId={value.id} {...value}/>
                                ))
                            }
                            </tbody>
                            </Table>
                            <div className="pagination_wrapper">
                                <JwPagination 
                                    disableDefaultStyles={true} 
                                    pageSize={5}
                                    items={this.state.users} 
                                    onChangePage={this.onChangePage} 
                                    labels={customLabels}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
	return {
        users: state.users
	};
}; 

export default connect(mapStateToProps, usersAction)(Main);
