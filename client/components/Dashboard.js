import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const dashboard = () => (
  <Query
    query={gql`
      {
        user {
          id
          email
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        if(data.user){
          return (
            <div>
              <p> you are successfully logged in.{`${data.user.email}`}</p>
            </div>
          );
        }else{
          return (
            <div>
              <p> you are successfully logged Out.</p>
            </div>
          );
        }
      
    }}
  </Query>
);

    

export default dashboard;
  