

const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id })
        .then(user => {
            if (user.length) {
                res.json(user[0])
            } else {
                res.status(400).json('Not found')
            }
            // res.json(user[0]) removed this, app works, but keeping here just in case
        })
        .catch(err => res.status(400).json('Error getting user'))
}

module.exports = {
    handleProfileGet: handleProfileGet
}; 