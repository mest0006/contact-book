const Edit = {
  props: ['id'],
  data: function () {
    return {
      fullname: '',
      fname: '',
      lname: '',
      email: ''
    }
  },
  mounted: function () {
    db.collection('contacts').doc(this.id).get()
      .then(doc => {
        if (doc.exists) {
          this.fullname = doc.data().fullname,
            this.fname = doc.data().fname,
            this.lname = doc.data().lname,
            this.email = doc.data().email
        } else {
          console.error('No note found')
        }
      })
  },
  methods: {
    updateContact: function () {
      db.collection('contacts').doc(this.id).update({
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        fullname: this.fullname

      }).then(() => router.push({ path: '/contact/' + this.id }))
    },
    deleteContact: function () {
      db.collection('contacts').doc(this.id).delete()
        .then(() => router.push({ path: '/' }))
    }
  },
  template: `
  <section class="row">
   
    <div class="col-12">
      <h1 class="display-4">{{fullname}}</h1>
    </div>
    <div class="col-12">
      <form @submit.prevent="updateContact">
      <input type="text" class="form-control my-3" v-model="fullname">
        <input type="text" class="form-control my-3" v-model="fname">
        <textarea class="form-control my-3" v-model="lname"></textarea>
        <textarea class="form-control my-3" v-model="email"></textarea>
        <button class="btn btn-primary mr-3">Update Contact</button>
        <router-link to="/">Cancel</router-link>
      </form> 
    </div>
  </section>
  `
}
