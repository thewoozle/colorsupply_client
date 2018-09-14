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
         
         created() {
            this.$store.dispatch('check_login').then(()=>{});
         },
         
         components: {
            'navigation'   : navigation, 
            'page_footer'  : page_footer
         },
         
      }
   </script>
   
   
   <style>   
      @import './assets/css/reset.css';
      @import './assets/css/all.css';
      @import './assets/fonts/fonts.css';
		
		
	/*	-----------------------------------------------------------------------------------------------------
										COLOR GUIDE / theme variables
		-----------------------------------------------------------------------------------------------------	*/	
		:root {
			--mainColor				: #0C0D0F; 		
         --textColor          : #241f1a;
         --backgroundColor    : #fffffc;
         --background2        : #ffffff;
         --background3        : #f8f8f8;
         --lightText          : #ffffff;
         --titleColor         : #00bbff;
         --linkColor          : #afadab;
         --activeLink         : #463a2d;
         --activeColor        : #fbea8c;
         --highlightColor     : #ffe538;
         --borderColor        : #907cff;
         --buttonColor        : #69b5d5;
         --alertColor         : #ec5447;
         --lineColor          : #cdcdd0;
         --grayedoutColor     : #c1c1c1;
	
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
      label,
      .label,
      .nav_link,
      .title.page_title,
      .navigation .nav_dropdown .text,
      .input_message,
      .link {
         font-family: Questrial, sans-serif;
         letter-spacing: .04em;
      }
      
      .title {
         font-family: Oswald, sans-serif;
      }
      
		/*	------	TITLES	------	*/		
      .title {
         display: flex;
         font-weight: 500;
         color: var(--titleColor);
      }
		.site_title {
         font-size: 6rem;
         line-height: 1.25em;
         width: 100%;
         justify-content: center;
         text-transform: uppercase;
         text-align: center;
		}
		.page_title {
         color: var(--textColor);
         justify-content: center;
         text-align: center;
         font-size: 2.5rem;
         width: 100%;
         font-weight: 300;
         line-height: 1.25em;
      }
      
		.page_title .text {
         display: flex;  
         font: inherit;        
         border-bottom: solid 2px var(--titleColor);
		}
      .paragraph_title {
         display: flex;
         width: 100%;
         line-height: 1.5em;         
      }
      .subtitle {
         display: flex;
         font-size: 1.65rem;
         line-height: 1.5em;
         font-weight: bold;
         color: #000;
         letter-spacing: .05em;         
      }
		
		.section_title {
         font-size: 3.5rem;
         line-height: 1em;
         padding: 1rem 0;
         text-transform: uppercase;
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
         color: var(--lightText);
         text-shadow: -1px -1px 1px rgba(0,0,0,0.1);
      }
      .button:disabled {
         pointer-events: none;
         cursor: no-drop;
         opacity: .75;
         filter: grayscale(90%);
      }
      
      .link {
         display: flex;
            flex-wrap: nowrap;
         color: var(--buttonColor);
         border-bottom: var(--lineColor);
      }
		

   
		/*  -----------------------------------------------------------------------------------------------------
											FORM ELEMENTS
			-----------------------------------------------------------------------------------------------------
		*/ 
      
      .form_row {
         position: relative;
         display: flex;
            flex-wrap: wrap;
         width: 100%;
      }
      .form_row + .form_row {
         margin-top: 1rem;
      }
      .form_row .input_wrapper {
         display: flex;
            flex-wrap: wrap;
         width: 20rem;   
      }
      .input_wrapper label {
         display: flex;
         width: 100%;
         padding: .5rem 1rem;
         color: var(--textColor);
         font-size: .95rem;
         line-height: 1em;
      }
      .text_box {
         display: flex;
         width: 100%;
         padding: 1rem;
         background: var(--background2);
         border: solid 1px var(--textColor);
         color: var(--titleColor);
         font-size: 1.1rem;
         line-height: 1em;
      }
      .form_row .input_message {
         position: absolute;
            left: 100%;
            top: 50%;
            z-index: -1;
         opacity: 0;   
         display: flex;
            align-items: center;
         color: var(--alertColor);
         font-size: .95rem;
         width: 24rem;
         padding: 0 0 0 2rem;
         pointer-events: none;
      }
      .form_row .input_message.show {
         z-index: auto;
         opacity: 1;
      }
      
      .form_controls {
         display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
         margin: 2rem 0 0 0;   
         width: 100%;         
      }
      
      .form_controls .links {
         display: flex;
         width: 100%;
         margin: 1rem 0 0 0;
         justify-content: space-around;
      }
      
		
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
         display: flex;
            justify-content: center;
			position: relative;
			width: 100vw;
			min-height: 100vh;
         overflow: hidden;
		}
      .main_content {
         display: flex;
            flex-wrap: wrap;
            justify-content: center;
         width: 100%;
         height: 100%;
         overflow: hidden;
         overflow-Y: auto;
      }
      .main_content .sections {
         display: flex;
            flex-wrap: wrap;
         width: 100%;       
         max-width: 1200px;
         padding: 2rem 0 5rem 0;
      }
      .section,
      .section .section_content {
         display: flex;
         width: 100%;
         margin-top: 3rem;
         flex-wrap: wrap;
      }
      .section .section_element {
         display: flex;
            flex-wrap: wrap;
         margin-top: 2rem;
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
