import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import {StyledProfilImage} from '../Sidebar/Sidebar.styled'



const CardComp = ({ className, blog }) => {
    return (
      <div className={className}>
        <div className=" row no-gutters mb-3">     
            <div className="col-md-8">
                <div className="card-body">
                 
                    <p className="card-title">
                        < StyledProfilImage blogCard= {blog} />
                        { blog.creatorInfo.first_name} { blog.creatorInfo.last_name}
                    </p>
                    <p className="card-text card-content">{blog.title} </p>
                    <p className="card-text">
                        <small class="text-muted">{blog.publish_date.split('T')[0]} </small>
                        <small class="text-muted px-3">
                        {blog.tags ? 
                            blog.tags.map((tag)=> (
                                <Button variant="light" size="sm">  {tag.tag_name} </Button>
                                )) :
                                ""} 
                        </small>
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
`;