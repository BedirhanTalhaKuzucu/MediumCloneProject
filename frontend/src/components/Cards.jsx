import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Cards() {
  return (
    <Container  className="mt-5" >
        <div className="row no-gutters mb-3">     
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text card-content">Answering Your Questions About Getting Kids Vaccinated Against Covid</p>
                    <p className="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <small class="text-muted px-3"><Button variant="light" size="sm">Category</Button></small>
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <img src="https://miro.medium.com/fit/c/200/134/1*NLusIgWHSbielDNe2S9rbQ.jpeg" className="card-img" alt="blogImg"   />
            </div>
        </div>
        <div className="row no-gutters mb-3">     
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text card-content">Answering Your Questions About Getting Kids Vaccinated Against Covid</p>
                    <p className="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <small class="text-muted px-3"><Button variant="light" size="sm">Category</Button></small>
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <img src="https://miro.medium.com/fit/c/200/134/1*NLusIgWHSbielDNe2S9rbQ.jpeg" className="card-img" alt="blogImg"   />
            </div>
        </div>
        <div className="row no-gutters mb-3">     
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text card-content">Answering Your Questions About Getting Kids Vaccinated Against Covid</p>
                    <p className="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <small class="text-muted px-3"><Button variant="light" size="sm">Category</Button></small>
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <img src="https://miro.medium.com/fit/c/200/134/1*NLusIgWHSbielDNe2S9rbQ.jpeg" className="card-img" alt="blogImg"   />
            </div>
        </div>
        
    </Container>  
  )
}

export default Cards