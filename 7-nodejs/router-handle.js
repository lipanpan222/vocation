const list = (req, res) => {
    res.send('Get user list.')
}
const add = (req, res) => {
    res.send('add user list.')
}
module.exports = {
    list,
    add
}