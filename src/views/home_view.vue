
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
            <div class="section_content">
               <span class="title section_title">Copy the Hex Values</span>
               <p>Copy/paste the hex values or grab a screenshot to sample in Photoshop. All palettes are free to use.</p>
               <div class="content_body">
               
                <div v-for="designer in exampleDesigners" v-if="designer.example == true" class="content_element">
                    <img class="image" :src="image_path(designer.image)" :alt="designer.name" />
                    <div class="designer_name" v-text="designer.name"></div>
                     <div class="color_element">
                        <div class="color" :style="{'border-color' : designer.color1}" v-text="designer.color1"></div>
                        <div class="color" :style="{'border-color' : designer.color2}" v-text="designer.color2"></div>
                     </div>
                </div>
            </div>
               
               
            </div>
         </section>
         
         <section class="section pros_colors">
            <div class="section_content">
               <span class="title section_title">Copy the Hex Values</span>
               <p>Each selected artist is great at makign colors that work well together. Here are some featured artists:</p>
               
               <div class="pros">
                  <div class="pro"v-for="designer in exampleDesigners">
                     <a v-if="designer.link" class="link"  :href="designer.link" target="_blank" v-text="designer.name" ></a>
                     <span v-else class="link" v-text="designer.name" ></span>
                  </div>
               </div>
            </div>
         
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
						userInfo          : 'userInfo',
                  exampleDesigners  : 'exampleDesigners',
					}),
				},
				
				created() {
					
				},
				methods: {
               image_path(src) {
                  var path;
                  src? path = require('../assets/images/'+src) : '';
                  return path;
               }
					
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
      font-size: 1.5rem;
      font-weight: 300;
      margin-top: 2rem;
      padding: 0 3rem;
      
   }
   .home_view .section + .section {
      border-top: solid 1px var(--lineColor);      
   }
   .button.call_to_action {
      background: var(--background2);
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
   .section.instructions .content_body {
      display: flex;
         justify-content: space-around;
      padding: 1rem 6%;   
   }
   .section.instructions .content_element {
      display: flex;
         flex-wrap: wrap;
      width: 25%;
   }
   .section.instructions p {
      font-size: 1.65rem;
      margin: 1rem 0;
   }
   .section.instructions .content_body .image {
      display: flex;
      width: 100%;
      justify-content: center;
   }
   .section.instructions .content_body .designer_name {
      display: flex;
         justify-content: center;
         align-items: center;
      width: 100%;   
      font-size: 2rem;
      margin: 1rem 0;
      line-height: 1.5em;      
      
   }
   .section.instructions .content_body .color_element {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-top: 1rem;      
   }
   .section.instructions .content_body .color {
      display: flex;
         justify-content: center;
      text-align: center;   
      width: auto;
      font-size: .9rem;
      flex-wrap: wrap;
      border-top: solid 5px transparent;
      padding-top: 1rem;
   }
   
   .section.pros_colors .pros {
      display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
      width: 100%;
      padding: 0 6%;
   }   
   .section.pros_colors .pros .pro {
      display: flex;
         justify-content: center;
      padding: 0 1rem;
      width: 33%;
   }
   .section.pros_colors .pros .pro .link {
         text-align: center;
         font-size: 1.25rem;
         line-height: 3rem;
         font-family: Merriweather, "adobe-caslon-pro",serif;
         color: var(--textColor);     
         border-bottom: none;        
      }
      .link:hover {
         background: var(--highlightColor);
      }
   
   
	
	</style>