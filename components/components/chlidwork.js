import react ,{useState} from 'react';
import Link from 'next/link'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const WorkChild = props => {
    const [ modelState, setModelState ] = useState({
        modal: false
    });
    const toggleModel = ()=>{
        console.log(modelState.model)
        if(modelState.model === undefined){
            setModelState({
                model: !modelState.model
            })
        }
        setModelState({
            model: !modelState.model
        })
    };

    return(
            <div data-category={props.type.slug} className="reference-item col-lg-3 col-md-6">
                <Button color="success" onClick={toggleModel}>React Modal</Button>

                <div className="reference" style={{height:"186px"}}>
                    <a href="#aboutProject" className="modelcust"><img src={props.image} style={{height:'100%'}} alt="image" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">{props.title}</h3>
                            <p>{props.desc}</p>
                            <h1>{modelState.modal}</h1>
                          </div>
                        </div>
                    </a>
                </div>
            
                <Modal isOpen={modelState.modal}>

                    <ModalHeader>Show Project { props.title }</ModalHeader>
                    <ModalBody>
                      <img src={props.image} alt="image" className="img-fluid" />
                        <hr/>
                        <p>{props.desc}</p>
                        <p>{props.technology}</p>

                    </ModalBody>
                    <ModalFooter>
                        <a href={props.link} target="_blanck" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a>
                        <Button color="danger" onClick={toggleModel}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
}


export default WorkChild;
