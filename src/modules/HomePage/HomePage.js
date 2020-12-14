import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../Redux/Actions/user.actions';
import PaginationAdvanceSource from "../../SharableModules/DataTable/PaginationAdvanceSource"
import { MDBBadge } from "mdbreact";

import './HomePage.scss'

const HomePage = () => {
    const[q, setQ] = useState("")
   
    const tickets_set = useSelector(state =>state.ticketlist);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const tmp = tickets_set
    console.log("tickets")
    const data = tickets_set['tickets']
    const data_updated = []
        
    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    const extract_fields = () => {
      const columns = data && Object.keys(data[0]);
      console.log("iteration");
      data && data.map((data, index)=>{
          //console.log(data)
          let tmp_data={}
          for (let key in data) {
            if((key==='ticket_status')||(key==='ticket_priority')||(key==='ticket_action'))
            {  
              // Plz define the color of the Badge according to the its status
              tmp_data[key] =  <MDBBadge pill color="success">  {data[key]}  </MDBBadge>
            }else if(key==='ticket_creation_date'){
              tmp_data[key] =   data[key] 
            }else
            {
              tmp_data[key] =   data[key] 
            }
          }
          data_updated.push(tmp_data)
      })                  
      return {
        records: data_updated
      }
    }

    
    const eventHandlinga = (event) =>{
    }
   

    const columnsSet = () =>{
      return  [
        {
            key: "id1",
            text: "Id",
            className: "id1",
            align: "left",
            sortable: true,
        },
        {
            key: "id",
            text: "Service_No",
            className: "id",
            align: "left",
            sortable: true
        },
        {
            key: "userid",
            text: "userid",
            className: "userid",
            sortable: true
        },
        {
            key: "ticket_incident_type",
            text: "Incident_type",
            className: "ticket_incident_type",
            align: "left",
            sortable: true
        },
        {
            key: "ticket_catagory",
            text: "Catagory",
            className: "ticket_catagory",
            sortable: true,
            align: "left"
        },
        {
          key: "ticket_sub_catagory",
          text: "Sub_Catagory",
          className: "ticket_sub_catagory",
          sortable: true,
          align: "left"
        },
        {
          key: "ticket_status",
          text: "Status",
          className: "ticket_status",
          sortable: true,
          align: "left"
        },
        {
          key: "ticket_action",
          text: "Type",
          className: "ticket_action",
          sortable: true,
          align: "left"
        },
        {
          key: "ticket_priority",
          text: "Priority",
          className: "ticket_priority",
          sortable: true,
          align: "left"
        },
        {
          key: "ticket_creation_date",
          text: "Opening_Date",
          className: "ticket_creation_date",
          sortable: true,
          align: "left"
        },
        {
          key: "Closing_Date",
          text: "Closing_Date",
          className: "Closing_Date",
          sortable: true,
          align: "left"
        },
        {
            key: "userh",
            text: "userid",
            className: "userh",
            width: 100,
            align: "left",
            sortable: false,
            cell: record => { 
                console.log("record")
                console.log(record.ticket_chat_group_id)
                return (
                    <React.Fragment>
                       <button
                            className="btn btn-success btn-sm"
                            onClick={() => viewRecord(record.ticket_chat_group_id)}
                            style={{marginRight: '5px'}}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => editRecord(record.ticket_chat_group_id)}
                            style={{marginRight: '5px'}}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => deleteRecord(record.ticket_chat_group_id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </React.Fragment>
                );
            }
        }
    ]
    }

    const configSet = () =>{
      return{
        page_size: 5,
        length_menu: [ 5 ,10, 20, 50 ],
        button: {
            excel: true,
            print: true,
            extra: true,
        }
    }
    }

    const extraButtonsSet = () =>{
      return[
        {
            className:"btn btn-primary buttons-pdf",
            title:"Export TEst1",
            children:[
                <span>
                <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                </span>
            ],
            onClick:(event)=>{
                console.log(event);
            },
        },
        {
            className:"btn btn-primary buttons-pdf",
            title:"Export TEst",
            children:[
                <span>
                <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                </span>
            ],
            onClick:(event)=>{
                console.log(event);
            },
            onDoubleClick:(event)=>{
                console.log("doubleClick")
            }
        },
    ]

    }


  const viewRecord = (ticket_chat_group_id) =>{
    alert("View Record" + ticket_chat_group_id);
  }

  const editRecord = (ticket_chat_group_id) =>{
    alert("Edit Record"+ ticket_chat_group_id);
  }

  const deleteRecord = (ticket_chat_group_id) =>{
    alert("Delete Record"+ ticket_chat_group_id);
  }

    return (
            <React.Fragment>
                <React.Fragment>
                    {/* <table>
                        <tr>
                            <td><input type="text" value={q} onChange={(e) => setQ(e.target.value) }/></td>
                        </tr>
                    </table> */}
                </React.Fragment>
                   <PaginationAdvanceSource dataSet={extract_fields()} columnsSet={columnsSet()} extraButtonsSet={extraButtonsSet()} configSet={configSet()}/>
            </React.Fragment>
        );
  }

  export default HomePage;