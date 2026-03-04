import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SpellService } from '../services/spell.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    <footer [class]="spellService.isArcane() ? 'bg-slate-950 border-t border-purple-900/50 text-purple-200' : 'bg-slate-50 border-t border-slate-200 text-slate-600'"
            class="transition-colors duration-700 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                   class="w-8 h-8 rounded flex items-center justify-center font-bold transition-colors duration-700">
                <img
                  [ngSrc]="'logo.png'"
                  width="32"
                  height="32"
                  alt="Tenet Logica Logo"
                  [class]="'w-7 h-7 object-contain'"
                  priority
                />
              </div>
              <span class="font-bold text-lg">
                {{ spellService.isArcane() ? 'TENET LOGICA' : 'Tenet Logica' }}
              </span>
            </div>
            <p [class]="spellService.isArcane() ? 'text-purple-400/60' : 'text-slate-500'" class="text-sm max-w-xs transition-colors duration-700">
              {{ spellService.isArcane() 
                ? 'Weaving logic into reality since the First Era. A closed guild of arcane architects.' 
                : 'Innovative software solutions for modern businesses. Building the future, one line of code at a time.' }}
            </p>
          </div>
          
          <div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100' : 'text-slate-900'" class="font-semibold mb-4 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Portals' : 'Company' }}
            </h3>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/about" class="hover:underline">About</a></li>
              <li><a routerLink="/careers" class="hover:underline">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100' : 'text-slate-900'" class="font-semibold mb-4 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Legal Wards' : 'Legal' }}
            </h3>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/privacy" class="hover:underline">Privacy</a></li>
              <li><a routerLink="/terms" class="hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-current/10 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {{ year }} Tenet Logica. All rights reserved.</p>
          <p class="text-center mt-2 md:mt-0 cursor-help" title="Open console (F12) for a surprise">
            {{ spellService.isArcane() ? 'Mischief Managed.' : hintStatement }}
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent implements OnInit {
  spellService = inject(SpellService);
  private platformId = inject(PLATFORM_ID);
  hintStatement = 'The truth is hidden in the logs.';
  year = new Date().getFullYear();

  constructor() {
    this.logHint();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        this.hintStatement = 'The truth will be revealed to those who can ?search. We don\'t do typos.';
      }
    }
  }

  private logHint() {
    setTimeout(() => {
      console.log(`
%c
                    ____
                  .'* *.'
               __/_*_*(_
              / _______ \\
             _\\_)/___\\(_/_
            / _((\- -/))_ \\
            \\ \\())(-)(()/ /
             ' \\(((()))/ '
            / ' \\)).))/ ' \\
           / _ \\ - | - /_  \\
          (   ( .;''';. .'  )
          _\\"__ /    )\\ __"/_
            \\/  \\   ' /  \\/
             .'  '...' ' )
              / /  |  \\ \\
             / .   .   . \\
            /   .     .   \\
           /   /   |   \\   \\
         .'   /    b    '.  '.
     _.-'    /     Bb     '-. '-._
 _.-'       |      BBb       '-.  '-.
(___________\\____.dBBBb.________)____)
%c
Type "castSpell(<The spell that reveals Marauder's secrets>)" to witness the truth.
      `,
        'font-family: monospace; color: #8b5cf6; font-weight: bold;',
        'font-family: sans-serif; color: #64748b; font-size: 12px;');
    }, 2000);
  }
}
