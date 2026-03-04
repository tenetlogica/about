import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpellService } from '../services/spell.service';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, NgOptimizedImage],
  template: `
    <nav [class]="spellService.isArcane() ? 'bg-slate-900 border-b border-purple-500/30' : 'bg-white border-b border-slate-200'" 
         class="sticky top-0 z-50 transition-colors duration-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="flex-shrink-0 flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-700">
                <img
                  [ngSrc]="'logo.png'"
                  width="32"
                  height="32"
                  alt="Tenet Logica Logo"
                  [class]="'w-7 h-7 object-contain'"
                  priority
                />
              </div>
              <span [class]="spellService.isArcane() ? 'text-purple-100 font-serif tracking-widest' : 'text-slate-900 font-sans font-bold tracking-tight'"
                    class="text-lg transition-all duration-700">
                {{ spellService.isArcane() ? 'TENET LOGICA' : 'Tenet Logica' }}
              </span>
            </a>
          </div>
          
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            <a routerLink="/" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}"
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Sanctum' : 'Home' }}
            </a>
            <a routerLink="/about" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}" 
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Grimoire' : 'About' }}
            </a>
            <a routerLink="/services" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}" 
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Alchemies' : 'Services' }}
            </a>
            <a routerLink="/careers" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}" 
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Guild' : 'Careers' }}
            </a>
            <a routerLink="/contact" 
               routerLinkActive="bg-blue-700 shadow-inner"
               [class]="spellService.isArcane() 
                 ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]' 
                 : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'"
               class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
              {{ spellService.isArcane() ? 'Summon Us' : 'Contact Us' }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="-mr-2 flex items-center md:hidden">
            <button (click)="toggleMobileMenu()" type="button" 
                    [class]="spellService.isArcane() ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'"
                    class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current transition-colors duration-300">
              <span class="sr-only">Open main menu</span>
              <span class="material-icons" [class.hidden-forced]="isMobileMenuOpen()">menu</span>
              <span class="material-icons" [class.hidden-forced]="!isMobileMenuOpen()">close</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden" [class.hidden]="!isMobileMenuOpen()">
        <div class="px-2 pt-2 pb-3 space-y-1 border-t"
             [class]="spellService.isArcane() ? 'border-purple-500/20 bg-slate-900' : 'border-slate-200 bg-white'">
          <a routerLink="/" 
             (click)="closeMobileMenu()"
             routerLinkActive="bg-slate-100 text-slate-900"
             [routerLinkActiveOptions]="{exact: true}"
             [class]="spellService.isArcane() 
               ? 'text-purple-200 hover:text-white hover:bg-purple-900/20 block' 
               : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 block'"
             class="px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            {{ spellService.isArcane() ? 'Sanctum' : 'Home' }}
          </a>
          <a routerLink="/about" 
             (click)="closeMobileMenu()"
             routerLinkActive="bg-slate-100 text-slate-900"
             [routerLinkActiveOptions]="{exact: true}"
             [class]="spellService.isArcane() 
               ? 'text-purple-200 hover:text-white hover:bg-purple-900/20 block' 
               : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 block'"
             class="px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            {{ spellService.isArcane() ? 'Grimoire' : 'About' }}
          </a>
          <a routerLink="/services" 
             (click)="closeMobileMenu()"
             routerLinkActive="bg-slate-100 text-slate-900"
             [routerLinkActiveOptions]="{exact: true}"
             [class]="spellService.isArcane() 
               ? 'text-purple-200 hover:text-white hover:bg-purple-900/20 block' 
               : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 block'"
             class="px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            {{ spellService.isArcane() ? 'Rituals' : 'Services' }}
          </a>
          <a routerLink="/careers" 
             (click)="closeMobileMenu()"
             routerLinkActive="bg-slate-100 text-slate-900"
             [routerLinkActiveOptions]="{exact: true}"
             [class]="spellService.isArcane() 
               ? 'text-purple-200 hover:text-white hover:bg-purple-900/20 block' 
               : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 block'"
             class="px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            {{ spellService.isArcane() ? 'Apprenticeship' : 'Careers' }}
          </a>
          <a routerLink="/contact" 
             (click)="closeMobileMenu()"
             routerLinkActive="bg-blue-700 shadow-inner"
             [routerLinkActiveOptions]="{exact: true}"
             [class]="spellService.isArcane() 
               ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)] block' 
               : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm block'"
             class="px-3 py-2 rounded-md text-base font-medium transition-all duration-300 mt-4">
            {{ spellService.isArcane() ? 'Summon Us' : 'Contact Us' }}
          </a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  spellService = inject(SpellService);

  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
