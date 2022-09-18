import React from 'react'
import { createRoot } from 'react-dom/client'
import Widget from './Widget'

export default class EmbeddedWidget {
  static el: HTMLElement

  static mount() {
    const component = <Widget />

    function doRender() {
      if (EmbeddedWidget.el) {
        throw new Error('EmbeddedWidget is already mounted, unmount first')
      }
      const el = document.createElement('div')
      el.setAttribute('class', 'cleanslate')

      document.body.appendChild(el)

      createRoot(el).render(component)
      EmbeddedWidget.el = el
    }

    if (document.readyState === 'complete') {
      doRender()
    } else {
      window.addEventListener('load', () => {
        doRender()
      })
    }
  }
}
