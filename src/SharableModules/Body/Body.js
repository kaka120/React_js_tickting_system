import React, { Fragment } from 'react'
import  Header  from '../Header/Header';
import  Footer  from '../Footer/Footer';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import  HomePage  from '../../modules/HomePage/HomePage';
import  CreateRequest  from '../../modules/CreateRequest/CreateRequest';
import { PrivateRoute } from '../../Components/PrivateRoute';
import './Body.scss'


function Body(props) {
    console.log(props.match)
    return (
        <Fragment>
             <Header props={props.match}/>
                <Switch>
                    <PrivateRoute exact path={`${props.match.path}/`} component={HomePage}/>
                    <PrivateRoute exact path={`${props.match.path}/homepage`} component={HomePage}/>
                    <PrivateRoute exact path={`${props.match.path}/createrequest`} component={CreateRequest}/>
                    <Redirect from="*" to={`${props.match.path}/homepage`} /> 
                </Switch>   
             <Footer/>

        </Fragment>
    )
}

export default Body
