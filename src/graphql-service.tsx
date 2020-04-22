import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const service = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: ''
	})
});

export default service;
