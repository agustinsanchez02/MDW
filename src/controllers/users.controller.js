//create users
export const createUsers = (req, res) => {
    {
        const { name } = req.params;
        res.json({user: name})
    }
}

//get users
export const getUsers = (req, res) => {
    const { name } = req.params;
    res.json({users: "agus"})
}

//get user
export const getUser = (req, res) => {
    const { name } = req.params;
    res.json({users: name})
}
//update users

export const updateUsers = (req, res) => {
    const { name } = req.params;
    res.json({users: name})
}

//delete users
export const deleteUsers = (req, res) => {
    const { name } = req.params;
    res.json({users: name})
}

