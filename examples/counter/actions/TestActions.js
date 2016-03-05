let lastTimestamp = Date.now();

export function event(topLevelType, topLevelTarget, reactId, nativeEvent) {

  const offsetMillis = Date.now() - lastTimestamp;
  lastTimestamp = Date.now();

  console.log('TestActions received an event:',topLevelType);

  switch(topLevelType){
    case 'topClick':     
    case 'topChange':

    let targetId = (topLevelTarget === window) ? 'window' : topLevelTarget.id;
    if(!targetId){
      console.warn('Please define an unique id attribute on event target:',topLevelTarget);
    }

    return {
      record: true,
      type: topLevelType,
      reactId,
      targetId,
      tagName: topLevelTarget.tagName,
      offsetMillis
    }; 
    break;        
    default:
      console.log('other event',arguments);
    break;
  }
}

