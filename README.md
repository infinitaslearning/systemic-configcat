# systemic-configcat
A typescript [systemic](https://github.com/guidesmiths/systemic) configcat component.

## Usage
```js
const System = require('systemic')
const configcat = require('systemic-configcat')

new System()
    .configure({
        configcat: {
            key: 'YOUR-CONFIGCAT-KEY' 
        }
    })
    .add('configcat', configcat())
    .dependsOn('config', 'logger')
    .start((err, components) => {
        // Do stuff with components.configcat
    })
```

### Parameters
- **key**  your configcat key
