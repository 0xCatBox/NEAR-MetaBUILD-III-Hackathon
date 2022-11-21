import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import dummy from './description.json'
import MarketItemList from "./MarketItemBox";


const ShowMarketItems = (/*{ handleFlow }*/) => {
    const Itemsarr = [];
    for (var key in dummy) {
        Itemsarr[key] = dummy[key];
        console.log(Itemsarr[key]);
    }

    return (
        <div className="MarketInvenlayout"/*onClick={() => handleFlow(1)}*/>
            <Container>
                <Row>
                    {Itemsarr.map((it) => (
                        <Col xxs={6} xs={5} sm={5} md={4} lg={2}>
                            <MarketItemList key={it.TokenID} {...it} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}


export default ShowMarketItems;