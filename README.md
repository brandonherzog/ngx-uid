# NgxUid - Angular Unique Ids

[![Build Status][travis-badge]][travis-badge-url]

[travis-badge]: https://travis-ci.org/brandonherzog/ngx-uid.svg?branch=master
[travis-badge-url]: https://travis-ci.org/brandonherzog/ngx-uid

A simple Angular 4+ service and directive to generate and bind unique ids to HTML elements.
This can be of particular use for assigning ids when dynamically generating elements such as when using the Angular `ngFor` directive.

## Usage

### 1. Install the library:

```
npm install --save ngx-uid
```

### 2. Import the `NgxUidModule` in your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUidModule }  from 'ngx-uid';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxUidModule.forRoot()  // <-- use `forRoot` in your app root module
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class MyModule {}
```

### 3. Use the `NgxUidDirective` (`ngxUid`) or `NgxUidService` in your component:

```typescript
import { Component } from '@angular/core';

import { NgxUidService } from 'ngx-uid';

@Component({
  selector: 'app-component',
  template: `
  <!-- using the directive -->
  <input ngxUid #inputId1="ngxUid" type="checkbox">
  <label [for]="inputId1">Check 1</label>

  <!-- using the service -->
  <input [id]="inputId2" type="checkbox">
  <label [for]="inputId2">Check 1</label>
  `
})
export class AppComponent { 
  constructor(private uidService: NgxUidService) { }
  inputId2 = this.uidService.next();
}
```

### 4. (Optional) Configure the `NgxUidService`:

The default `NgxUidService` provides simple incrementing id values.

If you wish, you may define your own unique id factory by implementing the `NgxUidService` interface, such as to provide a universally unique id:

```typescript
import { v4 as uuid } from 'uuid';
import { NgxUidService }  from 'ngx-uid';

export class MyIdFactory implements NgxUidService {
  next() { return uuid(); }
}
```

Then either (1) configure a factory instance when importing the `NgxUidModule` module
```typescript
@NgModule({
  imports: [
    NgxUidModule.forRoot({
      idFactory: new MyIdFactory()  // <-- (1)
    })
  ],
  // ...
})
export class MyModule {}
```

_or_ (2) set up your own provider for `NgxUidService`.
```typescript
@NgModule({
  providers: [
    {                               // <-- (2)
      provide: NgxUidService,
      useClass: MyIdFactory
    }
  ],
  // ...
})
export class MyModule {}
```

See the [demo source](src/demo) for an example application.

## Development

### Clone

```
git clone https://github.com/brandonherzog/ngx-uid.git
cd ngx-uid
npm install
npm start
```

### Tasks

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint 
- `npm run clean` to clean
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

## License

[MIT](LICENSE)

## Thanks

Thanks to the [Angular QuickStart Library](https://github.com/filipesilva/angular-quickstart-lib) for the boilerplate.
