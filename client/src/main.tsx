import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import Layout from './shared/UI/Layout/Layout.tsx'
import './app/index.scss'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Layout>
                <App />
            </Layout>
        </BrowserRouter>
    </ApolloProvider>
)
