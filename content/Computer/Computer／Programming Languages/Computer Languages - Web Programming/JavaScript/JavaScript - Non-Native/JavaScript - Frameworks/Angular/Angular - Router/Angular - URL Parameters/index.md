---
title: "Angular - URL Parameters"
created: 2021-01-02T21:25:50.797-06:00
modified: 2021-01-02T21:42:34.465-06:00
parent: "[[Angular - Router]]"
children: []
---
There is a lot of confusion on this topic because there are so many different ways to do it.

Here are the appropriate types used in the following screen shots:
- <code>private route: ActivatedRoute</code>
- <code>private router: Router</code>

### Methods

> [!expand-ui]- ParamMap (Required)
> ```
> # configure
> { path: 'movies/:id', component: MovieDetailComponent }
>
> # activate
> <a [routerLink]="['/movies', movie.id]">..</a>
> this.router.navigate(['/movies', this.movie.id]);
>
> # resulting URL
> http://localhost:4200/movies/5
>
> # Read
> this.route.snapshot.paramMap.get('id');
> ```

> [!expand-ui]- ParamMap (Optional)
> ```
> # configure
> { path: 'movies', component: MovieDetailComponent }
>
> # activate
> <a [routerLink]="['/movies', {title: ring, si: true}]">..</a>
> this.router.navigate(['/movies', {title: ring, si: true}]);
>
> # resulting URL
> http://localhost:4200/movies;title=ring;si=true
>
> # Read
> this.route.snapshot.paramMap.get('title');
> ```

> [!expand-ui]- QueryParamMap
> ```
> # configure
> { path: 'movies', component: MovieDetailComponent }
>
> # activate
> <a [routerLink]="['/movies']" [queryParams]="{title: ring, si: true}">..</a>
> this.router.navigate(['/movies'], {queryParams: {title: 'ring', si: true}});
>
> # resulting URL
> http://localhost:4200/movies?title=ring&si=true
>
> # Read
> this.route.snapshot.queryParamMap.get('title');
> ```

> [!expand-ui]- Navigation Extras/State
> There is a new method what came with Angular 7.2.0: [https://angular.io/api/router/NavigationExtras#state](https://angular.io/api/router/NavigationExtras#state)
> ```
> # Send
> this.router.navigate(['action-selection'], { state: { example: 'bar' } });
>
> # Receive
> constructor(private router: Router) {
>   console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'
> }
> ```
>
> You can find some additional info here:
>
> [https://github.com/angular/angular/pull/27198](https://github.com/angular/angular/pull/27198)
>
> The link above contains this example which can be useful: [https://stackblitz.com/edit/angular-bupuzn](https://stackblitz.com/edit/angular-bupuzn)

> [!expand-ui]- Using a Common Service
> You can use a service to pass data from one component to another without using route parameters at all.
>
> For an example see: [https://blogs.msmvps.com/deborahk/build-a-simple-angular-service-to-share-data/](https://blogs.msmvps.com/deborahk/build-a-simple-angular-service-to-share-data/)
>
> I have a plunker of this here: [https://plnkr.co/edit/KT4JLmpcwGBM2xdZQeI9?p=preview](https://plnkr.co/edit/KT4JLmpcwGBM2xdZQeI9?p=preview)
