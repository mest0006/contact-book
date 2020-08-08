const New = {
  data: function () {
    return {
      fname: '',
      lname: '',
      email: '',
      fullname: ''
    }
  },
  methods: {
    addContact: function () {
      db.collection('contacts').add({
        fullname: this.fullname,
        fname: this.fname,
        lname: this.lname,
        email: this.email

      }).then(doc => router.push({ path: '/contact/' + doc.id }))
    }
  },
  template: `
  <section class="row">
    <div class="col-12">
      <h1 class="display-4">New Contact</h1>
    <form @submit.prevent="addContact">
    <div class="form-row">
    <div class="col form-group col-md-9 ">
      <input type="text" class="form-control my-3" placeholder="Full Name" v-model="fullname">
      </div>
      <div class="col form-group col-md-9 ">
      <input type="text" class="form-control my-3" placeholder="First Name" v-model="fname">
      </div>
      <div class="col form-group col-md-9">
      <input class="form-control my-3" placeholder="Last Name" v-model="lname">
      </div>
      <div class="col form-group col-md-9">
      <input class="form-control my-3" placeholder="Email" v-model="email">
      </div>
    </div>
    <button class="btn btn-primary mr-3">Add Contact</button>
    <router-link to="/">Cancel</router-link>
  </form>
    </div>
  </section>
  `
}
