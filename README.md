# systemic-configcat
A typescript [systemic](https://github.com/guidesmiths/systemic) [configcat](https://configcat.com/docs/sdk-reference/js/) component.

## Usage
```js
const System = require('systemic')
const configCat = require('@infinitaslearning/systemic-configcat')

new System()
    .configure({
        configCat: {
            key: 'YOUR-CONFIGCAT-KEY' 
        }
    })
    .add('configCat', configCat())
    .dependsOn('config')
    .start((err, components) => {
        // Do stuff with components.configCat
    })
```

### Parameters
- **key**  your configCat key

### Test mock
```js
const system = require('./system')
const { configCatMock } = require('@infinitaslearning/systemic-configcat')

system().set('configCat', configCatMock())
```

## Version history

V 2
 - Use configCat-node version 9