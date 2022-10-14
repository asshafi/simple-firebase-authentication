/*
INITIAL SETUP
------------------------------------
1.visit: console.firebase.google.com
2.create a new project
3.visit docs: go to docs: Build>Authentication>web>Getting started
4.Register web app>firebse project home> click web> give name and register
5.install firebase for our project: npm install firebase
6. Dangerous: Get firebase config and put it in firebase.init.js
7.export app from firebase.init.js
--------------------------------------
SETUP THE PROVIDER
--------------------------------------
8.create auth using getAuth from firebase by using app from firebase.init.js
9.create a google auth provider. do not forget to use new GoogleAuthProvider();
10.go to firebase>build>Authentication>sign in method
11.Enable google sign in method
12. create a button for google sign in with a click handler 
13.inside the event handler, call signInWithPop with auth, provider
14.after signInWithPopup .then result,result
----------------------------------------
DISPLAY USER DATA
---------------------------------------


---------------------------------------
ADD A NEW SING IN METHOD
1.enable the sign in method
2.create github,twitter,fb,etc,app  create
3. ger client id and secret 

*/