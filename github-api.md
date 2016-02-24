##How does the API handle authentication?

Requests requiring authentication return 404 Not Found errors, a security measure to prevent accidental leakage of private repos.

##Do I need to authenticate?
To make API requests, you don't have to authenticate. However, if you want to make more calls to the API, then yes, you do need to authenticate. Authenticated requests can make up to 5,000 requests per hour. For unauthenticated requests, the rate limit is up to 60 requests per hour.

##What can I do with an unauthenticated request?
You can make the same requests to the API, but far fewer in number. You can see your current rate limit status, AKA how many requests you have made that hour, and see how many you have left. This doesn't count as an API hit. A 304 response doesn't count against your rate limit.

##How can I authenticate my request? (3 ways)

Basic authentication is done using the following commands:

curl -u "username" https://api.github.com


... authentication via OAuth2 Token (sent in a header) uses:

curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com


... authentication by OAuth2 Token (sent as a parameter):

curl https://api.github.com/?access_token=OAUTH-TOKEN


##How do I ask the API for...
  ##The profile information for a specific user?
    GET /user
    (https://api.github.com/users/usernamehere)

    ...AKA
    GET /users/:username

  ##The repository listing for a specific user?
    GET /user/repos
    ...AKA
    GET /users/:username/repos

  ##The recent, public activity for a specific user?
    GET /events

##Is there a limit to the number of requests I can make?
Yes. Unauthenticated requests can be made at the rate limit of 60 requests per hour.

##Is there a way of extending that limit?
Yes, authenticate!
Requests that use Basic Authentication or OAuth, you can make up to 5,000 requests per hour. Requests are associated with your IP address, and are not tracked based on the user that is making requests.

##What happens when I hit the limit?
Exceeding this limit, you will receive an error response: 403 Forbidden.
You will be unable to make any more requests from the API, and any components of your site built with requests to the API will not load.

##What if there is a lot of data returned?
Requests consisting of multiple items will be paginated to 30 items by default. You can request further pages with the ?page parameter. Custom page sizes (up to 100) use the ?per_page parameter.

##How can I ask for more (or less) data from a request?

Some attributes are excluded from requests by default. These are summary representations. To access omitted attributes, fetch the "detailed" representation.

Summary representations are a subset of the attributes for that resource. These are returned because some attributes are computationally expensive for the API to furnish. For performance reasons, summary representations exclude "expensive" attributes.

Example: When you get a list of repositories, you get the summary representation of each repository. Here, we fetch the list of repositories owned by the octokit organization:"

##How do I know that there is more data available?
If you are expecting some attributes but are not receiving them, you have received a summary representation.

Root Endpoint
You can issue a GET request to the root endpoint to get all the endpoint categories that the API supports:
curl https://api.github.com
"Endpoint	Defines the address or connection point to a Web service. It is typically represented by a simple HTTP URL string."
##What are the endpoints for fetching...
  ##the profile data for a user?
    /users/:username

  ##the organizations a user belongs to?
    /user/orgs

  ##the repositories a user has created?
    /users/:username/repos

  ##a filtered list of repositories?


  ##a sorted list of repositories?

  ##public events for a user?
  /events


"Events support pagination, however the per_page option is unsupported. The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events."

##When fetching public events for a user...
  ##How many results are returned by default?
    "Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300)."

  ##What limitations exist on fetching more results?
    Your authentication or lack of authentication affects how many results you can receive per hour.

  ##What is the basic structure of the results?
    example:
    Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999

The JSON file is then listed to the user.

  ##What fields are included in each result?

  ##What are the data types for each field?

  ##What are some of the different values for the type field?
