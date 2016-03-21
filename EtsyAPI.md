
How do I make API requests?
-----------------------------
Use the http GET method.

Similarly to previous APIs we have worked with, a request requires a URL. The Etsy API's base URL is `https://openapi.etsy.com/v2`

and is supplemented with other commands to include in the request. You can specify store or user name, for example. Other optional parameters need to be prepended with a question mark. Finally, you need to add your API key to every request URL.

Requests must use HTTPS. Otherwise, requests made with HTTP will result in a 400 error.


What is the base URL for all requests?
--------------------------------------
 `https://openapi.etsy.com/v2`

Are there any headers or query parameters required?
--------------------------------------
`user_id` is required, as is your API key which was given to you on registering for the Etsy API.

What kind of response should I expect?
--------------------------------------
You should expect a JSON-formatted response, containing the results of the search parameters that were included in the request URL.

An example of the JSON format:

`{
     "count":integer,
     "results": [
         { result object }
     ],
     "params": { parameters },
     "type":result type
}`


How does the API handle authentication?
--------------------------------------
OAuth 1.0 is used for access to an Etsy member's private account data. The OAuth approach is as follows:

An app using the Etsy API requests temporary credentials ("request token"). The app is directed to a page on Etsy. Request token is approved and the app is linked to the member's account.

The temporary credentials are then exchanged for permanent credentials ("access token"). Now the app has (limited) access to information in a user's account.

Do I need to authenticate? with user credentials?
--------------------------------------

You need to authenticate with token credentials. Token credentials (used by OAuth) don't expire, and can be used for each authenticated request.


What can I do with an unauthenticated request?
--------------------------------------
Looks like Etsy requires authentication. They give one example of an unauthenticated request, as follows:
`GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}`

How can I authenticate my request? (what methods)
--------------------------------------
You need to include your API key in your request URL.

What Resource in the API represents...
--------------------------------------

* an individual product?

  listing

* a group or collection of products?



* images associated with a product?



* sizes and colors for a product?

  color

What actions and endpoints exist for each of these Resources?
--------------------------------------


What parameters do each endpoint require or accept?
--------------------------------------


What fields are returned for each Resource, specifically:
--------------------------------------

* an individual product?


* a group or collection of products?



What additional fields can be requested for each?
--------------------------------------
