import React, {useContext} from 'react'
import {CardGroup, Card, Row, Col} from 'react-bootstrap'
import {MyContext} from './ContextProvider'
import './Amount.css'
function Amount() {
    const {transactions} = useContext(MyContext)
    var total = 0, totalExpense = 0, totalIncome = 0, index;
    for(index in transactions)
    {
      totalIncome += Number(transactions[index].income)
      console.log(totalIncome)
      totalExpense += Number(transactions[index].expense)
      total += (Number(transactions[index].income) + Number(transactions[index].expense))
    }

    return (
        <>
            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 10, offset: 2 }} lg={{ span: 4, offset: 4 }} md={{span: 8, offset: 2 }} sm={{span: 8, offset: 2 }}>
                    <p className="h2">Your Amount : Rs {total}</p>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 10, offset: 2 }} lg={{ span: 4, offset: 4 }} md={{span: 8, offset: 2 }} sm={{span: 8, offset: 2 }} >
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Income</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rs. {totalIncome}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Expenses</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rs. {totalExpense * -1}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </>
    );
  }
  
  export default Amount;

