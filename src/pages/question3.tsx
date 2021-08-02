import { Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

export default function Question3() {
	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question4' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 4</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 3</Typography>
		<Typography>Convert the providers in src/pages/_app.tsx to use the providerComposer provided in src/providerComposer.tsx</Typography>
		<hr></hr>

		{/* // Solution //  */}

		<pre>{`
// See _app.tsx:

<ProviderComposer
providers={[
provider(StyledEngineProvider, { injectFirst: true }),
provider(CacheProvider, { value: cache }),
provider(ThemeProvider, { theme: theme })]}>
	<CssBaseline/>
	<Component {...pageProps}/>
</ProviderComposer>`}</pre>
	</Container>;
}