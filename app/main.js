const app = new Vue({
  el: '#form',
  data: {
    errors: [],
    password: null
  },
  methods:{
    checkForm: function (e) {
      if(this.password != "test") {
        this.errors.push("Password wrong.");
      }

      e.preventDefault();
    }
  }
})