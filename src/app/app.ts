import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { isPlatformBrowser } from '@angular/common';
import { SpellService } from './services/spell.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar />
      <div class="flex-grow">
        <router-outlet />
      </div>
      <app-footer />
    </div>
  `,
  styleUrl: './app.css',
})
export class App implements OnInit {
  private route = inject(ActivatedRoute);
  private spellService = inject(SpellService);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.route.queryParams.subscribe(params => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // Check if we are on mobile AND the search query param is 'truth'
        if (isMobile && params['search']?.toLowerCase() === 'truth') {
          this.spellService.activateArcaneMode();
        }
      });
    }
  }
}
