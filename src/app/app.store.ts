import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

interface Item {
  name: string
  time: Date
}

interface AppState {
  items?: Item[]
  loading?: boolean
}

@Injectable()
export class AppStore extends ComponentStore<AppState> {
  constructor() {
    super({})
  }

  readonly items$ = this.select((s) => s.items)
  readonly loading$ = this.select((s) => s.loading)
  readonly vm$ = this.select(
    // Component Store v10
    this.items$,
    this.loading$,
    (items, loading) => {
      return {
        items,
        loading,
      }
    },
  )
}
