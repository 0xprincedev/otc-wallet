const addComma = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const addPlus = (x) => {
  if (x[0] == '-') return x
  return '+' + x
}

export { addComma, addPlus }

