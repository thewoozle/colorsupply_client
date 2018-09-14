   <template>  
      <div class="navigation">
         <button class="nav_button mobile_only"><img src="@/assets/images/menu.svg"/></button>
         <router-link class="nav_link home_link" to="/"><img src="@/assets/images/rainbow_logo.svg"/></router-link> 
         <nav class="menu">
            <router-link class="nav_link create_link" to="/create"><span class="first_letter">C</span>reate</router-link>
            <router-link class="nav_link my_colors_link" v-if="userInfo.uuid"  to="/mycolors"><span class="first_letter">M</span>y <span class="first_letter">C</span>olors</router-link>
            <router-link class="nav_link premium_link" to="/premium"><span class="first_letter">P</span>remium</router-link>
            <router-link class="nav_link login_link" v-if="!userInfo.uuid" to="/login"><span class="first_letter">L</span>og in</router-link>
            <router-link class="nav_link sign_up_link" v-if="!userInfo.uuid" to="/signup"><span class="first_letter">S</span>ign up</router-link>
            <div class="nav_dropdown" >
               <div class="name" @click.prevent="navDropdown? navDropdown = false : navDropdown = true">
                  <span class="text" v-text="userInfo.first_name"></span>
                  <i class="icon fal fa-chevron-down" ></i>
               </div>
               <div class="dropdown" v-if="userInfo" :class="navDropdown? 'show' : ''">
                  <router-link class="nav_link upgrade_link" @click="navDropdown = false" to="/upgrade">Upgrade</router-link>
                  <router-link class="nav_link account_link" @click="navDropdown = false" to="/account">Account</router-link>
                  <router-link class="nav_link logout_link" @click="navDropdown = false" to="/" @click.native="$store.dispatch('logout')">Log Out</router-link>
               </div>
            </div>
            
         </nav>
      </div>       
   </template>

   <script>
   
      import Vue from 'vue'
      import {mapState} from 'vuex'
       
      export default {
        name: 'navigation',
        props: {
          
        },
        
        data() {
         return {
            navDropdown : false,  
         }
        },
        
        computed: {
           ...mapState({
              userInfo: 'userInfo'
           })
        },
        
        methods: {
        },
      }
   </script>

   <style >
      .navigation {
         display: flex;
            justify-content: space-between;
            align-items: center;
         width: 100%;
         height: 4rem;
         max-width: 1200px;
      }
      .navigation .menu {
         display: flex;
            align-items: center;
      }
      .navigation .nav_button {
         display: flex;
      }
      
      .navigation .nav_link {
         color: var(--linkColor);
         font-size: 1.35rem;
         border-bottom: solid 1px transparent;
      }
      .navigation .nav_dropdown .dropdown .nav_link:hover,
      .navigation .nav_link:hover {
         background: var(--buttonColor);
      }
      .navigation .nav_link .first_letter {
         display: inline-flex;
         font-size: 1.2em;
      }      
      .navigation .nav_link + .nav_dropdown,
      .navigation .nav_link + .nav_link {
         margin-left: 2rem;
      }
      
      .create_view .create_link,
      .my_colors_view .my_colors_link,
      .premium_view .premium_link,
      .login_view .login_link,
      .sign_up_view .sign_up_link,
      .account_view .account_link {
         color: var(--activeLink);
         border-color: var(--titleColor);
      }
      
      .navigation .nav_dropdown {
         position: relative;
      }
      .navigation .nav_dropdown .name  {
         position: relative;
         display: flex;
            justify-content: space-between;
         width: auto;
         cursor: pointer;
      }
      .navigation .nav_dropdown .icon {
         display: flex;
         margin-left: .5rem;
      }
      .navigation .nav_dropdown .dropdown {
         position: absolute;
            top: 100%;
            left: 0;
            z-index: 10;
         display: flex;
            flex-direction: column;
         max-height: 0;
         width: 6rem;
         overflow: hidden;
         transition: max-height .4s;
      }
      .navigation .nav_dropdown .dropdown.show {
         max-height: 6rem;
      }
      
      .navigation .nav_dropdown .nav_link {
         width: 100%;
         padding: .25rem .5rem;
         font-size: .95rem;
         background: var(--background3);         
      }
      .navigation .nav_dropdown .nav_link + .nav_link {
         margin-left: 0;
         border-top: solid 1px var(--borderColor);
      }
      
      
      
      
      
   
      /*  ---------------------------------------------------------------------------------
                        RESPONSIVE LAYOUT
         ---------------------------------------------------------------------------------  	*/
      
      
      @media (min-width:1536px) { 
      }
      
      @media (min-width:1025px) { /* desktop */ 
         .navigation {
            margin-top: 1rem;
         }
      }
      
      @media (max-width:1024px) { /* laptop, small desktop */ 
         
      }
      
      @media (max-width:800px) { /* tablet, large phone */ 
         
         .page_header .signin_button {
            display: flex;
         }
      }
      
      @media (max-width:400px) { /* small phone */ 
      
      }
   
	

   </style>
