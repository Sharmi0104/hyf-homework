import express from 'express';
import bodyParser from 'body-parser';

class ContactList {
    /**
     * Simple Contact List class
     */
    constructor() {
        this._list = [];
    }

    /**
     * Check if the new_contact object is a valid new contact
     * Validates, if has the name and phone keys, check if the name is a string
     * and the phone is a number and it has at least 5 digits
     * @param {name:string phone:nubmer} new_contact
     */
    isContactValid(new_contact) {
        if (
            new_contact.hasOwnProperty("name") &&
            new_contact.hasOwnProperty("phone")
        ) {
            if (
                typeof new_contact.name !== "string" ||
                new_contact.name.trim().length === 0
            ) {
                throw new Error(`The contact name ${new_contact.name} is not valid`);
            }
            if (
                typeof new_contact.phone !== "number" ||
                new_contact.phone.toString().length < 5
            ) {
                throw new Error(`The contact phone ${new_contact.phone} is not valid`);
            }
        } else {
            throw new Error("the contact needs to have a name and a phone");
        }
    }

    /**
     * Method for add a contact to the list
     * @param { name: String, phone: number,timestamp:Date} contact
     */
    add(new_contact) {

        try {
            this.isContactValid(new_contact);
            if (this._list.length === 0) {
                this._list.push(new_contact);
            } else {
                for (let index = 0; index < this._list.length; index++) {
                    const contact = this._list[index];
                    if (contact.name === new_contact.name) {
                        console.log(
                            "A contact with the name " + new_contact.name + " already exists"
                        );
                        break;
                    } else {
                        this._list.push(new_contact);
                        return;
                    }
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    remove(name) {
        console.log(name);
        for (let i = 0; i < this._list.length; i++) {
            const contact = this._list[i];
            if (contact.name === name) {
                this._list.splice(i, 1);
                break;
            } else {
                console.log("There is no contact with the name " + name);
                break;
            }        }    }

    removeById(index) {
        this._list.splice(index, 1);
    }

    // searchBy(key, value) {
    //     const result = [];
    //     for (let i = 0; i < this._list.length; i++) {
    //         let eachElement = this._list[i];
    //         if (eachElement.hasOwnProperty(key)) {
    //             if (eachElement[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())) {
    //                 result.push(eachElement);
    //             }
    //         } else {
    //             throw new Error(`Sorry the ${key} does not exists`);
    //         }
    //     }
    //     // console.log(`There is not this contact in your list!`);
    //     return result;
    // }

    searchBy(key, value) {
        return this._list.filter(e => {

            if (e.hasOwnProperty(key)) {
                if (e[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())) {
                    return e;
                }
            } else {
                throw new Error(`the key: ${key} does not exists`)
            }
        })
    }

    getList() {
        if (this._list.length === 0) {
            console.log('This List Is Empty!');
        } else {
            return this._list;
        }
    }
    /**
     * To get limited list 
     * 
     @param{limit:number,sort:string}*/
    limitSearchBy(key, value, limitVal) {

        return this._list.filter(e => {
            if (e.hasOwnProperty(key)) {
                if (e[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())) {
                    return e;
                }
            } else {
                throw new Error(`the key: ${key} does not exists`)
            }
        }).slice(0, limitVal)

    }
    sortBy(key, value, sortByRec) {
        if (sortByRec == "mr") {
            console.log("sortByRec", sortByRec);
            return this._list.filter(e => {
                if (e.hasOwnProperty(key)) {
                    if (e[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())) {
                        return e;
                    }
                } else {
                    throw new Error(`the key: ${key} does not exists`)
                }
            }).sort(function (a, b) {
                console.log(new Date(a.timestamp) - new Date(b.timestamp));
                return new Date(b.timestamp) - new Date(a.timestamp);
            })
        }
       else if (sortByRec == "lr") {
            console.log("sortByRec", sortByRec);
            return this._list.filter(e => {
                if (e.hasOwnProperty(key)) {
                    if (e[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())) {
                        return e;
                    }
                } else {
                    throw new Error(`the key: ${key} does not exists`)
                }
            }).sort(function (a, b) {
                console.log(new Date(a.timestamp) - new Date(b.timestamp));
                return new Date(a.timestamp) - new Date(b.timestamp);
            })
        }

    }

    /* class ContactItem {
     constructor(name, phone) {
       if (typeof name !== "string") {
         throw new Error("name must be a string");
       }
       if (typeof phone !== "number") {
         throw new Error("phone must be a number");
       }
       if (typeof phone.toString().length < 5) {
           throw new Error("phone has to few digits (at least 5)");
       }
       this.name = name;
       this.phone = phone;
     }
    }*/
}

const app = express();

const my_contact_list = new ContactList();

my_contact_list.add({
  name: "marco",
  phone: 42838188,
  timestamp:new Date()
});

my_contact_list.add({
  name: "frank",
  phone: 42838199,
  timestamp:"2019-01-15T17:13:12.618Z"
});

my_contact_list.add({
  name: "federica",
  phone: 82844159,
  timestamp:"2019-01-17T13:13:12.618Z"
});
my_contact_list.add({
  name: "max",
  phone: 52844159,
  timestamp:"2019-01-10T13:13:12.618Z"
});
my_contact_list.add({
  name: "franklin",
  phone: 62844159,
  timestamp:"2019-01-10T18:13:12.618Z"
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage

// Get all the contacts
/*app.get('/contacts', function (req, res) {
  if (req.query.name && req.query.name.length > 0) {
    const search_result = my_contact_list.searchBy("name", req.query.name);
   // search_result.slice(0,req.query.limit)
    res.send(search_result);
  } else if (req.query.phone && req.query.phone.length > 0) {
    const search_result = my_contact_list.searchBy("phone", req.query.phone);
    res.send(search_result);
  } else {
    res.send(my_contact_list.getList());
  }
})*/
app.get('/contacts', function (req, res) {
  if (req.query.name && req.query.name.length > 0) {
   /* if ((req.query.limit != undefined && req.query.limit != 0)) {
      const search_result = my_contact_list.limitSearchBy("name", req.query.name, req.query.limit);
      res.send(search_result);
    }
    else {
      const search_result = my_contact_list.searchBy("name", req.query.name);
      res.send(search_result);
    }*/
    if ((req.query.limit != undefined && req.query.limit != 0)) {
      const search_result = my_contact_list.limitSearchBy("name", req.query.name, req.query.limit);
      res.send(search_result);
    }
    else if(req.query.sort=="mr"){
      const search_result = my_contact_list.sortBy("name", req.query.name, req.query.sort);
      res.send(search_result);
    }else if(req.query.sort=="lr"){
      const search_result = my_contact_list.sortBy("name", req.query.name, req.query.sort);
      res.send(search_result);
    }
    else {
      const search_result = my_contact_list.searchBy("name", req.query.name);
      res.send(search_result);
    }
  } else if (req.query.phone && req.query.phone.length > 0) {
     
    const search_result = my_contact_list.searchBy("phone", req.query.phone);
    res.send(search_result);
  
  }
  else {
    res.send(my_contact_list.getList());
  }

});
// Get one contact
app.get('/contacts/:id', function (req, res) {
  // TODO: need some validation
  res.send(my_contact_list.getList()[req.params.id]);
});

// create one contact
app.post('/contacts', function (req, res) {
  // TODO: create a new contact, we can use isValid method
  my_contact_list.add(req.body);
  res.send(my_contact_list.getList());
});


app.delete('/contacts/:id', function (req, res) {
  my_contact_list.removeById(req.params.id);
  res.send(my_contact_list.getList());
});

app.delete('/contacts', function (req, res) {
  my_contact_list.remove(req.params.name);
  res.send(my_contact_list.getList());
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
