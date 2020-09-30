const fetch = require('node-fetch')

module.exports = async (req, res) => {
  if (!req.body) {
    return res.json({
      error: 'Missing content',
    })
  }

  if (!process.env.ROBOCLOUD_URL || !process.env.ROBOCLOUD_SECRET) {
    return res.json({
      error: 'Environment variables missing',
    })
  }

  const {name, message} = req.body

  if (typeof name !== 'string' || name.length < 1) {
    return res.json({
      error: 'Name missing',
    })
  }

  if (typeof message !== 'string' || message.length < 1) {
    return res.json({
      error: 'Message missing',
    })
  }

  const headers = {
    'robocloud-process-secret': process.env.ROBOCLOUD_SECRET,
    'Content-Type': 'application/json',
  }

  const body = {
    name,
    message,
  }

  const response = await fetch(process.env.ROBOCLOUD_URL, {
    method: 'POST',
    body: JSON.stringify({variables: body}),
    headers,
  })

  const json = await response.json()

  if (json.message !== 'OK') {
    return res.json({
      error: 'Cloud error',
    })
  }

  res.json({
    error: false,
  })
}
