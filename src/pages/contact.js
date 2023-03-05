import $ from "jquery"
import "./contact.css"
import "./contactCard.css"
 export default function Contact() {
    $(document).ready(function(){
        var contentSection = $('.content-section');
        var navigation = $('nav');
        
        //when a nav link is clicked, smooth scroll to the section
        navigation.on('click', 'a', function(event){
            event.preventDefault(); //prevents previous event
            smoothScroll($(this.hash));
        });
        
        //update navigation on scroll...
        $(window).on('scroll', function(){
            updateNavigation();
        })
        //...and when the page starts
        updateNavigation();
        
        /////FUNCTIONS
        function updateNavigation(){
            contentSection.each(function(){
                var sectionName = $(this).attr('id');
                var navigationMatch = $('nav a[href="#' + sectionName + '"]');
                if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
                      ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
                    {
                        navigationMatch.addClass('active-section');
                    }
                else {
                    navigationMatch.removeClass('active-section');
                }
            });
        }
        function smoothScroll(target){
            $('body,html').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });


  return(<>
    <nav>
	<ul>
		<li>
			<a href="#section1">
				<span class="rect"></span>
				<span class="circle"></span>
				Events and Competitions
			</a>
		</li>
		<li>
			<a href="#section2">
				<span class="rect"></span>
				<span class="circle"></span>
				Finance
			</a>
		</li>
		<li>
			<a href="#section3">
				<span class="rect"></span>
				<span class="circle"></span>
				Marketing
			</a>
		</li>
		<li>
			<a href="#section4">
				<span class="rect"></span>
				<span class="circle"></span>
				Media and Publicity
			</a>
		</li>
		<li>
			<a href="#section5">
				<span class="rect"></span>
				<span class="circle"></span>
				Public Relations
			</a>

		</li>
        <li>
			<a href="#section6">
				<span class="rect"></span>
				<span class="circle"></span>
				Show Management
			</a>
		</li>
        <li>
			<a href="#section7">
				<span class="rect"></span>
				<span class="circle"></span>
				Design
			</a>
		</li>
        <li>
			<a href="#section8">
				<span class="rect"></span>
				<span class="circle"></span>
				Wen and App
			</a>
		</li>
        <li>
			<a href="#section9">
				<span class="rect"></span>
				<span class="circle"></span>
				Festival Coordinator
			</a>
		</li>
        
	</ul>
</nav>
<section id="section1" class="content-section">
<div class="container">
<div class="panel">
  <div class="ring">
    <div class="card card1"></div>
    <div class="border">
      <p class="title">Brazil</p>
      <div class="slide">
        <h6 class="para">Latest Deals from Heathrow</h6>
        <div class="line">
          <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
          <h6 class="para">£849</h6>
        </div>
        <div class="line">
          <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
          <h6 class="para">£659</h6>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="panel">
  <div class="ring">
    <div class="card card1"></div>
    <div class="border">
      <p class="title">Brazil</p>
      <div class="slide">
        <h6 class="para">Latest Deals from Heathrow</h6>
        <div class="line">
          <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
          <h6 class="para">£849</h6>
        </div>
        <div class="line">
          <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
          <h6 class="para">£659</h6>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="panel">
  <div class="ring">
    <div class="card card1"></div>
    <div class="border">
      <p class="title">Brazil</p>
      <div class="slide">
        <h6 class="para">Latest Deals from Heathrow</h6>
        <div class="line">
          <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
          <h6 class="para">£849</h6>
        </div>
        <div class="line">
          <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
          <h6 class="para">£659</h6>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</section>
<section id="section2" class="content-section">
	<h1>SECTION TWO</h1>
</section>
<section id="section3" class="content-section">
	<h1>SECTION THREE</h1>
</section>
<section id="section4" class="content-section">
	<h1>SECTION FOUR</h1>
</section>
<section id="section5" class="content-section">
	<h1>SECTION FIVE</h1>
</section>
<section id="section6" class="content-section">
	<h1>SECTION six</h1>
</section>
<section id="section7" class="content-section">
	<h1>SECTION 7</h1>
</section>
<section id="section8" class="content-section">
	<h1>SECTION 8</h1>
</section>
<section id="section9" class="content-section">
	<h1>SECTION 9</h1>
</section>

	<div class="about"><a href="http://janetmndz.com" target="_blank">♡</a></div>

</> )
  }