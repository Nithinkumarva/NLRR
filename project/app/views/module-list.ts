import { EventData, NavigatedData, Page } from '@nativescript/core';
import { ModuleListViewModel } from '../viewmodels/module-list-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new ModuleListViewModel();
}