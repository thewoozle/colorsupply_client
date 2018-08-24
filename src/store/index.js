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
         var   vm = this,
               _formData = new FormData();
          
         Object.entries(formData).forEach((item)=>{
            console.log(item[0], item[1]);
            _formData.append(item[0], item[1]);	
         });
         
         console.log(_formData);
         //Axios.post(apiDomain+'_login', _formData, formData, {
         Axios.post(apiDomain+'pauth/token', _formData, formData, {
               headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then((response) => {		
            console.log(response.data);
            //commit('set_location', location);          
         }, (err) => {
				  console.log('error: '+err.statusText);
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
   
   
   