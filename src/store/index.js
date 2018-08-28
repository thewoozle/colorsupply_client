   import Vue from 'vue'
   import Vuex from 'vuex'   
	import Axios from 'axios'
	import VueAxios from 'vue-axios'   
   
	import {apiDomain} from '../config'
	

   Vue.use(Vuex)
	Vue.use(VueAxios, Axios);
      
   const state = {
      userInfo : {}, //{'user_name': 'michael'},   
      
      
   }
   
   const actions = {
      
      
      process_login({commit}, formData) {
         var   vm = this;
         Axios.post(apiDomain+'_login', formData).then((response) => {		
            console.log(response.data);
            //commit('set_location', location);          
         }, (err) => {
				  console.log('error: '+err.statusText);
         });
      },
      
      
      process_signup({commit}, formData) {
         var   vm = this,
               response;
               
         return new Promise((resolve, reject) => {
               
            Axios.post(apiDomain+'_signup', formData).then((response) => {		
               console.log(response.data);
               
               resolve(response.data);
               //commit('set_location', location);          
             }, (err) => {
               reject(err.response.data);
            });
         });
      }
      
      
      
   }
   
   const mutations = {
      
      
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
   
   
   