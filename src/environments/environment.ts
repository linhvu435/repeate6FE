// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',

  firebaseConfig : {
    apiKey: "AIzaSyB5AGoncucmVwqq-XxKw5do1Jg_Y_WYGjA",
    authDomain: "module6-e6af1.firebaseapp.com",
    databaseURL:"https://module6-e6af1-default-rtdb.firebaseio.com/",
    projectId: "module6-e6af1",
    storageBucket: "module6-e6af1.appspot.com",
    messagingSenderId: "626314778454",
    appId: "1:626314778454:web:4bba2e83c94ee6d50de8f7",
    measurementId: "G-0QZC92ECEZ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
