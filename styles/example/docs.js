module.exports = {
  name:   'Examples',
  state:  'Alpha',
  examples: [
    {
      title: 'Example 1',
      html: '\
      <h2>Getting Started</h2>\n\n\
      <p>These instructions are for setting up a web Channel in Signal Fuse Data Hub.</p>\n\n\
      <p>When logging into Signal for the first time, you will be prompted to set up your code snippet in your website. The code snippet must be added to each page of your website. This code allows Signal to manage data collection and distribution on your site based on the rules you will provide in the system. Because Signal&#39;s server dynamically determines which tags will fire on each page, the Signal code placed on every page of your site will be the exact same snippet.</p>\n\n\
      <p>Because Signal knows when you have implemented the code snippet on your site, you will be able to start seeing page views. Once you have copied the code snippet onto each page (preferably the footer of each page) of your website, you can click the Start Adding Tags button, and add your first tag!</p>\n\n\
      <h2>Next: Add a Tag</h2>\n\n\
      </p>Click the Start Adding Integrations button at the bottom of the page and you will be brought to the Signal Catalog which includes tags from our <a href="https://brighttag.desk.com/customer/portal/articles/1300337-brighttag-certified-partner-program">Certified Partners</a> and more.</p>\n\n\
      <p>Use the search bar at the top left to find the tag you want to add. It is recommended that your first tag solely use static data &rsaquo;values (like User IDs) instead of dynamic data values (like shopping cart total) since those require the setup of <a href="https://brighttag.desk.com/customer/portal/articles/831835-adding-a-data-element">Data Elements.</a></p>\n\n\
      <p>In this example, we are adding a DoubleClick Floodlight/Spotlight (Pixel) tag. Add the tag&rsquo;s name, any comments to orient you later, and the required fields of Source ID, Type, and Category. Information boxes will come up on the right side when you are filling in the fields explaining more about what information is required. The fields of Order ID and Custom Data are not required but the information box on the right explains why you might need to populate these fields.</p>\n\n\
      <p>Once you click Create Integration, you will be asked to assign that tag to a source (aka a Page). A tag will only fire on its assigned Page(s).&nbsp;​</p>\n\n\
      <p>If your tag should fire on every single page of your website, you can easily assign the tag to &ldquo;All Pages&rdquo;. Simply click the Unassigned tab and it will switch to Assigned. Then click Save &amp; Continue. &nbsp;Signal automatically creates an &ldquo;All Pages&rdquo; Page for you representing every URL of your website. The ** added into the URL field in Signal is a wildcard that represents everything in that URL of your website. To read more about the wildcard concept and usage, <a href="https://brighttag.desk.com/customer/portal/articles/854568-page-patterns-brighttag-wildcards">click here</a>. </p>\n\n\
      <p>You have now assigned that tag to those pages.</p>\n\n\
      <h2>Optional: Add a Source</h2>\n\n\
      <p>​If you want to assign this tag to a specific page or range of pages, then you will need to add a new Page by clicking on the &ldquo;Add and assign a new Source&rdquo; link underneath the Sources table.&nbsp;</p>\n\n\
      <p>When adding your page name, be sure to note the Naming Guide shown on the right. You can also refer to this article on <a href="https://brighttag.desk.com/customer/portal/articles/867182-pages-tour">page setup</a> for some tips on naming conventions.&nbsp;​ </p>\n\n\
      <p>When the Page Name is added, add the URL pattern. Note the URL Pattern explanation on the right side when that field is selected. The information in that panel can be expanded to show more. Additionally, to learn more about URLs and page patterns, you can read <a href="https://brighttag.desk.com/customer/portal/articles/832244-url-pattern-includes-excludes">this article</a></p>\n\n\
      <p>After adding your URL pattern, include any comments to help orient later you to this page, and either click Save and Assign Page or Save and Assign Another if you have another page to add. You will be brought back to the Tag Assignment page where your newly created Page will already be assigned. Assign additional pages to the Tag if necessary or click Save &amp; Continue where you will be taken to the Tag&rsquo;s Statistics Overview page.</p>\n\n\
      <h2>Next: Preview Tag</h2>\n\n\
      <p>When the tag is created and assigned, it will automatically go into Preview mode. It is important to test your tag in Preview to make sure it is set up correctly and behaves the way you wish it to. You can click on the Next step link in the yellow bar at the top of the page to learn how to Preview your tag.</p>\n\n\
      <p>Preview allows users to test tags in a production environment. Tags can be tested in Chrome using the<a href="http://brighttag.desk.com/customer/portal/articles/1153136-brighttag-inspector">Inspector</a>, a Chrome extension. To learn more about Preview mode and how to test and preview tags, <a href="https://brighttag.desk.com/customer/portal/articles/1254637-how-to-preview-tags">read this article</a>.&nbsp;</p>\n\n\
      <p>Once you have tested your tag is set up correctly and you are ready to make it live, you will need to click on the Preview tab and move the tag into Active mode before it will fire.&nbsp;</p>\n\n\
      <p><strong>Congratulations!</strong> You have successfully completed the set-up process!</p>'
    },
    {
    	title: 'Example 2',
    	html: '\
    	<p>It can be confusing to find your tag firing when you are using Signal. You will need to use HTTP monitoring tools. There are several that are available for free in each browser.&nbsp;</p>\n\n\
    	<ul>\n\n\
    	<li>There is a tool in Firefox called <a href="https://getfirebug.com/">Firebug</a>.</li>\n\n\
    	<li>The Safari developer tool is called Web Inspector.</li>\n\n\
    	<li>There is a stand-alone application called Charles.</li>\n\n\
    	<li>In Chrome, you can use the Signal extension, <a href="https://brighttag.desk.com/customer/portal/articles/1153136-installing-brighttag-inspector">Tag Inspector</a>.</li>\n\n\
    	<li>There are several versions of developer tools in the different versions of Internet Explorer.</li>\n\n\
    	</ul>\n\n\
    	<p>In Safari, the developer tools are not automatically visible. You must open Safari, and click Preferences.</p>\n\n\
    	<p>Once you have the tools loaded, you will be able to see tags fire, both in <a href="https://brighttag.desk.com/customer/portal/articles/1254637-how-to-preview-tags">Preview</a> and in real time. When the Preference menu comes up, make sure the box for Show Develop menu in menu bar is checked.</p>\n\n\
    	<p>When it is, you will see the Develop option in your browser at the top rail.</p>\n\n\
    	<p>Once the Develop Tools are loaded in the Safari Browser, go to the website you are working with, and click Develop, and then Show Web Inspector.</p>\n\n\
    	<p>Select Timelines from the Navigation bar within the inspector. It will be blank at first.</p>\n\n\
    	<p>You will need to reload your page, or click on an element within the page to see the tag fire. In this example we are looking for a Google Analytics tag. It is assumed that you know what your tag looks like, so you can find it within the timeline.</p>\n\n\
    	<p>Here is the Google Analytics tag, which is highlighted in blue, and you can see it is firing after or below the tag.js (which is the Signal tag).</p>'
    },
		{
    	title: 'Example 3',
    	html: '\
    	<h2>The Basics</h2>\n\n\
    	<p>Cache (pronounced &lsquo;cash&rsquo;) is a component of computing that stores data locally on a computer or server to help speed up communication. For example, if a website is showing the same image on every page there is no need for the browser to reach out to the server to retrieve the image to show a user each time a new page is loaded, rather it can reach into its local cache and pull the image from there instead, making for a faster experience. This logic applies to many protocols used online.</p>\n\n\
    	<p>A cache-buster, as it relates to online advertising and marketing, is a way of preventing browsers and servers from using locally saved data in a request or a response, ensuring that every time a computer or server makes a fresh requests to another computer it is is caught by any tags or cookies on the page. This is typically done through the use of appending a random number to the end of a URL, thereby &ldquo;tricking&rdquo; the computer into thinking it is a new request instead of something that has been saved locally. This is done to ensure that fresh data can be delivered to a computer (typically a cookie). Alternately the more modern servers and browsers can set headers to prevent an image or a request from caching, thus eliminating the need for the appended random numbers. However, it is still suggested that this is used.</p>\n\n\
    	<p>Signal handles this cache-busting automatically in the tag templates (where required) preventing the additional steps of manual configuration by a Signal user.</p>\n\n\
    	<h2>A Deeper Dive</h2>\n\n\
    	<p>When a browser navigates to a web page, the publisher&rsquo;s content server sends the browser an HTML file with instructions on how to format the page and where to retrieve all the images, text, and other elements.&nbsp;Downloading this information costs the browser time and memory. Saving or caching as much of the information as possible for future use in temporary folders on a user&#39;s hard drive is in the best interest of the user and the website provider.</p>\n\n\
    	<p>Cache-busting functionality is used for ads delivered on a website.&nbsp;If a user loaded a publisher&rsquo;s homepage, then went to an article page, then back to the homepage, the ad tag would be exactly the same. The browser would just reuse the ad it called the first time if a cache-buster was not implemented. Since publishers generally get paid for every impression, they don&rsquo;t want this to happen. They want the browser to call or consume another impression so they can charge for it.</p>\n\n\
    	<p>Advertisers might like the idea of free impressions, but when pressed, most would tell you&nbsp;cache-busting is a good thing for them. Recycled ads skew reports, disrupt ROI calculations, and add an uncertainty factor to campaign data, not to mention create unneeded tension between publishers and advertisers via discrepancies.</p>\n\n\
    	<h2>BrightTag.Random.integer(99999999)</h2>\n\n\
    	<p>BrightTag.Random is Signal&#39;s own random number generator. Just set the factor value and you will have a random number generator for that factor. For example:</p>\n\n\
    	<h2>BrightTag.Random.integer(999) </h2>\n\n\
    	<p>...could (remember, it&#39;s random!) return: 123</p>\n\n\
    	<h2>BrightTag.Random.integer(999999)</h2>\n\n\
    	...could return: 123456'
    }
  ]
};

