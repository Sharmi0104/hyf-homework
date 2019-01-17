import express from "express";
import bodyParser from "body-parser";
import ContactList from "./contactList";

const app = express()

const my_contact_list = new ContactList();

my_contact_list.add({
  name: "marco",
  phone: 42838188,
  timestamp:new Date()
})

my_contact_list.add({
  name: "frank",
  phone: 42838199,
  timestamp:"2019-01-15T17:13:12.618Z"
})

my_contact_list.add({
  name: "federica",
  phone: 82844159,
  timestamp:"2019-01-17T13:13:12.618Z"
})
my_contact_list.add({
  name: "max",
  phone: 52844159,
  timestamp:"2019-01-10T13:13:12.618Z"
})
my_contact_list.add({
  name: "franklin",
  phone: 62844159,
  timestamp:"2019-01-10T18:13:12.618Z"
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());



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

})
// Get one contact
app.get('/contacts/:id', function (req, res) {
  // TODO: need some validation
  res.send(my_contact_list.getList()[req.params.id]);
})

// create one contact
app.post('/contacts', function (req, res) {  
  my_contact_list.add(req.body)
  res.send(my_contact_list.getList());
})


app.delete('/contacts/:id', function (req, res) {
  my_contact_list.removeById(req.params.id);
  res.send(my_contact_list.getList());
})

app.delete('/contacts', function (req, res) {
  my_contact_list.remove(req.params.name);
  res.send(my_contact_list.getList());
})




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})