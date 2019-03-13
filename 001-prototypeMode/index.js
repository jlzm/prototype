/**
 * 视图
 */

 class UserForm {
    constructor(el, onSubmit) {
        this.el = document.querySelector(el);
        this.onSubmit = onSubmit;
        this.submit();
        
    }

    submit() {
        let ael = this.el;
        this.el.addEventListener('submit', e => {
            e.preventDefault();
            let elQs = this.el.querySelector.bind(this.el);

            let data = {};

            data.name = elQs('[name=name]').value;
            data.age = elQs('[name=age]').value;

            this.onSubmit(data);

        })
    }
 }

 class UserTable {

 }













class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}


class UserList {
    constructor(list = []) {
        this.list = list;
        this.normalize();
        
    }

    normalize() {
        this.list.forEach((user, index) => {
            if (user instanceof User) {
                return;
            }
            this.list[index] = new User(user.name, user.age);
        })
    }

    add(user) {
        this.list.push(user);
        this.normalize();
    }

    remove(id) {
        this.list.splice(id, 1);
    }

    all() {
        return this.list;
    }
}

let userList = new UserList();
let userForm = new UserForm('form', data => {
    userList.add(data);
    userList.all();
    console.log('userList.all():', userList.all());
    
});


