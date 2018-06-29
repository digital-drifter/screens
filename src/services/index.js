const puppeteer = require('puppeteer')
const mkdirp = require('mkdirp')
const {resolve} = require('path')
const devices = require('./devices.js')

async function createDirectory (device) {
  const dir = resolve(`${__dirname}/screenshots/${device['device']}`)

  await mkdirp(dir, (err) => {
    if (err) {
      console.log(err)
    }
  })

  return dir
}

async function getScreenshots (device, page, browser) {
  const dir = await createDirectory(device)

  await page.screenshot({
    path: `${dir}/${device['width-px']}x${device['height-px']}.png`,
    clip: {
      x: 0,
      y: 0,
      width: parseInt(device['width-px'], 10),
      height: 16000
    }
    // fullPage: true
  })

  return browser.close()
}

async function setViewports (device, url) {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.waitFor(500)
  await page.goto(url)
  await page.waitFor(1500)
  await page.setViewport({
    width: parseInt(device['width-px'], 10),
    height: parseInt(device['height-px'], 10)
  })
  await getScreenshots(device, page, browser)
}

async function capture (url) {
  const promises = devices.map((device) => {
    return setViewports(device, url)
  })

  Promise.all(promises)
    .catch((error) => {
      console.log(error)
    })
}

module.exports = capture
