
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
            <div class="section_content">
               <span class="title section_title">How to Pick Colors</span>
               <div class="content">
                  <p>Color is an underrated design tool. When used correctly, it can make a website sing. When I was a beginner, I often used too many colors in my designs. My choices weren’t based on much - either trends at the time or whatever mood I was in. Eventually, I would fumble my way to create something nice, but it often took a while.</p>
                  <span class="paragraph_title">There’s a better way!</span>
                  <p>There are three ideas you can use that will make it easier to pick colors. They are: The <b>concept</b> of the site, the <b>brand</b>, and your <b>personal preferences</b>. If you can figure out these three things, choosing colors will be much easier. Let's explore each of them.</p>
                  
                  <span class="subtitle">The Concept</span>
                  <p>Does your site have a concept? It probably should. Here are some examples of sites with concepts:  <a class="concept_link" href="/preserve">Preserve</a>, <a class="concept_link" href="/legwork">Legwork</a>, <a class="concept_link" href="/si-le-soleil">Si Le Soleil</a>. Look at each example and try to figure out what the concept is (hint: answers at the bottom).</p>
                  <p>Having a concept can greatly narrow down your color options.&nbsp;If your concept is water-related, using lots of red probably won’t work well. Water &amp; the color red live in different worlds.</p>
                  <p>Your colors should support your concept. Or at the very least, not conflict. </p>
                  
                  <span class="subtitle">The Brand</span>
                  <p>Let's say you’re doing a site for the Vietnam Veteran’s Memorial in Washington DC. That’s a very serious subject matter. The tone (or brand) of any war memorial is respectful and serious, so your color choices should be as well. Bright and happy colors would feel out of place, in the same way that someone selling balloons near the memorial would feel tacky. Blacks, whites, dark, and muted colors would be a better fit for a war memorial site, these colors would be "on brand".</p>
               </div>  
               <div class="content"> 
                  <p>Or maybe you're doing a site for a big company. In that case, they'll have a well-defined brand which will make picking colors easier.&nbsp;If you’re doing a site for Target, you would likely use a combination of red and white, because red is a large part of their brand. Or a site for Ikea would use their signature blue and yellow.&nbsp;There are some instances when the site experience you're creating will be so far removed from the brand that you can use other unrelated colors. But before doing this, make sure you clear it with your creative director or the client. </p>
                  <p>Doing a site for a small client? In this case, the brand won’t be well defined in a style guide. For small businesses, it’s much more important to find out what the owners like. Get examples of websites they admire and ask what they like about them.</p>
                  <p>Your instinct will be to push for colors you really like, but small businesses the owners live and breath the business so it’s just going to be a matter of what they like.</p>
                  <span class="subtitle">Your Tastes</span>
                  <p>This is the last step. If you’ve decided on a concept and know what the brand represents. Now it's time to figure out what you like and measure it against your concept and the brand. You want things you like that ALSO work with your website's concept and brand. I like to find inspiration from sites like <a class="concept_link" target="_blank" href="http://mindsparklemag.com">Mind Sparkle Mag</a>. Say your concept is&nbsp;“handmade"  like in the Preserve example above. What are some other sites that embody handmade? What colors do they use? Do they use a complimentary color scheme? Analogous? &nbsp;My guess is many of them will use a warm color palette with&nbsp;analogous&nbsp;colors because the concept of "handmade" is a very human notion.</p>
               </div>
            </div>   
         </section>
         
         
         <section class="section pick_colors">
            <div class="section_content">
               <span class="title section_title">How to Pick The Best Icons</span>
               <div class="content">
                  <span class="subtitle">Consistency</span>
                  <p>When choosing icons for your site, it is important to make sure they're rendered in a similar style. When your icons live in the same world as your site's color palette, typography, and visual style, the entire site thing will communicate in the same voice. One of the best places to find icon libraries like this is at <a class="concept_link" target="_blank" href="https://icons8.com">Icons 8</a>.  </p>
                  
                  <span class="subtitle">Simplicity</span>
                  <p>Icons are meant to symbolize certain actions. They shouldn't be complex illustrations. The more complex, the longer it will take for the user to digest it. A great icon will use as few strokes as possible, and no more. </p>
                </div>  
               <div class="content">    
                  <span class="subtitle">Clear Concepts</span>
                  <p>A good icon should clearly indicate what will happen when you click it. Some concepts are easier to illustrate than others. A house icon is fairly well recognizable and can be used as a home button. But what about something like the <a class="concept_link" target="_blank" href="https://icons8.com/icon/47829/save">save</a> icon? It's been decades since people used floppy drives. For that reason it's not ideal. However because it's so ubiquitous, a whole new generation of users who has never held a floppy disk in their hand has come to understand what the icon means. So to introduce a new visual icon is risky. I can't say what the right choice is, but it's important to keep these ideas in mind when choosing icons.</p>
               </div>   
            </div>   
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
   .home_view  .section_title {
      width: 100%;
      justify-content: center;
      text-align: center;
   }
   .home_view .section p {
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
      
   
   .section.pick_colors .section_content {
      justify-content: space-around;
      padding: 0 4%;
   }
   .section.pick_colors .content {
      display: flex;
         flex-wrap: wrap;
         justify-ontent: space-around;
      width: 40%;
   }
   .section.pick_colors p {
      font-size: 1.1rem;
      letter-spacing: .05em;
      padding: 0;
      margin-top: 0;
      text-align: justify;
   }  
   .section.pick_colors p::first-letter {
      font-size: 1.35em;
      color: #000;
   }   
   .section.pick_colors .paragraph_title {
      margin: 1rem 0;
      color: #000;
   }
   
   
	
	</style>