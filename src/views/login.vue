
	<template>
		<div class="sections">
         <section class="section login_section">
            <div class="section_content">
               <span class="title page_title"><span class="text">Log In</span></span>
               
               <div class="section_element login_form">
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label  class="label">Email Address</label>
                        <input type="text" class="text_box" v-model="formData.email" />
                     </div>
                     <span class="input_message" v-if="formErrors.email">Oops! That email address is not recognized.</span>
                  </div>
                  
                  <div class="form_row">
                     <div class="input_wrapper">
                        <label class="label">Password</label>
                        <input type="password" class="text_box" v-model="formData.password"  @keyup="$delete(formErrors, 'password')"/>
                     </div>
                     <span v-if="formErrors.password" class="input_message" :class="formErrors.password? 'show' : ''"  >Password not recognized.</span>
                  </div>
                  
                  <div class="form_controls">
                     <button class="button" :disabled = "Object.keys(formData).length < 2" @click.prevent="process_login"> Log In</button>
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
				name: 'login',
				
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
                  userInfo : 'userInfo',
						
					}),
				},
				
				created() {
               this.check_login();
					
				},
				methods: {
					
               check_login() {
                  var vm = this;
                  vm.userInfo.user_name? vm.$router.push('/') : '';                  
               },
               
               process_login() {
                  var   vm = this;
                  vm.$store.dispatch('process_login', vm.formData).then((response)=>{  
                     response.message? vm.formErrors = response.message : '';
                     response.userInfo? vm.$router.push('/create') : '';
                  });
                  
                    
               }
				}
			}
	
	</script>
	
	<style>
      .login_section .login_form {
         display: flex;         
            justify-content: center;
         width: 100%;
         max-width: 18rem;
         margin: 2rem auto;
      }
	</style>