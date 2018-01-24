# \<cloud-data\>

A polymer-element with methods to access some of googles cloud-features.

`cloud-data` is an element that encapsulates the handling of data from googles cloud services. it uses google-signin to gain access to the webservices using googles authentication scheme. To use this component in your webapp you need to have a google developer-account and setup the credentials for a web app in the google developer console. This can be done over here: _https://console.developers.google.com/apis/credentials/oauthclient_

## Element markup

```html
<cloud-data google-client-id="[OAuth-2.0-Client-ID from googles api manager]"></cloud-data>
```

## Initial steps

`google-client-id` is the mandatory attribute that is used to connect to googles webservices. Without this the element will do nothing useful. You will need a `Client ID for Web application` and an `Browser API key` to bring this element to life. When creating this ids you have to authorize JavaScript origins, redirect URIs (at `Client ID for Web application`) and HTTP referrers (at `Browser API key`). Using localhost for a test will not work, since this could be a security problem, when somebody is copying your code from the website to his own local drive. But this can be overcome with a local dns that gives you access to your local webserver without using the term `localhost` in the url.

## Usage

In my projects i use `cloud-data` only once. In a project with name `xxx` i encapsulate it in an element namend `xxx-signed-out`. This is the element, that i set in the attribute `google-signin-hide-selector`. I also add an element named `xxx-signed-in` that goes to the attribute `google-signin-show-selector`. So the element `cloud-data` looks like this:

```html
<cloud-data 
    google-client-id="[OAuth-2.0-Client-ID]"
    google-signin-hide-selector="xxx-signed-out"
    google-signin-show-selector="xxx-signed-in">
</cloud-data>
```

In the index.html of the project i just add these two elements to the body.

```html
<body unresolved>
  <xxx-signed-out></xxx-signed-out>
  <xxx-signed-in hidden></xxx-signed-in>
</body>
```

All the application work is done in `xxx-signed-in`. In `xxx-signed-out` there is the html-code for a splash-screen that tells the user what he can do with this application.

When the signin in google was successful then the element `xxx-signed-out` is hidden and he element `xxx-signed-in` is shown. Also the function `xxx-signed-in.signinDone` is called. There you can do all the work that has to be done, when the user has an authorized connection to the google webservices.