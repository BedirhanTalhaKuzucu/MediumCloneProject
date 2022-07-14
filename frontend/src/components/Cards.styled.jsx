import styled from "styled-components";
import Button from 'react-bootstrap/Button';



const CardComp = ({ className, blog }) => {
    return (
      <div className={className}>
        <div className=" row no-gutters mb-3">     
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title">{blog.creatorInfo.first_name} </p>
                    <p className="card-text card-content">{blog.title} </p>
                    <p className="card-text">
                        <small class="text-muted">{blog.publish_date} </small>
                        <small class="text-muted px-3"><Button variant="light" size="sm">Category</Button></small>
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <img src= {blog.image} className="card-img" alt="blogImg"   />
            </div>
        </div>
      </div>
    );
};

  
export const StyledCard = styled(CardComp)`
background: #f7f7f7;
`;