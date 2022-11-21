import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import dummy from './description.json'
import ItemList from "./ItemBox";


const ShowItems = (/*{ handleFlow }*/) => {
    const Itemsarr = [];
    for (var key in dummy) {
        Itemsarr[key] = dummy[key];
        console.log(Itemsarr[key]);
    }

    return (
        <div className="Invenlayout"/*onClick={() => handleFlow(1)}*/>
            <Container>
                <Row>
                    {Itemsarr.map((it) => (
                        <Col xxs={6} xs={5} sm={5} md={4} lg={2}>
                            <ItemList key={it.TokenID} {...it} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}


export default ShowItems;