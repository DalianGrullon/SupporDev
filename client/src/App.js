import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectCard from './components/ProjectCard';
import CreateRequest from './components/CreateRequest'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* some provider */}
        <div className=''>
          <Header />
        <section className='flex h-1/2 items-center'>
          <Aside />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/project/:id'
              element={<ProjectCard />}
            />
            <Route
              path='/request'
              element={<CreateRequest />}
            />
          </Routes>
        </section>
          <Footer />
          </div>
        {/* /some provider */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
