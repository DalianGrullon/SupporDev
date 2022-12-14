import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectCard from "./components/ProjectCard";
import CreateRequest from "./components/CreateRequest";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import ProfilePage from "./components/ProfilePage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const height = {
    height: "80vh",
  };
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-gradient-to-br from-slate-700 to-slate-300">
          <Header />
          <Aside />
          <section
            className="flex justify-center items-center min-h-fit"
            style={height}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:projectId" element={<ProjectCard />} />
              <Route path="/request" element={<CreateRequest />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
