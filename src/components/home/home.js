//Import nativo da biblioteca
import React from 'react'

//Imports da lib react-materialize
import { Row, Col, Card } from 'react-materialize'

//Imports de arquivos locais
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png'
import company_avatar2 from '../../images/company2.png'

const Home = () => ( 
        <Row>
                <Col m = { 3 } s = { 12 } > 
                        <UserProfile />
                </Col> 
                <Col m = { 8 } s = { 12 } >
                                <h5 className = 'subtitle' > About Me </h5> 
                        <Card >
                        <div >
                                <p > < b > Lorem Ipsum </b> </p >
                                <p > "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis maiores ratione libero reprehenderit perspiciatis repellendus tenetur dicta dolorem! Deserunt quaerat harum repudiandae? Veritatis itaque necessitatibus asperiores accusantium voluptatibus voluptas voluptate!" </p>
                                <br/>
                                <p > < b > Lorem Ipsum </b></p >
                                <p > "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis maiores ratione libero reprehenderit perspiciatis repellendus tenetur dicta dolorem! Deserunt quaerat harum repudiandae? Veritatis itaque necessitatibus asperiores accusantium voluptatibus voluptas voluptate!" </p> 
                                </div >
                        </Card >
                        <h5 className = 'subtitle' > Experiences </h5> 
                        
                        {/* <Passando os parâmetros title, company, description e avatar para o component Experience />*/}
                        <Experience title='React Developer'
                                company='SounCloud'
                                description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis maiores ratione libero reprehenderit perspiciatis repellendus tenetur dicta dolorem!'
                                avatar={company_avatar}
                        />

                        <Experience title="React Developer"
                                company="Twitter"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                                avatar={company_avatar2}                    
                        /> 
                </Col> 
        </Row >
)

export default Home