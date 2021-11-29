

import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import homeStyle from '../../styles/Homepage.module.css'
export default function OurReviews() {
return (
<>
<section className="d-none d-md-block">
   <h2 className="text-center">Our reviews</h2>
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"><i class="bi bi-chevron-right"></i></button>    
      </div>
      <div className="carousel-inner container">
         <div className="carousel-item active" data-bs-interval="10000">
            <div className="d-flex align-self-stretch justify-content-between">
               <aside className="col-md-6 card rounded-0 p-5">
                  <div className="d-flex">
                     <div className=""><img src="/next/images/Julie-A.jpg" al="OVLG client Julie A." /></div>
                     <div className="ps-2">
                        <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <div><b>Julie A.</b></div>
                     </div>
                  </div>
                  <p>Sean and the Oak View Law Group have been absolutely fantastic in helping me with my settlement. I am very pleased with their professionalism and the outcome of their diligent work. I highly recommend Sean and the team for your financial legal needs. Much appreciated!</p>
                  <div><img src="https://www.ovlg.com/images/yelp-logo_60x30.png" alt="Yelp logo" /></div>
               </aside>
               <aside className="col-md-6 card rounded-0 p-5">
                  <div className="d-flex">
                     <div className=""><img src="/next/images/Cheritta-Stewart.jpg" al="OVLG client Cheritta Stewart" /></div>
                     <div className="ps-2">
                        <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <div><b>Cheritta Stewart</b></div>
                     </div>
                  </div>
                  <p>I learned about Oakview Law group after I had gotten in over my head with pay day loans (don't ever take out payday loans). I contacted them twice before I signed up . Each time the staff was pleasant and helpful. I Once I did sign up  I was assigned to my account manager Sheldon Anderson.  
                     <span className="collapse" id="collapseExample"> Sheldon is a great client representative that is responsive and detail oriented.  Sheldon was able to answer any questions that I had upon initial sign up and for the duration of my account.</span>
                     <span className="text-primary cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Read full review</span>
                  </p>
                  <div><img src="https://www.ovlg.com/images/Google_2015_logo_60x20.png" alt="Google logo" /></div>
               </aside>
            </div>
         </div>
         <div className="carousel-item" data-bs-interval="10000">
            <div className="d-flex align-self-stretch justify-content-between flex-wrap">
               <aside className="col-sm-12 col-md-6 card rounded-0 p-5">
                  <div className="d-flex">
                     <div className=""><img src="/next/images/Danielle-F.jpg" al="OVLG client anielle F." /></div>
                     <div className="ps-2">
                        <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <div><b>Danielle F.</b></div>
                     </div>
                  </div>
                  <p>I just finished their program last month. I am happy even though my credit score got messed up, OVLG was upfront that it would happen. I am working hard to restore my credit score and VOWED never to allow myself to get back into this situation ever again. Thanks, OVLG for helping me get out of a bad situation.</p>
                  <div><img src="https://www.ovlg.com/images/yelp-logo_60x30.png" alt="Yelp logo" /></div>
               </aside>
               <aside className="col-sm-12 col-md-6 card rounded-0 p-5">
                  <div className="d-flex">
                     <div className=""><img src="/next/images/Fabiola-Gutierrez.jpg" alt="OVLG client Fabiola Gutierrez"/></div>
                     <div className="ps-2">
                        <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <div><b>Fabiola Gutierrez</b></div>
                     </div>
                  </div>
                  <p>I would definitely recommend OVLG they are very helpful, responding, and they always resolve your problems. A big Thank you to Michael Day he always respond to all my emails very professionally, I couldn’t be more happier to have had him help me get thru this. Thank you s much .</p>
                  <div><img src="https://www.ovlg.com/images/Google_2015_logo_60x20.png" alt="Google logo" /></div>
               </aside>
            </div>
         </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      </button>
   </div>
</section>
<section className="d-block d-md-none">
   <h2 className="text-center">Our reviews</h2>
   <aside className="col-md-6 card rounded-0 p-4">
      <div className="d-flex">
         <div className=""><img src="/next/images/Julie-A.jpg" al="OVLG client Julie A." /></div>
         <div className="ps-2">
            <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
            </div>
            <div><b>Julie A.</b></div>
         </div>
      </div>
      <p>Sean and the Oak View Law Group have been absolutely fantastic in helping me with my settlement. I am very pleased with their professionalism and the outcome of their diligent work. I highly recommend Sean and the team for your financial legal needs. Much appreciated!</p>
      <div><img src="https://www.ovlg.com/images/yelp-logo_60x30.png" alt="Yelp logo" /></div>
   </aside>
   <aside className="col-md-6 card rounded-0 p-4">
      <div className="d-flex">
         <div className=""><img src="/next/images/Cheritta-Stewart.jpg" al="OVLG client Cheritta Stewart" /></div>
         <div className="ps-2">
            <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
            </div>
            <div><b>Cheritta Stewart</b></div>
         </div>
      </div>
      <p>I learned about Oakview Law group after I had gotten in over my head with pay day loans (don't ever take out payday loans). I contacted them twice before I signed up . Each time the staff was pleasant and helpful. I Once I did sign up  I was assigned to my account manager Sheldon Anderson.  
         <span className="collapse" id="collapseExample"> Sheldon is a great client representative that is responsive and detail oriented.  Sheldon was able to answer any questions that I had upon initial sign up and for the duration of my account.</span>
         <span className="text-primary cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Read full review</span>
      </p>
      <div><img src="https://www.ovlg.com/images/Google_2015_logo_60x20.png" alt="Google logo" /></div>
   </aside>
   <aside className="col-sm-12 col-md-6 card rounded-0 p-4">
      <div className="d-flex">
         <div className=""><img src="/next/images/Danielle-F.jpg" al="OVLG client anielle F." /></div>
         <div className="ps-2">
            <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
            </div>
            <div><b>Danielle F.</b></div>
         </div>
      </div>
      <p>I just finished their program last month. I am happy even though my credit score got messed up, OVLG was upfront that it would happen. I am working hard to restore my credit score and VOWED never to allow myself to get back into this situation ever again. Thanks, OVLG for helping me get out of a bad situation.</p>
      <div><img src="https://www.ovlg.com/images/yelp-logo_60x30.png" alt="Yelp logo" /></div>
   </aside>
   <aside className="col-sm-12 col-md-6 card rounded-0 p-4">
      <div className="d-flex">
         <div className=""><img src="/next/images/Fabiola-Gutierrez.jpg" alt="OVLG client Fabiola Gutierrez"/></div>
         <div className="ps-2">
            <div><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning pe-1"></i><i class="bi bi-star-fill text-warning"></i>
            </div>
            <div><b>Fabiola Gutierrez</b></div>
         </div>
      </div>
      <p>I would definitely recommend OVLG they are very helpful, responding, and they always resolve your problems. A big Thank you to Michael Day he always respond to all my emails very professionally, I couldn’t be more happier to have had him help me get thru this. Thank you s much .</p>
      <div><img src="https://www.ovlg.com/images/Google_2015_logo_60x20.png" alt="Google logo" /></div>
   </aside>
</section>

</>
);
}

