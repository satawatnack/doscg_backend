const DoscgService = require('../services/doscgService')
const redis = require('redis')
const {promisify} = require('util')

const client = redis.createClient()
const getAsync = promisify(client.get).bind(client)

exports.findingXYZ = async (req, res) => {
    const cached = await getAsync('findingXYZ')

    if (cached) {
        return res.json(JSON.parse(cached))
    }

    const ans = await DoscgService.findingXYZ()
    client.setex('findingXYZ', 60, JSON.stringify(ans))
    res.send(ans)
}

exports.findingBC = async (req, res) => {
    const cached = await getAsync('findingBC')

    if (cached) {
        return res.json(JSON.parse(cached))
    }

    const ans = await DoscgService.findingBC(21)
    client.setex('findingBC', 60, JSON.stringify(ans))
    res.send(ans)
}

exports.findingDistance = async (req, res) => {
    const cached = await getAsync('findingDistance')

    if (cached) {
        return res.json(JSON.parse(cached))
    }

    try {
        const ans = await DoscgService.findingDistance()
        client.setex('findingDistance', 60, JSON.stringify(ans))
        res.send(ans)
    }
    catch (e) {
        res.status(400).send(e)
    }
}