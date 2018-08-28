
	<template>
		<div class="sections">
         <section class="section signup_section">
            <div class="section_content">
               <span class="title page_title"><span class="text">Lets Get Started</span></span>
               {{formErrors}}
               <div class="section_element login_form">
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label  class="label">First Name</label>
                        <input type="text" class="text_box" v-model="formData.first_name" />
                     </div>
                     <span class="input_message" v-if="formErrors.first_name" :keyup="delete formErrors['first_name']"> Oops! please provide a first name.</span>
                  </div>
                  <div class="form_row">
                     <div class="input_wrapper" >
                        <label  class="label">Last Name</label>
                        <input type="text" class="text_box" v-model="formData.last_name" />
                     </div>
                     <span class="input_message"  v-if="formErrors.last_name" :keyup="delete formErrors['last_name']">Please give me a name.</span>
                  </div>
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label  class="label">Email Address</label>
                        <input type="text" class="text_box" v-model="formData.email" />
                     </div>
                     <span class="input_message"   v-if="formErrors.email? 'show' : ''" :keyup="delete formErrors.email">Oops! That email address is already taken.</span>
                  </div>
                  
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label class="label">Password</label>
                        <input type="password" class="text_box" v-model="formData.password" />
                     </div>
                     <span class="input_message"  :class="formErrors.password? 'show' : ''" :keyup="delete formErrors.password" v-text="formErrors.password"></span>
                  </div>
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label class="label">Confirm Password</label>
                        <input type="password" class="text_box" v-model="formData.conf_password" />
                     </div>
                     <span class="input_message" v-if="formData.password != formData.conf_password">Oops! Must match password</span>
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
			import { mapGetters } from 'vuex'
			
			export default{
				name: 'signup',
				
				data() {
					return{
                  formData    : {},
                  formErrors  : {},
					}
				},
				
				watch: {
					
				},
				
				computed: {
					...mapGetters({
						
					}),
				},
				
				created() {
					
				},
				methods: {
					
               process_login() {
                  var   vm = this;
                  vm.$store.dispatch('process_signup', vm.formData).then((response)=>{
                   //  if(response) {
                        console.log(response);
                    // }
                    // vm.userInfo.email? vm.$router.push('/create') : '';                      
                  },(err) =>{
                     console.log(err);
                 //    vm.formErrors = err.errors;
                     
                     
                     Object.entries(err.errors).forEach((error) => {
                        vm.formErrors[error[0]]  = error[1][0];                        
                     });
                     console.log(vm.formErrors);
                  });
                  vm.$forceUpdate();
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