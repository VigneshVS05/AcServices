import React, { Component } from 'react';
import "./Login.css";
import { Card, CardBody, CardGroup, Col, Container, Form,Input, InputGroup, Row } from 'reactstrap';  
import { Link } from 'react-router-dom';




class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            email: '',  
            password: '',
            validate: '',
           
       

           
          
            
              
        }  
  
        this.password = this.password.bind(this);  
        this.email = this.email.bind(this);  
        this.Login = this.Login.bind(this);  
    }  
  
    email(event) {  
       
        this.setState({ email: event.target.value })  
    }  
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    

   

    Login() {  
       // debugger;  
        
        fetch("https://localhost:7256/api/Welcome/Login", {  
            method:'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status === 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/Dashboard");  
            })  
        
    }  
   
    

validate(event){
        var UserEmail=document.getElementById("username").value;
        var password=document.getElementById("password").value;
    
        if(UserEmail==="Admin@gmail.com"&& password==="Admin@123")
        {
            alert("Welcome Admin");
            return false;
        }
        
        else
        {
            alert("Invalid email and password");      
        }
    }
  
   
    render() {  
  
        return (  
  <div>  
    

    <Container>  
        <Row className="center">  
            <Col md="9" lg="7" xl="6">  

                <CardGroup>  
                    <Card className="p2">  
                        <CardBody>  
                    <Form>  
                        
                            <div href="./Register" >  
                             <h1> Admin </h1>  
                        
                        </div>  
                        <br/>
                        <form className="Box" action="Login.js" >
                        <InputGroup className="mb-3">  

                            <Input className='a1' type="text" name="" id="username" onChange={this.email} placeholder="Enter Email" required /> 
                            
                        </InputGroup>  

                        <br/>
                        
                        <InputGroup className="mb-4">  

                        <Input name=""  id="password" placeholder="Enter Password"  type="password" className='a1'  onChange={this.password} required />  
                        </InputGroup>  
                        <br/>
                        <InputGroup className="mb-5">  

                            </InputGroup> 
                            <button id='Log' type="submit" name="" ><Link id='Log2' to="/Login" value="Login"   onClick={this.validate} >Login</Link></button>  
                        
                        </form>
                        
                    </Form>  
                        </CardBody>  
                    </Card>  
                </CardGroup>  
            </Col>  
        </Row>  
    </Container>  


</div>  
        );  
    }  
}  
  
export default Login;