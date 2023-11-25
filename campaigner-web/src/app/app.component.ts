import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="bg-dark-bg text-gray-50 min-w-full min-h-screen flex">
    <div class="flex flex-col grow lg:w-8/12 min-h-screen">
      <header class="flex flex-row mb-4 p-4 font-medium border-dark-accent border-b-2">
        <h1 class="font-bold text-3xl"><a routerLink="">Campaigner</a></h1>
        <span class="grow"></span>
      </header>
      <main class="flex flex-row grow">
        <app-sidebar></app-sidebar>
        <div class="grow pl-1 bg-dark-bg-alt rounded-t-md">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'campaigner-web';
}
