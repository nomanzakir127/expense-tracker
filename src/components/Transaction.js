import React, {useContext} from 'react'
import { Row, Col, ListGroup} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MyContext} from './ContextProvider'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './Amount.css'
function Transaction() {
    var {transactions, deleteTransaction} = useContext(MyContext)

    const deleteTrans = (id) =>{
      deleteTransaction(id)
    }
    return (
        <>
            
            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 10, offset: 2 }} lg={{ span: 4, offset: 4 }} md={{span: 8, offset: 2 }} sm={{span: 8, offset: 2 }}>
                    <h2>History</h2>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 10, offset: 2 }} lg={{ span: 4, offset: 4 }} md={{span: 8, offset: 2 }} sm={{span: 8, offset: 2 }}>
                    <ListGroup>
                        {transactions.length > 0 && transactions.map((item) => {
                            return <ListGroup.Item className={item.income ? 'vla': 'vle'} key={item.id}><Row><Col><h6>{item.text}</h6></Col><Col><h6>{item.income ? item.income: (item.expense * -1)}</h6></Col><Col><FontAwesomeIcon icon={faTrash} onClick={(e) => deleteTrans(item.id)} style={{float:'right'}}/></Col></Row></ListGroup.Item>
                        })} 
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
  }
  
  export default Transaction;


