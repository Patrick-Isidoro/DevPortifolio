import React from 'react'

//Imports da lib react-materialize
import { Row, Col, Card } from 'react-materialize'

const Home = () => ( <
        Row >
        <
        Col m = { 3 }
        s = { 12 } > { /* <UserProfile /> */ } <
        /Col> <
        Col m = { 8 }
        s = { 12 } >
        <
        h5 className = 'subtitle' > About Me < /h5> <
        Card >
        <
        div >
        <
        p > < b > Lorem < /b> < /p >
        <
        p > "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis maiores ratione libero reprehenderit perspiciatis repellendus tenetur dicta dolorem! Deserunt quaerat harum repudiandae? Veritatis itaque necessitatibus asperiores accusantium voluptatibus voluptas voluptate!" < /p> <
        br / >
        <
        p > < b > Ipsum < /b></p >
        <
        p > "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis maiores ratione libero reprehenderit perspiciatis repellendus tenetur dicta dolorem! Deserunt quaerat harum repudiandae? Veritatis itaque necessitatibus asperiores accusantium voluptatibus voluptas voluptate!" < /p> < /
        div > < /
        Card >
        <
        h5 className = 'subtitle' > Experiences < /h5> {
        /* <Experience />
                <Experience /> */
    } <
    /Col> < /
Row >
)

export default Home