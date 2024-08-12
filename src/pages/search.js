import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

const LandingSection = () => {
    return (
      <div class="about-container">
        <div class="jumbotron">
          <h1 class="display-4" id="header-title">
            Search Results
          </h1>
          {/* <p class="lead">
            TBJ Group was established in 1994, starting off as a trading house
            that stocked and distributed industrial sealing products and packing
            materials that served various market like:
          </p> */}
        </div>
      </div>
    );
  };

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query; // Extract the search query from the URL
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Perform the search across all pages (this example is very basic and might require improvement)
      const allPages = [
        { path: "/about", title: "About Us", content: "Information about us..." },
        { path: "/product", title: "Product", content: "Details of our products..." },
        { path: "/contact", title: "Contact Us", content: "How to contact us..." },
        // Add more pages here with their content
      ];

      const filteredResults = allPages.filter((page) =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.content.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults);
    }
  }, [query]);

  return (
    <Layout 
    title="Search Results"
    keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
         <LandingSection />
         <div class="my-5 container marketing">
      {/* <h1>Search Results</h1> */}
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.path} class='mb-4'>
            <h2><a href={result.path}>{result.title}</a></h2>
            <p>{result.content}</p>
            <hr class="featurette-divider my-8" />
          </div>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
    </Layout>
  );
};

export default SearchResults;
