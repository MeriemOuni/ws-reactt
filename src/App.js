import React from "react";
import "./App.css";
import {
	Button,
	Card,
	Carousel,
	Container,
	Form,
	Nav,
	Navbar,
} from "react-bootstrap";

function App() {
	return (
		<div className='App'>
			{/* Bar de navigation */}
			<Navbar bg='primary' data-bs-theme='dark' style={{ color: "black" }}>
				<Container>
					<Navbar.Brand href='#home'>Santorini</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Rooms</Nav.Link>
						<Nav.Link href='#pricing'>Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			{/* caroussel */}
			<Carousel data-bs-theme='dark'>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://images.unsplash.com/photo-1716573120993-8f3719fcd486?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Second slide'
					/>
					<Carousel.Caption>
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://images.unsplash.com/photo-1696519669474-3001c0e2b548?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Third slide'
					/>
					<Carousel.Caption>
						<h5>Third slide label</h5>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* intriduction */}
			<div className='intro'>
				<h1>SANTORINI</h1>
				<p>
					Une incroyable « capsule temporelle » vient d'être mise au jour sur le
					littoral de la Turquie, tout droit venue de l'une des catastrophes
					volcaniques les plus terribles de notre histoire. À l'intérieur ? De
					nouvelles preuves de cet événement cataclysmique et peut-être même les
					tout premiers restes humains de l'une des dizaines de milliers de
					victimes.
				</p>
			</div>
			{/* Room */}
			<h1>ROOMS</h1>
			<div className='cards'>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1716573120993-8f3719fcd486?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1696519669474-3001c0e2b548?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			{/* contact */}
			<h1>Contact</h1>
			<Form className='contact'>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			<footer className='footer'>
				<p>Copy right © 2024 </p>
			</footer>
		</div>
	);
}

export default App;
