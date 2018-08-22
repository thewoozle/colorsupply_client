
	<template>
		<div class="home_view sections">
         <section class="section introduction ">
            <div class="section_content">
               <span class="title site_title">Color Supply</span>
               
               <P>The best color combinations from designers &amp; illustrators around the world.</p>
               
               <div class="buttons">
                  <button type="button" class="button  call_to_action"> Launch</button>
               </div>   
            </div>
         </section>
         
         
         <section class="section instructions">
         
         </section>
         
         <section class="section pros_colors">
         
         </section>
         
         
         <section class="section pick_colors">
         
         </section>
         
         
         <section class="section pick_best_icons">
         
         </section>
		
		</div>
	</template>
	
	<script>
			import Vue from 'vue'
			import { mapState } from 'vuex'
			
			export default{
				name: 'home_view',
				
				data() {
					return{
					
					}
				},
				
				watch: {
					
				},
				
				computed: {
					...mapState({
						userInfo  : 'userInfo',
					}),
				},
				
				created() {
					
				},
				methods: {
					
				}
			}
	
	</script>
	
	<style>
   .home_view .section_content {
      justify-content: center;
      padding: 6rem 0 4rem 0;
   }
   .home_view .section p {
      display: flex;
         justify-content: center;
         text-align: center;
      width: 100%;
      line-height: 1.5em;
      max-width: 50rem;
      font-size: 1.75rem;
      font-weight: 300;
      padding: 1rem 3rem;
      
   }
   .home_view .section + .section {
      border-top: solid 1px var(--linkColor);      
   }
   .button.call_to_action {
      background: #fff;
      color: var(--linkColor);
      border-color: var(--activeLink)
   }
   .button.call_to_action:hover {
      background: var(--activeColor);
      color: var(--activeLink);
      border-color: transparent;
   }
   
   .section.introduction .buttons {
      display: flex;
      width: 100%;
      justify-content: center;
   }
	
	</style>