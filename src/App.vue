   <template>
      <div id="app" class="page_wrapper" :class="$route.name">
        <main class="main_content">
        
            <navigation/>
            
            <router-view/>
            
        </main>
        
        <page_footer/>
        
      </div>  
   </template>

   
   <script>
      import page_footer from '@/components/page_footer'
      import navigation from '@/components/navigation'
      
      export default {
         name: 'app',
         
         data() {
            return {
               
            }
         },
         
         components: {
            'navigation'   : navigation, 
            'page_footer'  : page_footer
         },
         
      }
   </script>
   
   
   <style>   
      @import './assets/css/reset.css';
      @import './assets/fonts/fonts.css';
		
		
	/*	-----------------------------------------------------------------------------------------------------
										COLOR GUIDE / theme variables
		-----------------------------------------------------------------------------------------------------	*/	
		:root {
			--mainColor				: #0C0D0F; 		
         --textColor          : #241f1a;
         --backgroundColor    : #fbf9ee;
         --titleColor         : #4eb7d9;
         --linkColor          : #afadab;
         --activeLink         : #463a2d;
         --activeColor        : #fbea8c;
         --borderColor        : #907cff;
         --buttonColor        : #6bb8d4;
	
		}
		
		
		/*  -----------------------------------------------------------------------------------------------------
										COLOR GRADIENTS
			-----------------------------------------------------------------------------------------------------
		*/	
		
		
		/*  -----------------------------------------------------------------------------------------------------
										ANIMATIONS
			-----------------------------------------------------------------------------------------------------
		*/

		 
		/*  -----------------------------------------------------------------------------------------------------
										GENERAL  TYPOGRAPHY
			-----------------------------------------------------------------------------------------------------	*/
		
		* {
         font-family: Merriweather, "adobe-caslon-pro",serif;
         color: var(--textColor);
      }
      a,button,
      .nav_link,
      .link {
         font-family: Questrial, sans-serif;
      }
      
      .title {
         font-family: Oswald, sans-serif;
      }
      
		/*	------	TITLES	------	*/		
      .title {
         display: flex;
         font-weight: 500;
         text-transform: uppercase;
         color: var(--titleColor);
      }
		.site_title {
         font-size: 6rem;
         line-height: 1.25em;
         width: 100%;
         justify-content: center;
         text-align: center;
		}
		.page_title {
         
		}
		
		.section_title {
		}
		/*  -----------------------------------------------------------------------------------------------------
										COMMON STYLES
			-----------------------------------------------------------------------------------------------------    */ 
			
		/*	------------	SCROLL BAR (webkit)	------------	*/	
		::-webkit-scrollbar {
			width: .5rem;
			height: .5rem;
		}
		::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
			background: #151515;
			border-radius: .25rem;
		}
		::-webkit-scrollbar-thumb {
			border-radius: .25rem;
			transform:translateY(.1rem);
			cursor: pointer;
			background: #0c485f;
			-webkit-box-shadow: inset 1px 1px 1rem rgba(33,34,35,0.5),
				2px 2px 5px rgba(0,0,0,0.3); 
		}
		::-webkit-scrollbar-thumb:hover {
			-webkit-box-shadow: inset 1px 1px 1rem rgba(33,34,35,1),
				2px 2px 5px rgba(0,0,0,0.3); 
		}
		
      .mobile_only {
         display: none!important;
      }
      
		.disabled {
			pointer-events: none!important;
			filter: grayscale(.65) blur(1px) !important;
			opacity: .5 !important;
		}
      
      .button {
         display: flex;
            justify-content: center;
            align-items: center;
         padding: .65em 2em;
         font-size: 1.25rem;
         text-transform: uppercase;
         border: solid 1px var(--borderColor);
         border-radius: .1rem;
         background: var(--buttonColor);
         color: #fff;
         text-shadow: -1px -1px 1px rgba(0,0,0,0.1);
      }
		

   
		/*  -----------------------------------------------------------------------------------------------------
											FORM ELEMENTS
			-----------------------------------------------------------------------------------------------------
		*/ 
      
      
		
		/*  -----------------------------------------------------------------------------------------------------
										BASIC PAGE LAYOUT
			-----------------------------------------------------------------------------------------------------    */ 
		body {
			overflow: hidden;
         overflow-y: auto;
         display: flex;
            justify-content: center;
            flex-wrap: wrap;
			background: var(--backgroundColor);
		}	
		.page_wrapper {
			position: relative;
			width: 100vw;
         max-width: 1024px;
			min-height: 100vh;
         overflow: hidden;
		}
      .section,
      .section .section_content {
         display: flex;
         flex-wrap: wrap;
      }
      .section p {
         line-height: 1.15em;
      }
  
		/*  ---------------------------------------------------------------------------------
								RESPONSIVE LAYOUT
			---------------------------------------------------------------------------------  	*/
		
		
		@media (min-width:1536px) { 
		}
		
		@media (min-width:1280px) { /* desktop */ 
			
		}
		
		@media (max-width:1024px) { /* laptop, small desktop */ 
			
		}
		
		@media (max-width:800px) { /* tablet, large phone */ 
			
      .mobile_only {
         display: flex!important;
      }
      .no_mobile {
         display: none!important;
      }
      
			
		}
		
		@media (max-width:400px) { /* small phone */ 
		
		}
	
	
  
  
   </style>
