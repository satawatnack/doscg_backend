const DoscgModel = require('../models/doscgModel')
const fetch = require('node-fetch')

exports.findingXYZ = async function () {
    var problem = ['X', 'Y', 5, 9, 15, 23, 'Z']
    problem[1] = problem[2] - ( problem[3] - problem[2] - 2 )
    problem[0] = problem[1] - ( problem[2] - problem[1] - 2 )
    problem[6] = problem[5] + ( problem[5] - problem[4] + 2 )
    const ans = new DoscgModel({"x": problem[0], "y": problem[1], "z": problem[6]})
    return ans.getData()
}

exports.findingBC = async function (a) {
    var  b = 23 - a
    var c = -21 - a

    const ans = new DoscgModel({"a": a, "b": b, "c": c})
    return ans.getData()
}

exports.findingDistance = async function () {
    const API_KEY = 'XXXXXXXXX'
    const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=SCG+Bangsue&destination=Central+World&language=th&region=th&key=' + API_KEY

    try {
        const response = await fetch(url);
        const json = await response.json();
        return json
    } catch (error) {
        throw error
    }
}
