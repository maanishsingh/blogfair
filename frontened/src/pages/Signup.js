import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base"
import { signUp } from "../services/user_service";

const Signup=()=>{
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        about:''
    })

    const [error,setError] = useState({
        errors:{},
        isError:false
    })
    const resetData=()=>{
        setData({
            name:'',
            email:'',
            password:'',
            about:''
        })
    }
    // useEffect(()=>{console.log(data)},[data])
    const handleChanged=(key,event)=>{
        setData({
            ...data,[key]:event.target.value
        })
    }

    const submitForm=(event)=>{
        event.preventDefault()

        if(error.isError){
           // toast.error("Invalid form data, please correct it first.")
            return
        }

       // console.log("submited form")
        signUp(data).then((response)=>{
            // console.log(response)
            // console.log("success")
            toast.success("user registered successfully !!!");
            resetData()
        }).catch((error)=>{
            // console.log(error)
            // console.log("error log")
            setError({
                errors:error,
                isError:true})
            toast.error("Something went wrong , Please try again")
            
        })

    }

    return(
        <Base>
            <Container>
                <Row className="mt-3">
                    <Col sm={{size:6,offset:3}}>
                        <Card color="dark"  outline>
                            <CardHeader><h3>Signup to continue</h3></CardHeader>
                            <CardBody>
                                {/* {JSON.stringify(data)} */}
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input type="text" id="name"  
                                        onChange={(e)=>handleChanged('name',e)}
                                        value={data.name}
                                        invalid={error?.errors?.response?.data?.name?true:false}
                                        ></Input>
                                        <FormFeedback>
                                    {error?.errors?.response?.data?.name}
                                    </FormFeedback>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Input type="text" id="email" placeholder="Enter email"
                                        onChange={(e)=>handleChanged('email',e)}
                                        value={data.email}
                                        invalid={error?.errors?.response?.data?.email?true:false}
                                        ></Input>
                                        <FormFeedback>
                                    {error?.errors?.response?.data?.email}
                                    </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" id="password" placeholder="Enter password"
                                        onChange={(e)=>handleChanged('password',e)}
                                        value={data.password}
                                        invalid={error?.errors?.response?.data?.password}
                                        ></Input>
                                        <FormFeedback>
                                    {error?.errors?.response?.data?.password}
                                    </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="textarea" id="about" placeholder="About" 
                                        style={{height:"250px"}}
                                        onChange={(e)=>handleChanged('about',e)}
                                        value={data.about}
                                        ></Input>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button onClick={submitForm}  color="dark" outline>Signup</Button>
                                        <Button onClick={resetData} type="reset" className="ms-2" secondary outline>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Signup;