import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SpellService } from '../services/spell.service';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden flex items-center justify-center">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-900"></div>
          <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      }

      <main class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
        
        <!-- Icon/Symbol -->
        <div class="mb-12 transition-all duration-1000">
          <div [class]="spellService.isArcane() ? 'bg-emerald-900/30 text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)] border-emerald-500/50' : 'bg-slate-100 text-slate-700 border-slate-200'"
               class="w-24 h-24 rounded-2xl mx-auto flex items-center justify-center text-5xl border-2 transition-all duration-700">
            <span class="material-icons">{{ spellService.isArcane() ? 'school' : 'terminal' }}</span>
          </div>
        </div>

        <!-- Main Content -->
        <div class="space-y-8 transition-all duration-1000">
          
          <!-- Headline -->
          <h1 [class]="spellService.isArcane() ? 'font-serif text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400' : 'font-sans text-5xl font-extrabold text-slate-900 tracking-tight'"
              class="mb-6">
            {{ spellService.isArcane() ? 'Join the Guild' : 'Crack the Code to Join Us' }}
          </h1>

          <!-- Description -->
          <p [class]="spellService.isArcane() ? 'text-emerald-100/80 font-mono text-lg max-w-2xl mx-auto italic leading-relaxed' : 'text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed'"
             class="mb-12">
            {{ spellService.isArcane() 
              ? "The Guild Masters seek fellow practitioners to stand among us and join our circle of the high arts. We do not care for your mortal titles or corporate scrolls. We care only for the magic you wield." 
              : "We are looking for exceptional engineers who see beyond the syntax. If you found this page, you are already halfway there. But to join Tenet Logica, you must prove your capability." }}
          </p>

          <!-- Instructions Box -->
          <div [class]="spellService.isArcane() 
               ? 'bg-slate-800/60 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
               : 'bg-slate-50 border-slate-200'"
               class="max-w-2xl mx-auto rounded-xl border p-8 text-left transition-all duration-700">
            
            <h3 [class]="spellService.isArcane() ? 'text-emerald-300 font-serif text-xl mb-4' : 'text-slate-900 font-bold text-lg mb-4'">
              {{ spellService.isArcane() ? 'The Petition Ritual' : 'Application Protocol' }}
            </h3>

            @if (spellService.isArcane()) {
              <div class="space-y-4 font-mono text-sm text-emerald-100/70">
                <p>To be considered for the inner circle, send a raven to the Guild Masters at <span class="text-white font-bold">tenetlogica@gmail.com</span>.</p>
                <p>Your missive must include:</p>
                <ul class="list-disc list-inside space-y-2 ml-2">
                  <li>A link to your <span class="text-emerald-300">Grimoire</span> (GitHub profile).</li>
                  <li>Or, if your spells are secret, a working portal to your finest creations (Share your live projects if you don't want to share code).</li>
                  <li>A brief recounting of your most dangerous magical working (A small write-up about your awesome project).</li>
                </ul>
              </div>
            } @else {
              <div class="space-y-4 text-slate-600">
                <p>We don't do standard interviews. We look for problem solvers.</p>
                <p class="font-mono bg-slate-200 p-3 rounded text-sm text-slate-800">
                  > Hint: {{ hintStatement }}
                </p>
                <p>Once you've cleared the first test, just follow the instructions to join the us! We're excited to have you.</p>
              </div>
            }
          </div>

          <!-- CTA -->
            @if (spellService.isArcane()) {
            <div class="pt-8">
                <a href="mailto:tenetlogica@gmail.com"
                class="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1
                bg-emerald-800 hover:bg-emerald-700 text-emerald-100 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <span class="material-icons mr-2">auto_stories</span>
                    Submit Your Grimoire
                </a>
            </div>
            }

        </div>

      </main>
    </div>
  `
})
export class CareersComponent implements OnInit {
    spellService = inject(SpellService);
    private platformId = inject(PLATFORM_ID);
    hintStatement = 'The truth is hidden in plain sight.';

    ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        this.hintStatement = 'The truth will be revealed to those who can ?search. We don\'t do typos.';
      }
    }
  }
}
