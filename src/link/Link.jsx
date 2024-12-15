import PropTypes from "prop-types";




function Link({route}) {
    return (
        <div className="p-1 ">
           <li className="hover:bg-lime-700 mr-10 mc-6"><a href={route.path}>{route.name}</a></li>
        </div>
    );
}

Link.propTypes = {
    route:PropTypes.object
  
};

export default Link;