appframework-angularjs
======================

[AngularJS](https://angularjs.org/) + [Intel App Framework](http://app-framework-software.intel.com/) samples developed using [Intel XDK](http://xdk.intel.com]), demonstrates how `AppFramework` and `angularJS` can be used to create [Cordova](http://cordova.apache.org/) based webview apps.

The samples show how angular controller, templates, directives, routing and other features can be made to work when using Intel AppFramework as the UI framework.

The sample app loads data from an API, the data is loaded from an oData sample API using angularJS, the data is list of products and information. The app displays the list of products and clicking on each product will show more product information in the second view. This app implementation is accomplished using different features of `angularJS` by using angular controller, templates, directives and routing.

=

appframework-angularjs-controller
---------------------------------

`appframework-angularjs` folder has a simple `App Framework` example with `angularJS` that shows how a `ng-controller` can be setup to load data in the `App Framework` panels. 

appframework-angularjs-route
----------------------------

`appframework-angularjs-route` folder has a simple `App Framework` example with `angularJS` routing that shows how a `$routeProvider` can be set up to load data within `ng-view` in `App Framework` panel.

appframework-angularjs-template
-------------------------------

`appframework-angularjs-template` folder has a simple `App Framework` example with `angularJS` that shows how to load data using templates in `App Framework` panel.

appframework-angularjs-directive
--------------------------------

`appframework-angularjs-template` folder has a simple `App Framework` example with `angularJS` that shows how to use angular directives to create an element in `App Framework` panel and load data in it. 

=

How to test
-----------
Open the samples in [IntelXDK](http://xdk.intel.com) and preview in the `Intel XDK's emulator` or `View in Chrome` option. You can also build Cordova based app and install on iOS or Android device.
