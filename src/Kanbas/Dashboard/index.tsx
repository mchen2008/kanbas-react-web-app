export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        
        <div className="wd-dashboard-course"> 
          
        <img src="/images/algorithms.jpg" width={200} />
        <div>
        <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/2345/Home">
              CS2345 Algorithms
            </a>
            <p className="wd-dashboard-course-title">
              Algorithm
            </p>
            <a href="#/Kanbas/Courses/2345/Home"> Go </a>
          
            </div>
          </div>


        
        <div className="wd-dashboard-course"> 
          
        <img src="/images/cloud.jpg" width={200} />
        <div>
        <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3456/Home">
              CS3456 Cloud Computing
            </a>
            <p className="wd-dashboard-course-title">
            Cloud Computing
            </p>
            <a href="#/Kanbas/Courses/3456/Home"> Go </a>
          
            </div>
          </div>
      
          
          <div className="wd-dashboard-course"> 
          
          <img src="/images/angular.jpg" width={200} />
          <div>
          <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/4567/Home">
                CS4567 Angular
              </a>
              <p className="wd-dashboard-course-title">
              Angular
              </p>
              <a href="#/Kanbas/Courses/4567/Home"> Go </a>
            
              </div>
            </div>

            <div className="wd-dashboard-course"> 
          
          <img src="/images/security.jpg" width={200} />
          <div>
          <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5678/Home">
                CS5678 Network Security
              </a>
              <p className="wd-dashboard-course-title">
              Angular
              </p>
              <a href="#/Kanbas/Courses/5678/Home"> Go </a>
            
              </div>
            </div>

            <div className="wd-dashboard-course">
            <img src="/images/ai.jpg" width={200} />
          <div>
          <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/6789/Home">
                CS6789 Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title">
              Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/6789/Home"> Go </a>
        
              </div>
            </div>

            <div className="wd-dashboard-course">
            <img src="/images/cv.jpg" width={200} />
          <div>
          <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/7890/Home">
                CS7890 Computer Vision
              </a>
              <p className="wd-dashboard-course-title">
              Computer Vision
              </p>
              <a href="#/Kanbas/Courses/7890/Home"> Go </a>
        
              </div>
            </div>


      
      
      
      </div>
    </div>
);}
