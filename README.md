# react-native-agenda-view
Display a schedule/agenda quickly with &lt;AgendaView />

![notification](https://github.com/frostney/react-native-agenda-view/blob/master/docs/schedule.png)

### Installation

```
$ npm install react-native-agenda-view
```

### Usage
```javascript
import React from 'react';
import { View } from 'react-native';
import AgendaView from 'react-native-agenda-view';

const items = [{
  header: '09:00 - 09:30 am',
  description: 'Hello',
}, {
  header: '9:30 - 10:00 am',
  description: 'World',
}];

const MyComponent = () =>
  <AgendaView items={items} />;
```

### Customization
#### `items`
##### Type: `Array`
##### Default: `[]`
This provides the items that will be rendered as the agenda. The item itself is an object that has the following shape:
```javascript
{
  header: String,
  description: String (optional),
  startDate: Number (timestamp, optional),
  endDate: Number (timestamp, optional),
  color: String (Overwrites the color of the item),
  backgroundColor: String (Overwrites the backgroundColor of the item),
  borderColor: String (Overwrites the borderColor of the item),
  onItemPress: Function (optional),
}
```

#### `highlightCurrent`
##### Type: `Boolean`
##### Default: `true`
Highlights an item if the current time is within its start and end date.

#### `onItemPress`
##### Type: `Function`
Provides a function that will be called when an item will be clicked

#### `updateInterval`
##### Type: `Number`
##### Default: `60 * 1000`
Updates the agenda component in this interval to update the highlighted item

#### `styles`
##### Type: `Object`
Allows to merge with internal styles. If custom styles should be provided, they need to have specific properties:
```javascript
{
  container: Styles for the scroll list container,
  description: Styles for the description container,
  item: Styles for the item,
  header: Styles for the header,
}
```

### Plans for future versions
- Allow React components directly instead of text
- Make highlighting of the current item more precise

### License
MIT
