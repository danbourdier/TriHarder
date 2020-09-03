# README
![alt text](https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/logo_and_txt.png "Logo Title Text 1")

___


## TECHNOLOGIES

#### Backend          
1. Postgresql
2. Rails
3. Ruby
4. Ajax

### Frontend
* React-Redux
* CSS


### Hosting
* Heroku


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
* Live app prioritizes Bcrypt to secure new accounts and existing ones with the most comprehensive password algorithm that not only hashes an entry but salts it (randomizes entries with deterministic computation and adds additional randomized characters to promote resistance to rainbow table attacks). Upon a user's attempt to login, the app takes advantage of the deterministic output to match the user's entry to the randomized password generated on account signup.


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



### Google Maps API (Geocoding API, Directions Service, Directions Display)


<p align="center">
  <img width="800" height="450" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/mapping.gif">
</p>

* Google Maps API is a powerful technology that allows a huge array of features that enable the user the ability to not only map routes. But also, the following;

  1. Geocoding API, by providing a zip code, city name, country name, and more we can pan the map to the specified location. What happens in the below code is we 
    make a call to the API and manipulate the response (contingent of a code 200) by setting our map's center prop to the returned object coordinates. As noted by keying in to [`geometry`][`location`].
    A very straight forward tool and intuitive to use!

  <p>
    <img style="float: left" width="410" height="200" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/geo1.png">

    <img style="float: right" width="410" height="200" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/geo2.png">
  </p>

  <br>

  2. Directions Service, Directions Display (Google), this feature leverages Google's tech to connect points and create polylines in between that snap to the nearest road by fetching 100's of geocoded points along the roads in between and returning a route most consistent with the Users' placed waypoints. Perhaps the most complex implementation I developed, biggest issue was including waypoints and using directions service to compute data such as distance positioning and 
  creating parseable information to store in our local state. 
  <br>
  <br>
  
  Each call to the API returns a multi-dimensional object that contains information ranging from the initial request (an object containing destination latitude and longitude, travelMode, and current waypoints)
  to an array of routes each an object containing legs(our stops along the way) summary of location and waypoint order to track chonologically. Very fun stuff! <br> <br> See the immediate screen shot below of said code in chrome dev tools.
  <img width="450" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/calcroute3.png">
  <br>
  <p>
    <img style="float: left" width="450" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/calcroute1.png">

    <img style="float: right" width="450" height="280" src="https://github.com/danbourdier/TriHarder/blob/master/app/assets/images/calcroute2.png">
  </p>

  <br>
  <br>

  

  3. Marker Creation


---
## Future Directions
* Finalizing route manipulation and viewing
* Use of Google Maps API
* Gear Tracker
* Friend Requests
* Comment Functionality     
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
