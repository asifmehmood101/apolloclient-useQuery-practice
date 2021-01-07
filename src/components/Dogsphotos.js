import React from 'react';
import { gql, NetworkStatus, useQuery } from '@apollo/client';

//Caching query results
//Whenever Apollo Client fetches query results from your server,
//it automatically caches those results locally.
// /This makes subsequent executions of the same query extremely fast.

//Updating cached query results
/*
 you want to make sure that cached data is up to date with your server.
  Apollo Client supports two strategies for this: 
  polling and refetching.
*/

//polling
/*
Polling provides near-real-time synchronization with your server by causing 
a query to execute periodically at a specified interval.
*/

//Refetching

/*
Refetching enables you to refresh query results in response to a particular user action,
*/

//Inspecting loading states
/*
its allow user to watch refetching loading state
*/

//Setting a fetch policy
/*
By default apollo client check chache-first
you can change fetch policy with different option policies
suported fetch policies
*/

//define query
const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
function Dogsphotos({ breed }) {
  const { loading, data, error, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
      nextFetchPolicy: 'network-only',
    },
  );
  //conditional rendering
  if (networkStatus === NetworkStatus.refetch) return 'Refteching...';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (data)
    return (
      <div>
        <div>
          <img
            src={data.dog.displayImage}
            alt=''
            style={{ height: 100, width: 100 }}
          />
        </div>
        <div>
          <button onClick={() => refetch()}>Refresh</button>
        </div>
      </div>
    );
}

export default Dogsphotos;
