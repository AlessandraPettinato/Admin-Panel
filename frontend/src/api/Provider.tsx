import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";

const link = createHttpLink({
	uri: "http://localhost:8080/graphql",
	credentials: "same-origin",
});

const client = new ApolloClient({
	uri: "http://localhost:8080/graphql",
	cache: new InMemoryCache(),
	link,
});

const Provider: React.FC<{}> = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
