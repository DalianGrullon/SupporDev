import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectCard from './components/ProjectCard';
import CreateRequest from './components/CreateRequest'
import Login from './pages/Login';

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
  const height = {
    height: '80vh'
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* some provider */}
        <div className=''>
          <Header />
        <section className='grid grid-cols-12 grid-rows-6 items-center' style={height}>
          <Aside />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            {/* <Route
              path='/project/:id'
              element={<ProjectCard />}
            /> */}
            <Route
              path='/request'
              element={<CreateRequest />}
            />
            <Route
            path='/login'
            element={<Login/>}
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
