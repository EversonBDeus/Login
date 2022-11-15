<template>
    <div v-if="login == true" class="card-login  ">
        <h1 class="card-name">Entrar</h1>
      <div class="inputBox">
        <input type="email" required="required">
        <span>Email</span>
      </div>

      <div class="inputBox">
        <input type="password" required="required">
        <span>Senha</span>
      </div>
      <a href="#" class="btn">Entrar Agora<span><ion-icon name="arrow-forward-outline"></ion-icon></span></a>
        <p>Ou</p>
        <a href="#" class="btn" @click="login = !login">Cadastrar<span><ion-icon name="create-outline"></ion-icon></span></a>
    </div>


    <div  v-show="login == false" class="card-login  animate__animated animate__bounceIn" >
        <div v-if="erro != undefined"  class="erro">
          <p>{{erro}}</p>
        </div>
        <h1 class="card-name">Cadastrar Usuário</h1>
      <div class="inputBox">
        <input type="text" required="required" v-model="name">
        <span>Nome</span>
      </div>

      <div class="inputBox">
        <input type="email" required="required" v-model="email">
        <span>E-mail</span>
      </div>

      <div class="inputBox">
        <input type="password" required="required" v-model="password">
        <span>Senha</span>
      </div>

      <a href="#" @click="register" class="btn">Cadastrar<span><ion-icon name="create-outline"></ion-icon></span></a>
    </div>




    </template>
    
    <script>
    
    import axios from 'axios'
    export default {
    name:'RegisterUser',
     data (){
        return{
            login:true,
            name:'',
            password:'',
            email:'',
            erro:undefined
        }
     },
     methods: {
      register(){
        axios.post("http://localhost:8686/user",{
          name: this.name,
          password:this.password,
          email:this.email
        }).then(res=> {
          this.$router.push({name:'myTeste'})
     

          console.log(res)
        }).catch(err=> {
          var msgErro = err.response.data.err
          this.erro = msgErro
          console.log(msgErro)
        })
      console.log(this.name)
      console.log(this.email)
      console.log(this.password)
     }
     }
    
    }
    </script>
    
<style scoped>

.card-name{
color: #fff;  
}
.card-login{
 display: flex;
justify-content: center;
align-items: center;
padding: 6rem;
background: #000409;
border: 1px solid #fff;
border-radius:5px ;
flex-direction: column;
gap:30px;
}

.card-cadastro{
 display: flex;
justify-content: center;
align-items: center;
padding: 6rem;
background: #000409;
border: 1px solid #fff;
border-radius:5px ;
flex-direction: column;
gap:30px;
text-align: center;
}
.inputBox 
{
position: relative;
width: 250px;
 
}
.inputBox input{
width:100%;
padding:10px;
border: 1px solid rgba(255,255,2555,0.25);
background: #1d2b3a;
border-radius:5px;
outline: none;
color:#fff;
font-size:1em;
transition: 0.5s;
}
.inputBox span{
position: absolute;
left:0;
padding:10px;
pointer-events: none;
font-size:1em;
color:  rgba(255,255,2555,0.25);
text-transform: uppercase;
transition: 0.5s;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span 
{
color: #00dfc4;
transform: translateX(10px) translateY(-6px);
font-size:0.80em;
padding:0 10px;
background: #1d2b1d;
border-left:1px solid #00dfc4 ;
border-right:1px solid #00dfc4 ;
letter-spacing: 0.2em;
}
.inputBox:nth-child(2) input:valid ~ span,
.inputBox:nth-child(2) input:focus ~ span 
{
background: #00dfc4;
color: #1d2b1d;
border-radius: 2px;
}
.inputBox input:valid,
.inputBox input:focus {
border: 1px solid #00dfc4;
}
.card-login p{
    color:#fff;
    font-size:0.75em;
}
.btn{
position: relative;
width: 250px;
height: 40px;
background: #1d2b3a;
border-radius: 60px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
text-decoration: none;
letter-spacing: 2px;
border-top: 0.5px solid rgba(255,255,255,0.35);
border-left: 0.5px solid rgba(255,255,255,0.35);
padding-left:05px;
transition: 0.5s;
overflow: hidden
}
.btn:hover {
padding-left:0px;
padding-right:40px;
color:  rgba(255,255,255,1);
}
.btn span {
    position: absolute;
    left: 5px;
    height:35px;
    width:35px;
    background-color: #00dfc4;
    border-radius:50%;
    transition: 0.5s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
color: #1a191d;
font-size:1.5em;

}
.btn:hover span{
    left: calc(100% - 50px)
}
.btn:after{
   content:' ';
   position: absolute;
   width: 80px;
   height: 100%;
   z-index: 1;
   background-color:rgba(255,255,255,0.5);
   transform: translateX(-190px) skew(30deg);
   transition: 0.75s ease-in-out;

}
.btn:hover:after{
    transform: translateX(190px) skew(30deg);
}
.erro{
  padding:10px;
  border: 1px solid rgb(242, 242, 242);
  border-radius:5px ;
  background-color:rgb(255, 0, 0);
}
.erro p{
  font-size:0.8em;
  font-weight:bold;
}
  
    </style>
    