# A Simple trainig app

The goal for this app is that users will be able to register their exercises, training sessions and keep
a log of their trainings, if they completed the session, dates, calories, and more.

## What am i studying

For this app i'm mainly focusing on studying NgRX and AngularFire. I always used RxJS BehaviorSubject to
create some kind of store in my apps to share state, but it sometimes gets hard to work with them and
therefore learning NgRX became a necessity.

AngularFire is just for curiosity. People said that it's better to use AngularFire than the JS library.
I've never had problems using the JS lib, but i want to see if it can be easier or it really has any
advantage over the js lib.

I'm algo using Ionic for 3 reasons:

- i love ionic, really, i've been using it since v1 and it never let me down.
- it's easier to build components, beeing them pages (with modules and routing), or just forms and buttons
  and CSS and other stuff i'm not willing to focus now.
- i have to configure my environment to build apps for mobile, so i'll be using Capacitor for this.

## Steps of what i'm building.

So there's some steps i'm following to complete this application while i'm learning:

- I'm going to complete the application with the Firebase JS lib and Ionic components first.
- I'll apply needed CSS, CSSBEM, theming, refactor my HTML and other visual stuff.
- I'll refactor the app so it can use NgRX (i've already started this because i needed to see some stuff
  working).
- I'll refactor the app so it can use AngularFire.
- I'll add authentication, mainly to keep my Firebase project safe.
- I'll add Capacitor and build it for mobile use.
- I'll share the application via Firebase Hosting.

## Final informations

I'll not upload my environments files since i'll not manage my auth in the first steps, so if someone came
across this project and want to test it somehow, you'll first have to create some environment files.
It's basically a `prod` property and firebase configs.
