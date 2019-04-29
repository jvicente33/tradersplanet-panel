<template>
  <div class="columns" >

    <div class="column is-one-third master" v-if="show==1">

      <section class="section">
        <!--<div class="has-text-centered">
            <img class="login-logo" src="img/logo.svg">
        </div>-->

        <p class="title is-3 has-text-centered">¡Bienvenido!</p>

        <b-field>
          <b-input placeholder="Username"
                type="text"
                icon-pack="fas"
                icon="user"
                maxlength="12"
                min="5"
                rounded>
            </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="Contraseña"
                type="password"
                icon-pack="fas"
                icon="key"
                password-reveal
                rounded>
            </b-input>
        </b-field>

        <div class="has-text-centered">
          <a @click="go('dashboard')" class="button is-vcentered is-primary is-outlined is-rounded">Iniciar Sesión</a>
        </div>
        <!--<div class="has-text-centered">
          <a @click="changeShow(2)">Registrar</a>
        </div>-->
      </section>
    </div>

    <div class="column is-one-third master" v-if="show==2">
      <section class="section">
        <!--<div class="has-text-centered">
            <img class="login-logo" src="img/logo.svg">
        </div>-->

        <p class="title is-3 has-text-centered">¡Únete!</p>
        
        <b-field>
          <b-input placeholder="Nombre"
                type="text"
                icon-pack="fas"
                icon="user-circle"
                maxlength="20"
                rounded>
            </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="Apellido"
                type="text"
                icon-pack="fas"
                icon="user-circle"
                maxlength="20"
                rounded>
            </b-input>
        </b-field>
        
        <b-field>
          <b-input placeholder="Correo Electronico"
                type="email"
                icon-pack="fas"
                icon="at"
                maxlength="50"
                rounded>
            </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="Username"
                type="text"
                icon-pack="fas"
                icon="user"
                maxlength="12"
                rounded>
            </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="Contraseña"
                type="password"
                icon-pack="fas"
                icon="key"
                password-reveal
                rounded>
            </b-input>
        </b-field>

        <div class="has-text-centered">
          <a class="button is-vcentered is-primary is-outlined is-rounded">Guardar</a>
        </div>
        <div class="has-text-centered">
          <a @click="changeShow(1)">Iniciar Sesión</a>
        </div>
      </section>
    </div>

    <!--id="particles-js"-->
    <div  class="interactive-bg column master submaster">
      <img class="login-logo" src="logo.png">
    </div>
  </div>
</template>

<script>


export default {
  name: "login",
  data() {
    return {
      show: 1
    };
  },
  methods: {
    changeShow(number) {
      this.show = number;
    },

    clearRegister() {
      this.register.name = "";
      this.register.email = "";
      this.register.nit = "";
      this.register.username = "";
      this.register.password = "";
    },

    go(route) {
      this.$router.push({ name: route });
    },

    validateInput(array) {
        let aux = true;

        for (let i in array) {
            if (array[i] == "") {
            aux = false;
            //notify(this, "E007");
            return aux;
            } 
        }

        return aux;
    }


  }
};
</script>

<style scoped>


.master{
  display: flex;
  justify-content: center;
  align-items: center;
}

/*.submaster{
  background-image: url("/img/2144.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}*/


@keyframes animar{
    from{
      transform: scale(0.8);
    }
    to{
      transform : scale(1.1);
    }
}

.login-logo {
  width: 350px;

  /*animation-duration: 5s;
  animation-name: animar;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;*/
  
}

.interactive-bg {
  height: 100vh;
  background-color: #f5f5f5;
  -webkit-box-shadow: inset 24px 4px 64px -24px rgba(0,154,61,0.6);
  -moz-box-shadow: inset 24px 4px 64px -24px rgba(0,154,61,0.6);
  box-shadow: inset 24px 4px 64px -24px rgba(0,154,61,0.6);
  padding: 0px;
}
@media (max-width: 769px) {
  .interactive-bg{
    display: none
  }
}

.button {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
}



</style>




