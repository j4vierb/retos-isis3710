import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import 'bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <Container>
        <Row xs={1}>
          <Col>
            <App />
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  </>

)
