# systemic-configcat
A typescript [systemic](https://github.com/guidesmiths/systemic) [configcat](https://configcat.com/docs/sdk-reference/js/) component.

## Usage
```js
const System = require('systemic')
const configcat = require('@infinitaslearning/systemic-configcat')

new System()
    .configure({
        configcat: {
            key: 'YOUR-CONFIGCAT-KEY' 
        }
    })
    .add('configcat', configcat())
    .dependsOn('config')
    .start((err, components) => {
        // Do stuff with components.configcat
    })
```

### Parameters
- **key**  your configcat key
