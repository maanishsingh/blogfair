import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Row } from "reactstrap";
import { doLogin } from "../auth";
import Base from "../components/Base"
import { login } from "../services/user_service";

const Login=()=>{

    let navigate = useNavigate()

    const [loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
    })

    const resetLoginDetail=()=>{
        setLoginDetail({
            username:'',
            password:''
        })
    }

    const updateLoginDetail=(event,field)=>{
        setLoginDetail({
            ...loginDetail,
            [field]: event.target.value
        })
    }

    const submitLoginForm=(event)=>{

        if(loginDetail.username.trim()=="" || loginDetail.password.trim()==""){
            toast.error("username and password is required")
            return
        }

        login(loginDetail).then((response)=>{
            toast.success('login successfully')
            // console.log(response);
            // console.log("login sucessfull")

            doLogin(response,()=>{
                
                navigate("/user/userdashboard")
                // window.location.href="/user/userdashboard"          
            })

        }).catch((error)=>{
            toast.error(error.response.data?.message)
            console.log(error)

            console.log("error occured")
        })
    }

    return(
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size:6,offset:3}}>
                        <Card color="dark" outline>
                            {/* {JSON.stringify(loginDetail)} */}
                            <CardHeader><h3>Login to Continue</h3></CardHeader>
                            <CardBody>
                                <FormGroup>
                                <Input type="email" id="email" placeholder="Enter Email"
                                onChange={(e)=>updateLoginDetail(e,'username')}
                                value={loginDetail.username}
                                ></Input>
                                </FormGroup>
                                <FormGroup>
                                <Input type="password" id="password" placeholder="Enter Password"
                                onChange={(e)=>updateLoginDetail(e,'password')}
                                value={loginDetail.password}
                                ></Input>
                                </FormGroup>
                                <Container className="text-center">
                                    <Button onClick={submitLoginForm} color="dark" outline>Login</Button>
                                    <Button onClick={resetLoginDetail} type="reset" className="ms-2" secondary outline>Reset</Button>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Login;