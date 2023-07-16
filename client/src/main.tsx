import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.scss'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
