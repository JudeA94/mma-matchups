const findEventTitle = (eventTitle) => {
  const searchQuery = eventTitle.split(':')[1].join('')
  console.log(searchQuery)
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(
    searchQuery,
  )}&srprop=snippet&utf8=1&formatversion=2`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const topResult = data.query.search[0]
      console.log('hello ' + topResult.title)
      return topResult.title
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = findEventTitle
