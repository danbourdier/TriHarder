# README
![alt text](https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/logo_and_txt.png "Logo Title Text 1")

___


## TECHNOLOGIES

#### Backend          
1. `Postgresql`
2. `Rails`
3. `Active Record`
4. `Active Migration`
5. `Action Controller`
3. `Ruby`
4. `Ajax`
5. `JBuilder`

### Frontend
* `React-Redux`
* `JavaScript` (ECMAScript anyone?)
* `HTML`
* `CSS3`


### Hosting
* `Heroku`


---



## Table Of Contents

* [Live Site](https://tri-harder.herokuapp.com/)
* [Intro](https://github.com/danbourdier/TriHarder/#Intro)
* [Technologies](https://github.com/danbourdier/TriHarder/#Technologies)
* [Legal](https://github.com/danbourdier/TriHarder/#Legal)
* [Links](https://github.com/danbourdier/TriHarder/#Links)
* [Future Directions](https://github.com/danbourdier/TriHarder/#Intro)


---


## OVERVIEW


Welcome to Tri'Harder! A place where friends and Triathlon enthusiasts can join to collaborate on their unfettered determination in reaching their Triathlon goals!


Tri'Harder is a MapMyRun clone that sets to emulate all the greatest features of the latter site with emphasis on our painfully endeavoring Tri'ers! Location rich features such as Google Api and logging Tri'training attempts are center of this awesome app!


---


## LINKS

Live Site Link


[Live Site](https://tri-harder.herokuapp.com/)


As inspired by: Website Link (Received a complete facelift as of Late July)

https://www.mapmyrun.com/


---


## Features


---

### User Authentification (BCrypt!)

* Users can signup or just tour the site as a demo user!
* Live app prioritizes `Bcrypt` to secure new accounts and existing ones with the most comprehensive password algorithm that not only hashes an entry but salts it (randomizes entries with deterministic computation and adds additional randomized characters to promote resistance to rainbow table attacks). Upon a user's attempt to login, the app takes advantage of the deterministic output to match the user's entry to the randomized password generated on account signup.


<p align="center">
  <img width="460" height="300" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/auth.gif">
</p>

<p>
  <img style="float: left" width="450" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/bcrypt1.png">

  <img style="float: right" width="450" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/bcrypt2.png">
</p>


<br>

<br>

<br>



### Google Maps API (Geocoding API, Directions Service, Directions Display), Frontend

*Mapping*
<p align="center">
  <img width="800" height="450" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/mapping.gif">
</p>
<br>
<br>

*Show Page*

<p align="center">
  <img width="800" height="450" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/handsomest_shot.png">
</p>

* `Google Maps API` is a powerful technology that allows a huge array of features that enable the user the ability to not only map routes. But also, the following;

  1. `Geocoding API,` by providing a zip code, city name, country name, and more we can pan the map to the specified location. What happens in the below code is we 
    make a call to the API and manipulate the response (contingent of a code 200) by setting our map's center prop to the returned object coordinates. As noted by keying in to [`geometry`][`location`].
    A very straight forward tool and intuitive to use!

  <p>
    <img style="float: left" width="410" height="200" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/geo1.png">

    <img style="float: right" width="410" height="200" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/geo2.png">
  </p>

  <br>
  <br>

  2. `Directions Service, Directions Display` (Google), this feature leverages Google's tech to connect points and create polylines in between that snap to the nearest road by fetching 100's of geocoded points along the roads in between and returning a route most consistent with the Users' placed waypoints. Perhaps the most complex implementation I developed, biggest issue was including waypoints and using directions service to compute data such as distance positioning and 
  creating parseable information to store in our local state. 
  <br>
  
  Each call to the API returns a multi-dimensional object that contains information ranging from the initial request (an object containing destination latitude and longitude, travelMode, and current waypoints)
  to an array of routes each an object containing legs(our stops along the way) summary of location and waypoint order to track chonologically. Very fun stuff! <br> <br> See the immediate screen shot below of said code in chrome dev tools.
  <img width="450" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/calcroute3.png">
  <br>

  The bottom left shot shows our calculation method that works by receiving every consecutive request upon a user received event to create a point. As for our next screen shot, upon detecting that we have more than 1 point in our local state, our `calcRouteandRender` gets called to receive our latest endpoint and parse its data to add and store to our current totals of `distance` (formatted into miles since its received as feet initially), and `duration` (formatted again because its received as hours). `nullPointExecuted` serves as an indicator to determine wether or not we not only update our state to subtract or most recent leg's `distance` but also `duration` before we null the point out of our collection. (This is in reference to our method to delete points called `nullPoints`).
  <p>
    <img style="float: left" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/calcroute1.png">

    <img style="float: right" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/calcroute2.png">
  </p>

  <br>
  <br>


  3. Marker Creation
  <br>
  Our most *important* tool in mapping yet as it holds the answer to making our route component dynamic is the below snippet.
  <br>
  Because of our need to individually view code we need to store interpolated latitude and longitude data in our local slice of state to later iterate our route show page each user event (click) on the map not only stores each points but calls on the aforementioned functions!
  <p align="center">
    <img width="800" height="450" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/createPoint.png">
  </p>  

  <br> 
  <br> 
  <br>

### Backend (React-Redux to backend calls)

* Before we are able to update our frontend and store we must make calls to communicate with our backend and fetch data 
  1. Before dispatching an action to update our Redux store we make an `AJAX` request passing in an object containing a `url`(where to send the request to be interpreted and redirect our request by rails router), `method(`type of request), and `data`(formatted into JSON) according to `RESTful` convention and `RESTful` routes.

  <br>

  Its also worth mentioning that because our routes config specifies the default data type received to be JSON format, a future developer can run the risk of an unforeseen bug that would essentially confuse `Rails Router` on how to process the incoming object. Additionally Rails Router knows where to send the prior mentioned request by matching `GET` requests to only index, and show controller actions depending on the AJAX request's contained `url`. Other requests follow the same convention.

  <p>
    <img style="float: left" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/routeUtil.png">

    <img style="float: right" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/routesConfig.png">
  </p>

  <br> 
  <br> 

  2. In the respective controller we carry out the `POST` requests by passing our `AJAX` method's data through *strong_params* which essentially deconstructs params from our data and *permits* what is allowed to go though to our action. (Kind of like a bouncer at a club) 
  <p>
    <img style="float: left" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/routeCreate.png">

    <img style="float: right" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/routeParams.png">
  </p>

  <br>

  3. After a controller action is successful we check model validations and create associations as needed through `Active Record` which automatically performs under-the-hood `SQL` joins and queries to fufill relationships between objects in our `PostgreSQL` DB. 
    Although our `Route Model` has one simple associative method, our `User Model` exemplifies what proper use of `Active Record` can look like with `:belongs_to` and `:has_many` associations.
    <p>
      <img style="float: left" width="320" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/routeModel.png">

      <img style="float: right" width="320" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/userModel.png">
    </p>

  <br>

  A sneak peek into our `Connection Model`'s (Friends) associations! The dynamic keying of values serves the purpose of being able to satisfy commenting and reply functionality. 

  <p align="center">
    <img width="800" height="450" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/connectionModel.png">
  </p>  

  <br>

  4. Finally our `JBuilder`s serve the purpose finalizing an endpoint for our frontend to manipulate and use at its discretion!
  <br>

  To create DRY code, partials were used to be used in different types of returned requests. One example is below when we created our route partial to later use in our `route_show_jbuilder`.
  By default, `JSON.extract` allows us to take specific data from and object in this case a route, and return another object with the chosen attributes for our endpoint. However, this can sometimes cause delays for bigger teams as needs
  constantly change and backend developers often need to reconstruct said endpoints to satisfy needs on the frontend. I found myself changing this same endpoint several times as i was trying to develop more efficient ways of rendering data on the frontend. Technology such as `GraphQl` corrects that by offering our frontend flexibility on what they ONLY want to extract WHILE lightening the burden on our DB. A great tool to use!
    <p>
      <img style="float: left" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/jbuilderPartial.png">
      <!-- <img style="float: left" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/jbuilderPartial.png"> -->

      <img style="float: right" width="440" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/jbuilderShow.png">
    </p>

  <br>





---

## Future Directions
* Gear Tracker

---


## LEGAL
*  By reviewing this clone you release the awesome and talented developer from any foreseeable and/or unforeseeable liability. You further agree to hold the developer harmless from any future litigation and/or injunction. Do NOT sue me. (please).

---



<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
