const Contact = {
  props: ['id'],
  data: function () {
    return {
      contact: {
        fullname: '',
        email: '',
        fname: '',
        lname: '',
        id: ''
      }

    }

  },
  mounted: function () {
    db.collection('contacts').doc(this.id).get()
      .then(doc => {
        if (doc.exists) {

          this.contact.fullname = doc.data().fullname
          this.contact.email = doc.data().email
          this.contact.fname = doc.data().fname
          this.contact.lname = doc.data().lname
        } else {
          console.error('No note found')
        }
      })
  },
  methods: {
    deleteContact: function () {
      db.collection('contacts').doc(this.id).delete()
        .then(() => router.push({ path: '/' }))
    }
  },
  template: `
  
  <section class="row">
  <div class="col-6">
    <router-link class="text-secondary text-decoration-none" to="/">&lt; Contacts</router-link>
  </div>
  <div class="col-6 d-flex justify-content-end">
    <router-link class="btn btn-outline-secondary" :to="'/edit/' + id">Edit</router-link>
  </div>
  <div class="col-12">
    
    <h1 class="display-4">{{contact.fname}} {{contact.lname}}</h1>
    <div class="col-12">
    <ul class="list-group">
    <div class="form-group row">
    <label id="label" class="col-sm-2 col-form-label">Full Name:</label>
    <div class="col-sm-10">
    <li class="list-group-item">
    {{contact.fullname}}
    </div>
    
    <label id="label" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
    <li class="list-group-item">
    {{contact.email}}
    </div>
    </ul>
    </div>
    <br>
    <div class="col-12 d-flex justify-content-end">
      <button class="btn btn-danger" @click="deleteContact">Delete Contact</button>
    </div>
  </div>
</section>`
}