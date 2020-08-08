const Contacts = {
  data: function () {
    return {
      contacts: [],
      search: ''
    }
  },
  mounted: function () {
    var contacts = db.collection('contacts').orderBy('lname').onSnapshot(snapshot => {
      const data = []
      snapshot.forEach(doc => data.push({
        fullname: doc.data().fullname,
        email: doc.data().email,
        fname: doc.data().fname,
        lname: doc.data().lname,
        id: doc.id
      }))
      this.contacts = data
      console.log(data)
    })



  },
  computed: {
    searchContacts: function () {
      return this.contacts.filter((contact) => {
        return contact.fullname.match(this.search)

      })

    }
  },
  template: `
  
  
  <section class="row">
  <div class="col-12 d-flex justify-content-end">
    <router-link class="btn btn-outline-primary" to="/new">+</router-link>
  </div>
  <div class="col-12" >
    <h1 style="text-align:center"class="display-4">Contacts</h1>
  </div>  


  <div class="col-12">
    <ul class="list-group">
    <input style="font-size:25px;"  class="form-control  form-control-lg"
    v-model="search" 
    type="search" placeholder="Search" aria-label="Seaerch"> 
    <br>
    
      <li class="list-group-item" v-for="contact in searchContacts">
      <input type="hidden" v-model="contact.fullname">
        <router-link style="font-size:25px;" class="text-secondary text-decoration-none"  :to="'/contact/' + contact.id">{{ contact.fname }} {{ contact.lname}}</router-link>
      </li>
    </ul>
  </div>
</section>
  
  
  
  
  
  <div class="container"> 
  <div class="account-box">
  <div class="d-flex flex-row-reverse">
  <router-link class="btn btn-outline-secondary" to="/new">+</router-link>
</div>
  <section class="row">
<h1 class="display-4"> Contacts</h1> 


      <div class="col-12">
      <div class="wrapper-page">
     
   

    
      <div class="col-12">
<ul class="list-group">
<li class="list-group-item" v-for="contact in contacts">
<router-link :to="'/contact/' + contact.id "> {{contact.fname}} {{contact.lname}}  </router-link>

</li>
</ul>
</div>
</div>
</div>
</div>
</div>
    </section>
  
  `
};