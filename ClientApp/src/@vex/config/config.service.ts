import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { DeepPartial } from '../interfaces/deep-partial.type';
import { mergeDeep } from '../utils/merge-deep';
import { LayoutService } from '../services/layout.service';
import { configs } from './configs';
import { VexConfigName } from './config-name.model';
import { VexConfig } from './vex-config.interface';
import { ColorSchemeName } from './colorSchemeName';
import { CSSValue } from '../interfaces/css-value.type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  defaultConfig: VexConfigName = VexConfigName.poseidon;
  configs: VexConfig[] = configs;

  private _configSubject = new BehaviorSubject(this.configs.find(c => c.id === this.defaultConfig));
  config$ = this._configSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document,
              private layoutService: LayoutService) {
    this.config$.subscribe(config => this._updateConfig(config));
  }

  select<R>(selector: (config: VexConfig) => R): Observable<R> {
    return this.config$.pipe(
      map(selector)
    );
  }

  setConfig(config: VexConfigName) {
    const settings = this.configs.find(c => c.id === config);
    this._configSubject.next(settings);
  }

  updateConfig(config: DeepPartial<VexConfig>) {
    this._configSubject.next(mergeDeep({ ...this._configSubject.getValue() }, config));
  }

  private _updateConfig(config: VexConfig): void {
    this._setLayoutClass(config.id);
    this._setStyle(config.style);
    this._setDirection(config.direction);
    this._setSidenavState(config.sidenav.state);
    this._emitResize();
  }

  private _setStyle(style: VexConfig['style']): void {
    /**
     * Color Scheme
     */
    Object.values(ColorSchemeName).filter(s => s !== style.colorScheme).forEach(value => {
      if (this.document.body.classList.contains(value)) {
        this.document.body.classList.remove(value);
      }
    });

    this.document.body.classList.add(style.colorScheme);

    /**
     * Border Radius
     */
    this.document.body.style.setProperty('--border-radius', `${style.borderRadius.value}${style.borderRadius.unit}`);

    const buttonBorderRadius: CSSValue = style.button.borderRadius ?? style.borderRadius;
    this.document.body.style.setProperty('--button-border-radius', `${buttonBorderRadius.value}${buttonBorderRadius.unit}`);

    /**
     * Primary Color
     */
    this.document.body.style.setProperty('--color-primary', style.colors.primary.default.replace('rgb(', '').replace(')', ''));
    this.document.body.style.setProperty('--color-primary-contrast', style.colors.primary.contrast.replace('rgb(', '').replace(')', ''));
  }

  /**
   * Emit event so charts and other external libraries know they have to resize on layout switch
   * @private
   */
  private _emitResize(): void {
    if (window) {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    }
  }

  private _setDirection(direction: 'ltr' | 'rtl') {
    this.document.body.dir = direction;
  }

  private _setSidenavState(sidenavState: 'expanded' | 'collapsed'): void {
    sidenavState === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }

  private _setLayoutClass(layout: VexConfigName): void {
    this.configs.forEach(c => {
      if (this.document.body.classList.contains(c.id)) {
        this.document.body.classList.remove(c.id);
      }
    });

    this.document.body.classList.add(layout);
  }
}
