const AppDataSource = require("../../data-source");
const userRepository = AppDataSource.getRepository("User")

class UserController {
    static showUserList(req, res) {
        let userLogin = req.session.user;
        userRepository.find({}).then(users => {
            return res.render('admin/users/list', {users: users, userLogin: userLogin});
        })
    }

    static showFormCreate(req, res) {
        return res.render('admin/users/add')
    }

    static store(req, res) {
        // lay du lieu tu body


        // insert csdl

        return res.redirect('/admin/users')
    }

    static deleteById(req, res) {

    }

    static showFormEdit(req, res){
        // lay id

        // get user


    }

    static edit(req, res){


    }

}

module.exports = UserController;
