# Entity Menu

## Usage

In your `app.module.ts` :

```ts
import { MessagePageModule } from '@ffdc/uxg-angular-components/message-page';

@NgModule({
  imports: [
    ...
    MessagePageModule
  ],
})
```

In your `styles.scss` :

```scss
@include uxg-message-page-theme($theme);
```

In your html

```html
<uxg-message-page>
</uxg-message-page>
```
