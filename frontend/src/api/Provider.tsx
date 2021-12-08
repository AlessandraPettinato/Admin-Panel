import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	HttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({ uri: "http://localhost:8080/graphql" });

const authLink = setContext(() => {
	const token = localStorage.getItem("jwtToken");
	return {
		headers: {
			Authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const Provider: React.FC<{}> = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
