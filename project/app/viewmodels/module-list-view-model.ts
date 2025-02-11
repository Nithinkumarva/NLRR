import { Observable, Frame } from '@nativescript/core';
import { modules } from '../data/modules';
import { Module } from '../models/game.model';

export class ModuleListViewModel extends Observable {
  private _modules: Module[];

  constructor() {
    super();
    this._modules = modules;
  }

  get modules(): Module[] {
    return this._modules;
  }

  onModuleTap(args: any) {
    const module = this._modules[args.index];
    console.log(`Selected module: ${module.name}`);
    
    // Here we'll navigate to the module details page when implemented
    // Frame.topmost().navigate({
    //   moduleName: "views/module-detail-page",
    //   context: { module: module }
    // });
  }
}