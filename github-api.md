##How does the API handle authentication?
"All API access is over HTTPS, and accessed from the https://api.github.com. All data is sent and received as JSON."

##Do I need to authenticate?
If you want to make more calls to the API, then yes. "Read more about unauthenticated rate limiting."

##What can I do with an unauthenticated request?


##How can I authenticate my request? (3 ways)

"There are three ways to authenticate through GitHub API v3. Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users."

"Basic Authentication

curl -u "username" https://api.github.com
OAuth2 Token (sent in a header)

curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
OAuth2 Token (sent as a parameter)

curl https://api.github.com/?access_token=OAUTH-TOKEN
Read more about OAuth2. Note that OAuth2 tokens can be acquired programmatically, for applications that are not websites.

OAuth2 Key/Secret

curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'"

##How do I ask the API for...
  ##The profile information for a specific user?

  ##The repository listing for a specific user?

  The recent, public activity for a specific user?

##Is there a limit to the number of requests I can make?
yes
##Is there a way of extending that limit?
yes, authenticate
"For requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour. Unauthenticated requests are associated with your IP address, and not the user making requests. Note that the Search API has custom rate limit rules."

##What happens when I hit the limit?
"Once you go over the rate limit you will receive an error response:"
403 Forbidden

##What if there is a lot of data returned?
"Requests that return multiple items will be paginated to 30 items by default. You can specify further pages with the ?page parameter. For some resources, you can also set a custom page size up to 100 with the ?per_page parameter. Note that for technical reasons not all endpoints respect the ?per_page parameter, see events for example."

##How can I ask for more (or less) data from a request?

"For performance reasons, the summary representation excludes those attributes. To obtain those attributes, fetch the "detailed" representation."

"Summary Representations

When you fetch a list of resources, the response includes a subset of the attributes for that resource. This is the "summary" representation of the resource. (Some attributes are computationally expensive for the API to provide. For performance reasons, the summary representation excludes those attributes. To obtain those attributes, fetch the "detailed" representation.)

Example: When you get a list of repositories, you get the summary representation of each repository. Here, we fetch the list of repositories owned by the octokit organization:"

##How do I know that there is more data available?

##What are the endpoints for fetching...
  ##the profile data for a user?
  ##the organizations a user belongs to?
  ##the repositories a user has created?
  ##a filtered list of repositories?
  ##a sorted list of repositories?
  ##public events for a user?

##When fetching public events for a user...
  ##How many results are returned by default?
  ##What limitations exist on fetching more results?
  ##What is the basic structure of the results?
  ##What fields are included in each result?
  ##What are the data types for each field?
  ##What are some of the different values for the type field?
