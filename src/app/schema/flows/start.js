export default [{
  'type': 'component',
  'props': { 'componentName': 'usr.components.Form', 'componentInstance': 'form' },
  'events': [{
    'name': 'onClick',
    'targets': [{
      'type': 'userFunction',
      'props': { 'functionName': 'usr.api.makeGreetingText' },
      'events': [{
        'name': 'greeting',
        'targets': [{
          'type': 'component',
          'props': {
            'componentName': 'usr.components.TitlePanel',
            'componentInstance': 'titlePanel',
            'propertyName': 'title'
          }
        }]
      }]
    }]
  }]
}];
