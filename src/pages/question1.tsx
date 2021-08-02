import { Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography, Grid, Button, TextField, Checkbox, InputLabel, Paper } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { styled } from '@material-ui/core/styles';

export default function Question1() {

	const formik = useFormik({
		initialValues: {
			name: '',
			date: '',
			active: '',
			age: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Back to Home</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>

		<Typography variant='h5'>Question 1</Typography>
		<Typography>Design a form with Formik and Material UI</Typography>
		<Typography>Contains the following items: </Typography>
		<List>
			<ListItem>
				<ListItemText>Name</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Date (datetime)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Active (boolean switch)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Age (select from 1 to 70)</ListItemText>
			</ListItem>
		</List>

		{/* // Solution //  */}

		<StyledPaper variant="outlined">
			<div>
				<h1>Invoiss Form</h1>
					<form onSubmit={formik.handleSubmit}>
						<StyledLabel htmlFor="name">Name</StyledLabel>
						<StyledTextField 
							id="name" 
							name="name" 
							placeholder="Adam Mann" 
							value={formik.values.name} 
							onChange={formik.handleChange}
						/>

						<StyledLabel htmlFor="date">Date</StyledLabel>
						<StyledTextField 
							type='datetime-local' 
							id="date" name="date" 
							value={formik.values.date} 
							onChange={formik.handleChange}
						/>

						<StyledLabel htmlFor='active'>
							<Checkbox 
								value={formik.values.active} 
								id='active' name='active' 
								inputProps={{ 'aria-label': 'Active' }} onChange={formik.handleChange}
							/>
							Active
						</StyledLabel>

						<StyledLabel htmlFor="age">Age</StyledLabel>
						<StyledTextField 
							id="age" 
							type="number" 
							value={formik.values.age} 
							InputLabelProps={{ shrink: true, }} 
							InputProps={{ inputProps: { min: 1, max: 70 } }} 
							onChange={formik.handleChange}
						/>
						<Button 
							type="submit" 
							variant='contained' 
							fullWidth color='primary'
						>
							Submit
						</Button>
					</form>
			</div>
		</StyledPaper>
	</Container>;
}


const StyledPaper = styled(Paper)({
	display: 'flex',
	margin: '2rem auto',
	padding: '1rem 0',
	flexDirection: 'column',
	maxWidth: '35rem',
	minWidth: '25rem',
	justifyContent: 'center',
	alignItems: 'center',
});

const StyledLabel = styled(InputLabel)({
	marginBottom: '1rem'
});

const StyledTextField = styled(TextField)({
	marginBottom: '1rem',
	borderColor: 'yellow'
});