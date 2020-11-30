import React, {useContext, useState} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import {MyContext}  from './ContextProvider'
import './Amount.css'
const AddTransaction = ()=> {

    const {addTransaction} = useContext(MyContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [validationError, setValidationError] = useState(false)

    const addTrans = () =>
    {
        if(amount === '' || text === '') 
        {
            setValidationError(true)
        }
        else if(Number(amount) === 0){
            setValidationError(true)
        }
        else
        {
            const transaction = {
                id: Math.floor(Math.random() * 100) + 1,
                income : Number(amount) < 0 ? 0 : Number(amount),
                expense : Number(amount) > 0 ? 0 : Number(amount),
                text : text
            }
            addTransaction(transaction)
            setValidationError(false)
        }
        
    }
    return (
        <>
            {validationError && <Row style={{marginTop: '20px'}}><Col className="nopadding"></Col><Col className="nopadding"><div className="alert alert-danger">Empty Fields or Zero Amount</div></Col><Col className="nopadding"></Col></Row>}
            <Row style={{marginTop: '20px'}}>
                <Col className="nopadding"></Col>
                <Col className="nopadding">

                    <h2>Add Transaction</h2>
                </Col>
                <Col className="nopadding"></Col>
            </Row>
            <Row style={{marginTop: '20px', marginBottom: '25px'}}>
                <Col className="nopadding"></Col>
                <Col className="nopadding">
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Text
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="Text" onChange={(e) => setText(e.target.value)} placeholder="Enter Text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintext">
                            <Form.Label column sm="2">
                                Amount
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" onChange = {(e)=>setAmount(e.target.value)} placeholder="Amount" />
                            </Col>
                        </Form.Group>
                        <Form.Label as={Row} className="nopadding">
                                (Amount should be Positive for Income And Negative for Expenses)
                        </Form.Label>
                        <Button as={Row} type="submit" className="submitBtn btn btn-primary" onClick = {()=>addTrans()}>Add Transaction</Button>
                    </Form>
                </Col>
                <Col className="nopadding"></Col>
            </Row>
        </>
    );
  }
  
  export default AddTransaction;

