
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
                <div class="content_element">
                    <div class="image"><img src="@/assets/images/kyle_miller.svg" alt="Kyle Miller"></div>
                    <div class="designer_name">Kyle Miller</div>
                    <div class="content_body_color">
                        <div class="color_element">
                            <div class="color-box bg-kyle"></div>
                            <div class="text-box">#ed5740</div>
                        </div>
                        <div class="color_element">
                            <div class="color-box bg-miller"></div>
                            <div class="text-box">#a6d7df</div>
                        </div>
                    </div>
                </div>
                <div class="content_element">
                    <div class="image"><img src="@/assets/images/steve_scott.svg" alt="Steve Scott"></div>
                    <div class="designer_name">Steve Scott</div>
                    <div class="content_body_color">
                        <div class="color_element">
                            <div class="color-box bg-steve"></div>
                            <div class="text-box">#f8d14c</div>
                        </div>
                        <div class="color_element">
                            <div class="color-box bg-scott"></div>
                            <div class="text-box">#2c9fd1</div>
                        </div>
                    </div>
                </div>
                <div class="content_element">
                    <div class="image"><img src="@/assets/images/mei_tan.svg" alt="Mei Tan"></div>
                    <div class="designer_name">Mei Tan</div>
                    <div class="content_body_color">
                        <div class="color_element">
                            <div class="color-box bg-mei"></div>
                            <div class="text-box">#3d9cdf</div>
                        </div>
                        <div class="color_element">
                            <div class="color-box bg-tan"></div>
                            <div class="text-box">#cd6136</div>
                        </div>
                    </div>
                </div>
            </div>
               
               
            </div>
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
      padding: 1rem 2rem;   
   }
   .section.instructions .content_element {
      display: flex;
         flex-wrap: wrap;
      width: 30%;
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
      line-height: 1em;      
      
   }
   .section.instructions .content_body .content_body_color{
      display: flex;
      width: 100%;
      justify-content: space-between;
      
   }
   .section.instructions .content_body .color_element {
      display: flex;
      width: 40%;
      flex-wrap: wrap;
      
   }
   .section.instructions .content_body {
      
      
   }
   .section.instructions .content_body {
      
      
   }
   
   
	
	</style>