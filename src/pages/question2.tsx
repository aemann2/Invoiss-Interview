import { useState } from 'react';
import { Container, Grid, ListItemButton, ListItemText, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';

interface state {
	id: string
}

export default function Question2() {
	const [apiData, setApiData] = useState<state[] | []>([])

	const passData = async(input: any[]) => {
		setApiData([]);

		const res = await axios({
			method: 'post',
			url: '/api/hello',
			data: input
		});

		if (res.status === 400) {
			throw new Error('Error');
		} else {
			setApiData(res.data);
		}
	} 

	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/question1' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 1</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 3</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 2</Typography>
		<Typography>
			Create an api function in NextJS that takes an object with this type {'{id: string, name: test}'}[]
			and converts it to {'{id: name}'}
		</Typography>
		<Typography>
			Perform error handling so that any object without that shape will throw an error.
		</Typography>
		<Typography>
			Call the function from a button press
		</Typography>
		<Typography>
			You can use any library for this
		</Typography>

		{/* // Solution //  */}

		<Wrapper>
		{
			apiData.map((item,index) => 
					<p key={index}>id: {item.id}</p>
				)
			}
			</Wrapper>
		<Wrapper>
			<Button onClick={() => passData([
			{
				id: '123',
				name: 'test'
			}])} 
			variant='contained' color='primary'>Data without error</Button>
			<Button onClick={() => passData([
			{
				id: '123',
				name: 'test@test.com'
			}])} 
			variant='contained' color='secondary'>Data with error</Button>
		</Wrapper>
	</Container>;
}

const Wrapper = styled(Container)({
	marginTop: '2rem',
	display: 'flex',
	justifyContent: 'space-evenly'
});
