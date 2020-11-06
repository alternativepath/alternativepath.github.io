
// Obtain the root 
const rootElement = document.getElementById('root')
// Create a ES6 class component    
    class Course extends React.Component { 
// Use the render function to return JSX component      
    render() { 
      
        return (
        <div className="course">
         
          <div className="card" style ={{width: "18rem", margin:"0.7rem"}}>
            <img className="card-img-top" src={this.props.imageLink} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{this.props.courseName}</h5>
              <p className="card-text">{this.props.description}</p>

              
              <a href="../html\heat_transfer.html" className="btn btn-primary">Go To Course</a>
            </div>
          </div>
         
        </div>
      );
      } 
    }

// Create a function to wrap up your component
function App(){
  
  return(

  <div id ="courseContainer">
    <Course courseName="Control Systems Engineering" description="No course Description" imageLink="https://upload.wikimedia.org/wikipedia/commons/e/ee/Set-point_control.png"/>
    <Course courseName="Heat Transfer" description="No course Description" imageLink ="https://www.researchgate.net/profile/Ideen_Sadrehaghighi/publication/318562143/figure/fig35/AS:753699907440641@1556707469090/NASA-Highlights-How-all-3-Heat-Transfer-Methods-conduction-convection-and-radiation.png"/>
    <Course courseName="Product Design and development" description="No course Description" imageLink="https://www.innopd.com/wp-content/uploads/2016/04/Our-new-product-development-process.png"/>
    <Course courseName="Production engineering II" description="No course Description" imageLink="http://1.bp.blogspot.com/-cYV8u-yVMGg/VYNlbYB82cI/AAAAAAAABEs/oEjmHtHe2fQ/s1600/Fastacash_Header_12-06.jpg"/>
    <Course courseName="Maintenance Engineering" description="No course Description" imageLink="https://5.imimg.com/data5/GC/HA/GLADMIN-19077294/aircraft-maintenance-engineering-course-500x500.jpg"/>
   
  </div>
  );
}

// Use the ReactDOM.render to show your component on the browser
    ReactDOM.render(
      <App />,
      rootElement
    )