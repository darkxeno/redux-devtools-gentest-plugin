

let lastTimestamp = Date.now();

export function click(reactId, tagName) {
  const offsetMillis = Date.now() - lastTimestamp;
  lastTimestamp = Date.now();
  return {
    record: true,
    type: 'click',
    reactId,
    tagName,
    offsetMillis
  };
}
