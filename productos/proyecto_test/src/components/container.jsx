import React from 'react'

export default function container() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                    <Card.Title>Registrar Productos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                <Card.Title>Listar Producto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                    <Card.Title>Buscar Producto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="barcode.png" />
                <Card.Body>
                    <Card.Title>Actualizar Producto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
