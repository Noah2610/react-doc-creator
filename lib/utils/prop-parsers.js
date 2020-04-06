exports.enum = values =>
  Array.isArray(values)
    ? values
      .map(value => value.value)
      .join(' \\| ')
    : values


exports.objectOf = value => `{ [key]: <${value.name}> }`


exports.union = values =>
  values
    .map(value => value.name === 'instanceOf' ? value.value : value.name)
    .join(' \\| ')


exports.shape = values => {

  const props = Object.keys(values)
    .map(key => `${key}: ${values[key].name}`)
    .join(', ')

  return `{ ${props} }`

}
