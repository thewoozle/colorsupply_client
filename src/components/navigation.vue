   <template>
      <div class="navigation">
         <button class="nav_button mobile_only"><img src="@/assets/images/menu.svg"/></button>
         <router-link class="nav_link home_link" to="/"><img src="@/assets/images/rainbow_logo.svg"/></router-link> 
         <nav class="menu">
            <router-link class="nav_link create_link" to="/create"><span class="first_letter">C</span>reate</router-link>
            <router-link class="nav_link my_colors_link" to="/mycolors"><span class="first_letter">M</span>y <span class="first_letter">C</span>olors</router-link>
            <router-link class="nav_link premium_link" to="/premium"><span class="first_letter">P</span>remium</router-link>
            <router-link class="nav_link login_link" v-if="" to="/login"><span class="first_letter">L</span>og in</router-link>
            <router-link class="nav_link sign_up_link" to="/signup"><span class="first_letter">S</span>ign up</router-link>
            <router-link class="nav_link account_link" to="/account">Account</router-link>
         </nav>
      </div>       
   </template>

   <script>
   export default {
     name: 'navigation',
     props: {
       
     }
   }
   </script>

   <style >
   .navigation {
      display: flex;
         justify-content: space-between;
         align-items: center;
      width: 100%;
      
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
   .navigation .nav_link .first_letter {
      display: inline-flex;
      font-size: 1.2em;
   }
   
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
