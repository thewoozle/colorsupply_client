
	<template>
		<div class="sections">
         <section class="section signup_section">
            <div class="section_content">
               {{formMessages}}
               <span class="title page_title"><span class="text">Lets Get Started</span></span>
               <div class="section_element login_form">
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label  class="label">First Name</label>
                        <input type="text" class="text_box" v-model="formData.first_name" @keyup="formMessages.first_name? $store.dispatch('clear_form_messages', 'first_name') : ''" />
                     </div>
                     <span class="input_message" :class="formMessages.first_name? 'show' : ''">{{formMessages.first_name}} </span>
                  </div>
                  <div class="form_row">
                     <div class="input_wrapper" >
                        <label  class="label">Last Name</label>
                        <input type="text" class="text_box" v-model="formData.last_name"  @keyup="formMessages.last_name? $store.dispatch('clear_form_messages', 'last_name') : '' " />
                     </div>
                     <span class="input_message"  :class="formMessages.last_name? 'show' : ''">{{formMessages.last_name}} </span>
                  </div>
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label  class="label">Email Address</label>
                        <input type="text" class="text_box" v-model="formData.email"  @keyup="formMessages.email? $store.dispatch('clear_form_messages', 'email') : '' "  />
                     </div>
                     <span class="input_message"   :class="formMessages.email? 'show' : ''" >{{formMessages.email}}</span>
                  </div>
                  
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label class="label">Password</label>
                        <input type="password" class="text_box" v-model="formData.password" @keyup="formMessages.password? $store.dispatch('clear_form_messages', 'password') : '' "  />
                     </div>
                     <span class="input_message"  :class="formMessages.password? 'show' : ''" >{{formMessages.password}}</span>
                  </div>
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label class="label">Confirm Password</label>
                        <input type="password" class="text_box" v-model="formData.conf_password" />
                     </div>
                     <span class="input_message show" v-if="formData.password != formData.conf_password">Oops! Must match password</span>
                  </div>
                  <div class="form_controls">
                     <button class="button" :disabled = "check_form()" @click.prevent="process_login"> Log In</button>
                     <div class="links">
                        <router-link class="link" to="/forgot">Forgot Password?</router-link>
                     </div>   
                  </div>   
               </div>
            </div>
            
            
         
         </section>
		
		</div>
	</template>
	
	<script>
			import Vue from 'vue'
			import { mapGetters, mapState } from 'vuex'
			
			export default{
				name: 'signup',
				
				data() {
					return{
                  formData    : {},
					}
				},
				
				watch: {
					
				},
				
				computed: {
					...mapState({
						formMessages: 'formMessages',
					}),
				},
				
				created() {
					
				},
				methods: {
					check_email(e) {
                  var vm = this;
                  vm.$store.dispatch('check_email', e.target.value).then((response)=>{
                     if(response == e.target.value) {
                        vm.formMessages['email'] = 'Oops! That email is already taken.';
                     }
                  });
                  vm.$forceUpdate();    
               },
               
               process_login() {
                  var   vm = this;
                  vm.$store.dispatch('process_signup', vm.formData).then((response)=>{
                     console.log(response);
                     response.uuid? vm.$router.push('/create') : '';   
                  },(err) =>{
                     console.log(err);
                  });
               },
               
               check_form() {
                  var   vm = this
                  if(Object.keys(vm.formData).length < 5 || vm.formData.password != vm.formData.conf_password) {
                     return true;
                  } else {   
                     return false;
                  }
               }   
				}
			}
	
	</script>
	
	<style>
   
      .signup_section .login_form {
         display: flex;         
            justify-content: center;
         width: 100%;
         max-width: 18rem;
         margin: 2rem auto;
      }
   
	
	</style>