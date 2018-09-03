   import Vue from 'vue'
   import Vuex from 'vuex'   
	import Axios from 'axios'
	import VueAxios from 'vue-axios'   
   import {exampleDesigners} from './example_designers'
   
	import {apiDomain} from '../config'
	

   Vue.use(Vuex)
	Vue.use(VueAxios, Axios);
      
   const state = {
      userInfo          : {},    
      formMessages      : {},
      exampleDesigners  : exampleDesigners,
   }
   
   const actions = {
      
      process_login({commit}, formData) {
         var   vm = this;
         Axios.post(apiDomain+'_login', formData).then((response) => {	
         }, (err) => {
				  console.log('error: '+err.statusText);
         });
      },
      
      
      process_signup({commit}, formData) {
         var   vm = this,
               response;
               
         return new Promise((resolve, reject) => {
               
            Axios.post(apiDomain+'_signup', formData).then((response) => {		
            
               if(response.data.returnUser) {
                  resolve(response.data.returnUser);
                  var info = response.data.returnUser;
                  console.log(info);
                  commit('set_user_info', info);
               } else {
                  commit('set_form_messages', response.data.errors);    
               }
             }, (err) => {		
               commit('set_form_messages', err.response.data.errors);                  
            });
         });
      },
      
      clear_form_messages({commit}, target) {
         console.log(target);
         commit('clear_form_message', target);
      },
      
      
      
   }
   
   const mutations = {
      set_form_messages: (state, messages) => {
         
         Object.entries(messages).forEach((message) => {
            
            switch(message[0]) {
               case 'first_name' : 
                  Vue.set(state.formMessages, 'first_name', 'Oops! Please give me a first name');
                  break;
                  
               case 'last_name' : 
                  Vue.set(state.formMessages, 'last_name', 'Oops! Please give me a last name');
                  break;
                  
               case 'email' : 
                  Vue.set(state.formMessages, 'email', message[1][0].trim());
                  break;
                  
               case 'password' : 
                  Vue.set(state.formMessages, 'password', message[1][0].trim());
                  break;
                  
                  
            }
         });
               
      },
      
      clear_form_message: (state, target) => {
         Vue.delete(state.formMessages, target);
      },
      
      set_user_info: (state, info) => {
         Vue.set(state, 'userInfo', info);
      },
      
   }
   
   

   const getters = {
      userInfo		   : state => state.userInfo,
   }
   
   export default new Vuex.Store ({
      state,
      getters,
      actions,
      mutations
   })
   
   
   