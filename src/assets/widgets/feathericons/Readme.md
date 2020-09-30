## Instruction before printing new fonts
open the src/assets/scss/widgets/feathericons/_variable.scss
and change the second line from

```$icomoon-font-path: "fonts" !default;```
to this
```$icomoon-font-path: "~@/assets/fonts/feathericons/fonts" !default;```
