   import Vue from 'vue'
   import Vuex from 'vuex'

   Vue.use(Vuex)
      
   const state = {
      userInfo : {'username': 'michael'},        
      
   }
   
   const actions = {
      
      
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
   
   
   