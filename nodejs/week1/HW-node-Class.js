class Person {
    
    constructor(name,age){
    this.name=name
    this.age=age
    
}
birthday(){
    return ` Wishing ${this.name} a happy ${this.age+1} birthday!.`
}
addPhone(phoneno)
{
    
    this.phoneno=phoneno;
   
}
call(){
    let showPhoneNo=this.phoneno
   
    if (showPhoneNo!= undefined){
        return ` Calling ${this.name} at ${this.phoneno}`
    }
    else{
        return ` ${this.name} no phone number saved!`
    }
   
}
};


let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
console.log(jimmy.call())


jimmy.birthday()
console.log(jimmy.birthday())

let jill = new Person("Jill");

jill.call();
console.log(jill.call())
