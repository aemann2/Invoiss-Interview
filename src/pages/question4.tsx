import { Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

export default function Question3() {
	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go Question 3</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Home</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 4</Typography>
		<Typography>In src/pages/dataBase create a trigger/function which will calculate the age on insert or modify given the birthday</Typography>
		<hr></hr>

		{/* // Solution //  */}
		
		<pre style={{whiteSpace: 'pre-wrap' }}>{`So I know what this is asking, but I've never created a function / trigger in SQL and cannot seem to get the syntax right. The closest I can get is pseudocode:

PGSQL has an age() function that calculates age based on a date. That function can be used within another function and should look something along the lines of this:

	CREATE FUNCTION calculate_age(birthday date) RETURNS integer AS $$
		SELECT EXTRACT(YEAR FROM age(cast(birthday as date))) FROM something;
		$$ LANGUAGE SQL;

And the trigger should look something like this:

CREATE TRIGGER update_age
	BEFORE UPDATE OR INSERT OF birthday ON something
	EXECUTE PROCEDURE calculate_age(birthday)

And when this query is performed, the person's age should get added to the 'age' column of the table: 

INSERT INTO something(id, name, email, phone, birthday) values('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'adam', 'adam@test.com', '555-555-5555', '1-01-1950');

I'd estimate I'm about 75% of the way to the solution, but I don't know enough SQL syntax to get the function and trigger to work propery.

`}
		</pre>
	</Container>;
}
