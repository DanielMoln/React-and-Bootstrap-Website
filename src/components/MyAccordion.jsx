import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {v4} from 'uuid'

class MyAccordion extends Component {
    state = { 
        areaNames: []
     }

    constructor(props) {
        super(props)
        this.state.areaNames = this.props.areas;
    }

    render() { 
        return this.props.data &&  (
                <Accordion defaultActiveKey="0">
                    {
                        Array.from(this.props.data).map(item => {
                            return <Accordion.Item key={v4()} eventKey="0">
                                    <Accordion.Header>{item.split(" ")[0]}</Accordion.Header>
                                    <Accordion.Body>
                                        {
                                            item
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                        })
                    }
                </Accordion>
            );
    }
}
 
export default MyAccordion;