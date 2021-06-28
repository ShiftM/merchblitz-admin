<template>
  <main id="login">
    <div class="app flex-row align-items-center ng-scope">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card-group">
              <div class="card login-form p-4">
                <div class="card-body text-center">
                  <img src="/img/qr-logo.png" alt="" class="w-100" />

                  <form @submit.prevent="login()">
                    <p class="text-muted">Sign In to your account</p>
                    <p
                      class="text-danger"
                      v-if="error"
                    >
                      {{ error }}
                    </p>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="icon-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        :class="{
                          'error-border':
                            error,
                        }"
                        placeholder="Username"
                        v-model="data['user-name']"
                      />
                    </div>
                    <div class="input-group mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="icon-lock"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        :class="{
                          'error-border':
                            error,
                        }"
                        placeholder="Password"
                        v-model="data.password"
                      />
                    </div>
                    <button class="btn btn-primary w-100 px-4">Login</button>
                    <!-- <div class="row">
                      <div class="col-6">
                        <button class="btn btn-primary w-100 px-4">Login</button>
                      </div>
                      <div class="col-6 text-right">
                        <button type="button" class="btn btn-link px-0">Forgot password?</button>
                      </div>
                    </div> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AdminServices from "../../services/admin/login.service";
import AlertServices from "../../services/alert/alert.service";
const alert = new AlertServices();
const admin = new AdminServices();

export default {
  data: () => {
    return {
      data: {},
      error: null,
    };
  },
  methods: {
    login() {
      this.$swal({
        title: "Loading...",
        text: "Please wait.",
        icon: "/img/loader.gif",
        button: false,
        closeOnClickOutside: false,
      });
      this.error = {};

      return this.requestLogin(this.data);

      // return admin
      //   .login(this.data)
      //   .then((response) => {
      //     console.log(response);
      //     localStorage.setItem("auth_token", response.data.data.token);
      //     location.href = "/events";
      //   })
      //   .catch((fail) => {
      //     // localStorage.setItem("auth_token", '9IixVbq0XzI29x6GLWE94OChJiSW2uuJSJWl0xCa');
      //     // location.href = "/events";
      //     this.$swal.close();
      //     this.error = fail;
      //     // console.log(fail);
      //   });
    },

    async requestLogin(payload) {
      if (payload) {
        let formBody = [];
        for (let property in payload) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(payload[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        // POST request using fetch with error handling
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        };
        await fetch(api_url + "/api/login", requestOptions)
          .then((res) => res.text())
          .then((responseData) => {
            if (responseData.indexOf(" ") >= 0) {
              this.$swal.close();
              this.error = responseData;
            } else {
              localStorage.setItem("auth_token", responseData);
              location.href = "/users";
            }
          })
          .catch((err) => {
            this.$swal.close();
            this.error = err;
          });
      }
    },
  },
};
</script>
